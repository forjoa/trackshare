'use server'
import { db } from '@/lib/db'
import { PlatformData } from '@/lib/types'
import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'

export async function POST(req: NextRequest) {
  try {
    const body = await req.formData()

    const artistId = body.get('artistId') as string
    const song = body.get('song') as string
    const photo: File | null = body.get('photo') as unknown as File

    if (!photo)
      return NextResponse.json({
        success: false,
        message: 'There is no image selected',
      })

    const platforms: PlatformData[] = []
    const platformKeys = Array.from(body.keys()).filter((key) =>
      key.startsWith('platforms[')
    )

    const platformIndices = Array.from(
      new Set(
        platformKeys.map((key) => {
          const match = key.match(/platforms\[(\d+)\]/)
          return match ? match[1] : null
        })
      ).values()
    ).filter((index) => index !== null) as string[]

    platformIndices.forEach((index) => {
      const platform = body.get(`platforms[${index}][platform]`) as string
      const link = body.get(`platforms[${index}][link]`) as string

      if (platform && link) {
        platforms.push({ platform, link })
      }
    })

    const transaction = await db.transaction('write')

    const bytes = await photo.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const photoName = `${Date.now()}-${photo.name.replaceAll(' ', '')}`
    const path = join(process.cwd(), 'public', 'uploads', photoName)
    await writeFile(path, buffer)

    const imagePath = `/uploads/${photoName}`

    try {
      const result = await transaction.execute({
        sql: 'INSERT INTO songs(title, artist_id, photo) VALUES (?, ?, ?)',
        args: [song, artistId, imagePath],
      })

      const songId = result.lastInsertRowid as bigint

      for (let i = 0; i < platforms.length; i++) {
        const { platform, link } = platforms[i]

        if (!platform || !link) {
          await transaction.rollback()
          return NextResponse.json(
            {
              success: false,
              message: `Invalid platform data at index ${i}`,
            },
            {
              status: 400,
            }
          )
        }

        await transaction.execute({
          sql: 'INSERT INTO platforms(platform, link, song_id) VALUES (?, ?, ?)',
          args: [platform, link, songId],
        })
      }

      await transaction.commit()

      return NextResponse.json({
        success: true,
        message: 'Song and platforms inserted correctly!',
      })
    } catch (error) {
      await transaction.rollback()
      return NextResponse.json(
        {
          success: false,
          message: `Error while sending the data: ${error}`,
        },
        {
          status: 500,
        }
      )
    } finally {
      await transaction.close()
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: `Error while sending the data: ${error}`,
      },
      {
        status: 500,
      }
    )
  }
}

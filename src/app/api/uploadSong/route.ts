'use server'
import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { artistId, song, platforms } = body

    if (!artistId || !song || !platforms || !Array.isArray(platforms)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid input data',
        },
        {
          status: 400,
        }
      )
    }

    const transaction = await db.transaction('write')

    try {
      const result = await transaction.execute({
        sql: 'INSERT INTO songs(title, artist_id) VALUES (?, ?)',
        args: [song, artistId],
      })

      const songId = result.lastInsertRowid

      for (let i = 0; i < platforms.length; i++) {
        const { platform, link } = platforms[i]
        console.log(platform, link, songId)

        if (!platform || !link) {
          console.log(`Invalid platform data at index ${i}`)
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
      console.log('Error during transaction, rolling back:', error)
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
    console.log('Error outside transaction:', error)
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

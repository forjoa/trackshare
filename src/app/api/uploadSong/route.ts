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

    const result = await db.execute({
      sql: 'INSERT INTO songs(title, artist_id) VALUES (?, ?)',
      args: [song, artistId],
    })

    const songId = result.lastInsertRowid

    for (let i = 0; i < platforms.length; i++) {
      const { platform, link } = platforms[i]
      if (!platform || !link) {
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

      await db.execute({
        sql: 'INSERT INTO platforms(platform, link, song_id) VALUES (?, ?, ?)',
        args: [platform, link, songId],
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Song and platforms inserted correctly!',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: `Error while sending the data`,
      },
      {
        status: 500,
      }
    )
  }
}

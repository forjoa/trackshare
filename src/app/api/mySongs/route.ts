'use server'
import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { id } = body

    const { rows } = await db.execute({
      sql: `SELECT 
                songs.song_id, 
                songs.title, 
                songs.artist_id
            FROM 
                songs
            JOIN 
                artists 
            ON 
                songs.artist_id = artists.artist_id
            WHERE 
                artists.artist_id = ?;
            `,
      args: [id],
    })

    return NextResponse.json({ data: rows })
  } catch {
    return NextResponse.json({
      success: false,
      message: 'Something went wrong while getting your songs',
    })
  }
}

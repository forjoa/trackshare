import { db } from '@/lib/db'
import { PlatformData } from '@/lib/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const songId = req.nextUrl.searchParams.get('id')

  try {
    const { rows } = await db.execute({
      sql: `
        SELECT 
            s.song_id,
            s.title AS song_title,
            s.photo AS song_photo,
            p.platform,
            p.link
        FROM 
            songs s
        LEFT JOIN 
            platforms p ON s.song_id = p.song_id
        WHERE 
            s.song_id = ?;
      `,
      args: [songId],
    })

    if (rows.length === 0) {
      return NextResponse.json({ success: false, message: 'No song found' })
    }

    const { song_id, song_title, song_photo } = rows[0]
    let platforms: PlatformData[] = []

    rows.forEach((row) => {
      if (row.platform && row.link) {
        platforms.push({
          platform: row.platform as string,
          link: row.link as string,
        })
      }
    })

    const formattedResult = {
      song_id,
      song_title,
      song_photo,
      platforms,
    }

    return NextResponse.json(formattedResult)
  } catch (error) {
    console.error('Error fetching song data:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch song data',
    })
  }
}

'use server'
import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid content type',
        },
        { status: 400 }
      )
    }

    const body = await req.json()

    const { artist_name, fullname, email, password } = body

    const { rows } = await db.execute({
      sql: 'SELECT * FROM artists WHERE artist_name = ? OR email = ?',
      args: [artist_name, email],
    })

    if (rows.length > 0) {
      return NextResponse.json({
        success: false,
        message: 'There is already an account with your email or artist name',
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await db.execute({
      sql: 'INSERT INTO artists (artist_name, fullname, email, password) VALUES (?, ?, ?, ?)',
      args: [artist_name, fullname, email, hashedPassword],
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error('Error while processing the data:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Error while processing the data',
      },
      { status: 500 }
    )
  }
}

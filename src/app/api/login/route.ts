'use server'
import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { Artist } from '@/lib/types'
import jwt from 'jsonwebtoken'

const secretKey = 'my_secret_key'

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

    const { email, password } = body
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email and password are required',
        },
        { status: 400 }
      )
    }

    const result = await db.execute({
      sql: 'SELECT * FROM artists WHERE email = ?',
      args: [email],
    })

    const artist = result.rows[0] as unknown as Artist

    if (!artist) {
      return NextResponse.json({
        success: false,
        message: 'Account not found',
      })
    }

    const passwordMatch = await bcrypt.compare(password, artist.password)

    if (!passwordMatch) {
      return NextResponse.json({
        success: false,
        message: 'Incorrect password',
      })
    }

    const token = jwt.sign(
      {
        artist_id: artist.artist_id,
        artist_name: artist.artist_name,
        email: artist.email,
        fullname: artist.fullname,
      },
      secretKey,
      { expiresIn: '1h' }
    )

    return NextResponse.json({
      success: true,
      token: token,
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

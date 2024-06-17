'use server'
import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Error while sending the data',
      },
      {
        status: 500,
      }
    )
  }
}

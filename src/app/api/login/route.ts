'use server'
import { NextRequest, NextResponse } from 'next/server'

// Nota: Utilizamos `NextRequest` en lugar de `NextApiRequest`

export async function GET(req: NextRequest) {
  console.log(req)
  return NextResponse.json({ message: 'Hola, mundo!' })
}

'use client'
import { useEffect, useState } from 'react'
import LoginRegister from '@/components/LoginRegister'
import jwt from 'jsonwebtoken'
import { Artist } from '@/lib/types'

export default function Upload() {
  const [user, setUser] = useState<Artist | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user')
      setUser(jwt.decode(storedUser as string) as unknown as Artist)
    }
  }, [])

  console.log(user)

  if (!user) {
    return <LoginRegister />
  }

  return <h1>Upload</h1>
}

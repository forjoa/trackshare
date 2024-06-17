'use client'
import { useEffect, useState } from 'react'
import LoginRegister from '@/components/LoginRegister'
import jwt from 'jsonwebtoken'
import { Artist } from '@/lib/types'
import UploadForm from '@/components/UploadForm'

export default function Upload() {
  const [user, setUser] = useState<Artist | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user')
      setUser(jwt.decode(storedUser as string) as unknown as Artist)
    }
  }, [])

  if (!user) {
    return <LoginRegister />
  }

  return <UploadForm artist={user} />
}

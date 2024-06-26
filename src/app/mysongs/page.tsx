'use client'
import { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { Artist, Song } from '@/lib/types'
import { Toaster, toast } from 'sonner'
import placeholder from '@/assets/placeholder.svg'
import Image from 'next/image'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'

export default function MySongs() {
  const [user, setUser] = useState<Artist | null>(null)
  const [mySongs, setMySongs] = useState<Song[]>()

  const fetchMySongs = async () => {
    try {
      const result = await fetch('/api/mySongs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: user?.artist_id }),
      })

      const response = await result.json()

      setMySongs(response.data)
    } catch {
      toast.error('Error while fetching your data')
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user')
      setUser(jwt.decode(storedUser as string) as unknown as Artist)
    }
  }, [])

  useEffect(() => {
    fetchMySongs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <div className='mx-auto max-w-md space-y-6 bg-[#262628] rounded p-6 min-w-[350px]'>
      <Toaster position='top-center' />
      <p className='font-bold text-xl'>My songs:</p>
      <div className='flex flex-col gap-4'>
        {mySongs?.length != undefined ? (
          mySongs.map((song, index) => (
            <Link
              key={index}
              href={`/songs/${song.song_id}`}
              className='bg-[#3E271B] py-4 px-6 rounded flex items-center gap-4 cursor-pointer border border-[#FF822E]'
            >
              <CldImage
                className='object-cover w-[100px] aspect-square rounded'
                width={100}
                height={100}
                src={song.photo ?? placeholder}
                alt={song.title}
              />
              <p>{song.title}</p>
            </Link>
          ))
        ) : (
          <p>You don&apos;t have any song yet</p>
        )}
      </div>
    </div>
  )
}

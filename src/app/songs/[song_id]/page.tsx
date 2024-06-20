'use client'
import { Song } from '@/lib/types'
import { useEffect, useState } from 'react'

export default function SongLink({ params }: { params: { song_id: number } }) {
  const [songId, setSongId] = useState<number>()
  const [song, setSong] = useState<Song>()

  useEffect(() => {
    setSongId(params.song_id)
  }, [params.song_id])

  return (
    <div className='absolute top-0 left-0 w-full h-screen z-50 grid place-items-center'>
      <div className='md:w-1/2 w-3/4'>
        <p>song id: {songId}</p>
      </div>
    </div>
  )
}

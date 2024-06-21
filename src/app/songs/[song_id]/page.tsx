'use client'
import { ArrowLeft } from '@/assets/icons'
import { CompleteSong } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'

export default function SongLink({ params }: { params: { song_id: number } }) {
  const [songId, setSongId] = useState<number>()
  const [song, setSong] = useState<CompleteSong>()

  useEffect(() => {
    setSongId(params.song_id)
  }, [params.song_id])

  useEffect(() => {
    try {
      const fetchSong = async () => {
        const result = await (await fetch(`/api/song?id=${songId}`)).json()

        setSong(result)
      }

      if (songId) {
        fetchSong()
      }
    } catch (e) {
      toast.error('Something went wrong while getting the song')
    }
  }, [songId])

  return (
    <div className='absolute w-full h-screen grid place-items-center z-[100]'>
      <Toaster position='top-center' />
      {song && song.song_photo && (
        <div className='absolute inset-0 overflow-hidden -z-10'>
          <Image
            src={song.song_photo}
            alt='Background Image'
            layout='fill'
            objectFit='cover'
            className='transform rotate-180 blur-lg scale-150'
          />
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>
      )}
      <div className='md:w-1/2 w-3/4 relative z-20 bg-white bg-opacity-10 rounded-xl py-12'>
        {song && song.song_photo && (
          <div className='w-3/4 m-auto flex flex-col gap-6'>
            <Link href={'/'}>
              <ArrowLeft />
            </Link>
            <Image
              src={song.song_photo}
              alt={song.song_title}
              width={1000}
              height={1000}
              className='aspect-square object-cover rounded-xl'
            />
            <h1 className='text-xl font-bold'>{song.song_title}</h1>
            <div className='flex flex-col gap-4'>
              {song.platforms.map((platform, index) => (
                <Link
                  key={index}
                  href={platform.link}
                  className='rounded-xl p-4 bg-white text-black border-2 border-black shadow-[10px_10px_0px_0px_#000]'
                >
                  {platform.platform}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

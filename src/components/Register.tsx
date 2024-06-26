'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
import Input from './ui/Input'
import { Artist, ChangePages } from '@/lib/types'
import { Toaster, toast } from 'sonner'

export default function Register({ changePages }: ChangePages) {
  const [newArtist, setNewArtist] = useState<Artist>({
    artist_name: '',
    fullname: '',
    email: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const { name, value } = e.currentTarget

    setNewArtist((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArtist),
    })

    const response = await result.json()

    if (!response.success) {
      toast.error(response.message)
    } else {
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', response.token)
        window.location.reload()
      }
    }
  }

  return (
    <div className='mx-auto max-w-md space-y-6'>
      <Toaster position='top-center' />
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold'>Register as an Artist</h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Create your account to start showcasing your art.
        </p>
      </div>
      <form
        className='rounded-lg bg-[#262628] shadow-sm'
        onSubmit={handleSubmit}
      >
        <div className='p-6 space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='artist-name'
              >
                Artist Name
              </label>
              <Input
                name='artist_name'
                placeholder='Enter your artist name'
                type='text'
                required
                value={newArtist.artist_name as string}
                onChange={handleChange}
              />
            </div>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='full-name'
              >
                Full Name
              </label>
              <Input
                name='fullname'
                placeholder='Enter your full name'
                type='text'
                required
                value={newArtist.fullname as string}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='space-y-2'>
            <label
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='email'
            >
              Email
            </label>
            <Input
              name='email'
              placeholder='Enter your email'
              required
              type='email'
              value={newArtist.email}
              onChange={handleChange}
            />
          </div>
          <div className='space-y-2'>
            <label
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='password'
            >
              Password
            </label>
            <Input
              name='password'
              required
              type='password'
              value={newArtist.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex items-center p-6'>
          <button
            className='bg-[#FF822E] text-white inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full'
            type='submit'
          >
            Register
          </button>
        </div>
        <div className='p-6 pt-0 text-blue-500 w-full flex justify-end'>
          <button onClick={() => changePages(true)}>Login</button>
        </div>
      </form>
    </div>
  )
}

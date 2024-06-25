import { Artist, ChangePages } from '@/lib/types'
import Input from './ui/Input'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Toaster, toast } from 'sonner'

export default function Login({ changePages }: ChangePages) {
  const [artist, setArtist] = useState<Artist>({
    email: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const { name, value } = e.currentTarget

    setArtist((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(artist),
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
    <>
      <div className='mx-auto max-w-md space-y-6'>
        <Toaster position='top-center' />
        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold'>Login as an Artist</h1>
          <p className='text-gray-500 dark:text-gray-400'>
            Access to your account and share your music.
          </p>
        </div>
        <form
          className='rounded-lg bg-[#262628] shadow-sm'
          onSubmit={handleSubmit}
          method='POST'
          action=''
        >
          <div className='p-6 grid grid-cols-2 gap-4'>
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
                value={artist.email}
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
                value={artist.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex items-center p-6'>
            <button
              className='bg-[#FF822E] text-white inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full'
              type='submit'
            >
              Login
            </button>
          </div>
          <div className='p-6 pt-0 text-blue-500 w-full flex justify-end'>
            <button onClick={() => changePages(false)}>Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

import { NoteIcon } from '@/assets/icons'
import Link from 'next/link'

export default function NavigationBar() {
  return (
    <header className='px-4 lg:px-6 h-14 flex items-center sticky top-0 backdrop-blur-xl z-50'>
      <Link className='flex items-center justify-center gap-1' href='/'>
        <NoteIcon />
        <span>Trackshare</span>
      </Link>
      <nav className='ml-auto flex gap-4 sm:gap-6 items-center'>
        <Link
          className='text-sm font-medium hover:underline underline-offset-4'
          href='/'
        >
          Explore
        </Link>
        <Link
          className='text-sm font-medium hover:underline underline-offset-4 bg-white text-black py-2 px-4 rounded'
          href='/upload'
        >
          Upload
        </Link>
      </nav>
    </header>
  )
}

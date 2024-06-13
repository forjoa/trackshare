import { ChangeEvent } from 'react'

interface InputProps {
  name: string
  placeholder?: string
  required: boolean
  type: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
  return (
    <input
      className='flex h-10 w-full rounded-md border border-gray-800 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black bg-white bg-opacity-10'
      {...props}
    />
  )
}

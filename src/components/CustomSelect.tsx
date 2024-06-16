import { AppleMusic, Spotify } from '@/assets/icons'
import { useState } from 'react'

const CustomSelect = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('Select platform')
  const [isOpen, setIsOpen] = useState(false)

  const platforms = [
    {
      value: 'spotify',
      label: 'Spotify',
      icon: <Spotify />,
    },
    {
      value: 'apple',
      label: 'Apple Music',
      icon: <AppleMusic />,
    },
  ]

  const handleSelect = (platform: any) => {
    setSelectedPlatform(platform.label)
    setIsOpen(false)
  }

  return (
    <div className='relative w-full max-w-md'>
      <div
        className='flex h-10 w-full items-center justify-between rounded-md border border-gray-800 text-white bg-white bg-opacity-10 px-3 py-2  cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedPlatform}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-chevron-down h-4 w-4 opacity-50'
        >
          <path d='m6 9 6 6 6-6'></path>
        </svg>
      </div>
      {isOpen && (
        <div className='absolute top-full left-0 right-0 bg-white bg-opacity-10 backdrop-blur-xl border border-gray-800 rounded-b-md z-10'>
          {platforms.map((platform) => (
            <div
              key={platform.value}
              className='flex items-center p-2 cursor-pointer hover:bg-gray-700'
              onClick={() => handleSelect(platform)}
            >
              {platform.icon}
              <span className='ml-2'>{platform.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomSelect

import { useState } from 'react'
import { PlusIcon } from '@/assets/icons'
import Input from './ui/Input'
import CustomSelect from './CustomSelect'

interface PlatformData {
  platform: string
  link: string
}

interface EventI {
  target: {
    name: PlatformDataKey
    value: string
  }
}

type PlatformDataKey = 'platform' | 'link'

export default function UploadForm() {
  const [platforms, setPlatforms] = useState<PlatformData[]>([
    { platform: '', link: '' },
  ])

  const handlePlatformChange = (index: number, event: EventI) => {
    const newPlatforms = [...platforms]
    newPlatforms[index][event.target.name] = event.target.value
    setPlatforms(newPlatforms)
  }

  const addPlatform = () => {
    setPlatforms([...platforms, { platform: '', link: '' }])
  }

  const removePlatform = (index: number) => {
    const newPlatforms = platforms.filter((_, i) => i !== index)
    setPlatforms(newPlatforms)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Aquí puedes manejar la lógica para enviar los datos al backend
    console.log('Platforms:', platforms)
  }

  return (
    <div className='mx-auto max-w-md space-y-6'>
      <div className='rounded-lg border border-gray-800 bg-card text-card-foreground shadow-sm w-full max-w-md'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col space-y-1.5 p-6'>
            <h3 className='whitespace-nowrap text-2xl font-semibold leading-none tracking-tight'>
              Add Music Links
            </h3>
            <p className='text-sm text-gray-500'>
              Enter links to your music on different platforms.
            </p>
          </div>
          <div className='p-6 grid gap-4'>
            {platforms.map((platformData, index) => (
              <div className='grid gap-2' key={index}>
                <label
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  htmlFor={`platform-${index}`}
                >
                  Platform
                </label>
                <CustomSelect
                  name='platform'
                  value={platformData.platform}
                  onChange={(event) => handlePlatformChange(index, event)}
                />
                <label
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  htmlFor={`link-${index}`}
                >
                  Link
                </label>
                <Input
                  type='text'
                  name='link'
                  placeholder='Enter link'
                  required
                  value={platformData.link}
                  onChange={(event) =>
                    handlePlatformChange(index, event as unknown as EventI)
                  }
                />
                {index > 0 && (
                  <button
                    type='button'
                    onClick={() => removePlatform(index)}
                    className='text-red-500'
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type='button'
              onClick={addPlatform}
              className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-accent hover:text-accent-foreground h-10 w-10 ml-auto'
            >
              <PlusIcon />
              <span className='sr-only'>Add another platform</span>
            </button>
          </div>
          <div className='flex items-center p-6'>
            <button
              type='submit'
              className='bg-white text-black inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
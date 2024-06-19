import { useState } from 'react'
import { PlusIcon } from '@/assets/icons'
import Input from './ui/Input'
import CustomSelect from './CustomSelect'
import { Artist, EventI, PlatformData } from '@/lib/types'
import { Toaster, toast } from 'sonner'

export default function UploadForm({ artist }: { artist: Artist }) {
  const [songName, setSongName] = useState('')
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const result = await fetch('/api/uploadSong', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          artistId: artist.artist_id,
          song: songName,
          platforms,
        }),
      })

      if (result.ok) {
        toast.success('Song uploaded correctly')
      } else {
        toast.error('Error uploading your song')
      }
    } catch {
      toast.error('Error uploading your song')
    }
  }

  return (
    <div className='mx-auto max-w-md space-y-6'>
      <Toaster position='top-center' />
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
          <div className='px-6 flex flex-col'>
            <span className='text-white'>Song image</span>
            <label
              htmlFor='file-upload'
              className='relative cursor-pointer bg-white rounded-md border border-gray-300 hover:border-gray-400 focus-within:border-blue-500 px-4 py-2 inline-flex items-center space-x-2'
            >
              <input id='file-upload' type='file' className='hidden' />
            </label>
          </div>

          <div className='p-6 grid gap-4'>
            <div className='grid gap-2'>
              <label htmlFor='name'>Enter your song name</label>
              <Input
                name='name'
                required
                type='text'
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
              />
            </div>
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
                  <div className='w-full flex justify-end'>
                    <button
                      type='button'
                      onClick={() => removePlatform(index)}
                      className='text-red-500 border border-red-500 bg-red-500 bg-opacity-40 py-1 px-4 rounded'
                    >
                      Remove
                    </button>
                  </div>
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

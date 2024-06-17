import { PlusIcon } from '@/assets/icons'
import Input from './ui/Input'
import CustomSelect from './CustomSelect'

export default function UploadForm() {
  return (
    <div className='mx-auto max-w-md space-y-6'>
      <div className='rounded-lg border border-gray-800 bg-card text-card-foreground shadow-sm w-full max-w-md'>
        <form>
          <div className='flex flex-col space-y-1.5 p-6'>
            <h3 className='whitespace-nowrap text-2xl font-semibold leading-none tracking-tight'>
              Add Music Links
            </h3>
            <p className='text-sm text-gray-500'>
              Enter links to your music on different platforms.
            </p>
          </div>
          <div className='p-6 grid gap-4'>
            <div className='grid gap-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='platform'
              >
                Platform
              </label>
              <CustomSelect />
            </div>
            <div className='grid gap-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='link'
              >
                Link
              </label>
              <Input
                type='url'
                name='link'
                placeholder='Enter link'
                required
                value=''
                onChange={() => console.log('xd')}
              />
            </div>
            <button
              type='button'
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

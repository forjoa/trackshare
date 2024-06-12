import Input from './ui/Input'

export default function Register() {
  return (
    <div className='mx-auto max-w-md space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold'>Register as an Artist</h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Create your account to start showcasing your art.
        </p>
      </div>
      <form className='rounded-lg border border-gray-800 shadow-sm'>
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
                id='artist-name'
                placeholder='Enter your artist name'
                required
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
                id='full-name'
                placeholder='Enter your full name'
                required
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
              id='email'
              placeholder='Enter your email'
              required
              type='email'
            />
          </div>
          <div className='space-y-2'>
            <label
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='password'
            >
              Password
            </label>
            <Input id='password' required type='password' />
          </div>
        </div>
        <div className='flex items-center p-6'>
          <button
            className='bg-white text-black inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full'
            type='submit'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

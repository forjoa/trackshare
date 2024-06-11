export default function Login() {
  return (
    <div className='mx-auto max-w-md space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-bold'>Login as an Artist</h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Access to your account and share your music.
        </p>
      </div>
      <form className='rounded-lg border border-gray-800 shadow-sm'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <label
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
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
            <input
              className='flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              id='password'
              required
              type='password'
            />
          </div>
        </div>
        <div className='flex items-center p-6'>
          <button
            className='bg-white text-black inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full'
            type='submit'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

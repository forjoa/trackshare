import Image from 'next/image'
import placeholder from '@/assets/placeholder.svg'
import Link from 'next/link'
import KeyFeature from '@/components/KeyFeature'

const keyFeatures = [
  {
    title: 'Easy Uploads',
    content:
      'Drag and drop your songs or albums to instantly share them with the community.',
  },
  {
    title: 'Shareable Links',
    content:
      'Generate unique links to your songs and playlists to share with friends and followers.',
  },
  {
    title: 'Community Feed',
    content:
      'Discover new music, engage with other users, and build your network of music enthusiasts.',
  },
  {
    title: 'Playlists',
    content:
      'Create and curate playlists to showcase your favorite songs and share them with the community.',
  },
  {
    title: 'Personalized Recommendations',
    content:
      'Get tailored music recommendations based on your listening history and preferences.',
  },
  {
    title: 'Mobile-Friendly',
    content:
      'Access your music and community on the go with our responsive mobile experience.',
  },
]

export default function Home() {
  return (
    <main className='flex-1'>
      <section className='w-full pt-12 md:pt-24 lg:pt-32 border-b border-gray-800 flex justify-center'>
        <div className='container space-y-10 xl:space-y-16'>
          <div className='grid gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16'>
            <div>
              <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                Share{' '}
                <span className='bg-gradient-to-r from-[#F2761D] to-[#FF9F63] bg-clip-text text-transparent'>
                  Your Music
                </span>{' '}
                with the World
              </h1>
            </div>
            <div className='flex flex-col items-start space-y-4'>
              <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                Easily upload and share your favorite songs with friends and the
                community. Discover new music, create playlists, and engage with
                fellow music enthusiasts.
              </p>
              <Link
                className='inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-[#FF822E] text-white hover:bg-[#FF9F63] focus-visible:ring-gray-300'
                href='/upload'
              >
                Upload Your Songs
              </Link>
            </div>
          </div>
          <Image
            src={placeholder}
            width='1270'
            height='300'
            alt='Hero'
            className='mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover'
          />
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 flex justify-center'>
        <div className='container space-y-12 px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                Key Features
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Discover, Share, and Connect
              </h2>
              <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Our platform makes it easy to upload, share, and discover new
                music. Connect with like-minded music enthusiasts and build your
                community.
              </p>
            </div>
          </div>
          <div className='mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
            {keyFeatures.map((feature, index) => (
              <KeyFeature
                key={index}
                title={feature.title}
                content={feature.content}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

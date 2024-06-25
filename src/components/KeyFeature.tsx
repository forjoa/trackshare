interface KeyFeatureProps {
  title: string
  content: string
}

export default function KeyFeature({ title, content }: KeyFeatureProps) {
  return (
    <div className='grid gap-1 border border-transparent p-4 hover:border-[#6C3D21] rounded transition-all'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='text-sm text-gray-500 dark:text-gray-400'>{content}</p>
    </div>
  )
}

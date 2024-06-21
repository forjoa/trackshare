import { Spotify, AppleMusic, Youtube } from '../icons'

export interface PlatformsSelect {
  value: string
  label: string
  icon: () => JSX.Element
}

export const platforms: PlatformsSelect[] = [
  {
    value: 'spotify',
    label: 'Spotify',
    icon: Spotify,
  },
  {
    value: 'apple',
    label: 'Apple Music',
    icon: AppleMusic,
  },
  {
    value: 'youtube',
    label: 'YouTube',
    icon: Youtube,
  },
]

export function getPlatformDetails(value: string) {
  const platform = platforms.find((p) => p.value === value)
  if (!platform) return null
  return { label: platform.label, icon: platform.icon }
}
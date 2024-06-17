import { Spotify, AppleMusic, Youtube } from '../icons'

interface PlatformsSelect {
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
    icon: Youtube
  }
]

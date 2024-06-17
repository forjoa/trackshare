import { Dispatch, SetStateAction } from 'react'

export interface Artist {
  artist_id?: number
  artist_name?: string
  fullname?: string
  email: string
  password: string
}

export interface ChangePages {
  changePages: Dispatch<SetStateAction<boolean>>
}

export interface PlatformData {
  platform: string
  link: string
}

export interface EventI {
  target: {
    name: PlatformDataKey
    value: string
  }
}

export type PlatformDataKey = 'platform' | 'link'

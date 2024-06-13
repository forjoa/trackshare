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

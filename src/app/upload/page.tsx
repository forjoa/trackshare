import LoginRegister from '@/components/LoginRegister'

export default function Upload() {
  let user = null

  if (typeof window !== 'undefined') {
    user = localStorage.getItem('user')
  }

  if (!user) {
    return <LoginRegister />
  }

  return <h1>upload</h1>
}

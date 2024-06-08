export default function Upload() {
  let user = null

  if (typeof window !== 'undefined') {
    user = localStorage.getItem('user')
  }

  if (!user) {
    return <div>Please log in to upload your songs.</div>
  }

  return <h1>upload</h1>
}

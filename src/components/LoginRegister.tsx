'use client'
import Register from './Register'
import Login from './Login'
import { useState } from 'react'

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true)

  return isLogin ? <Login changePages={setIsLogin}/> : <Register changePages={setIsLogin}/>
}

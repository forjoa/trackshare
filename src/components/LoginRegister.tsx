'use client'
import Register from './Register'
import Login from './Login'
import { useState } from 'react'

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(false)

  return isLogin ? <Login /> : <Register />
}

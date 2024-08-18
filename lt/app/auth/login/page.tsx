'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';
export default function Login() {
  const isCheckLogin = true;
  const router = useRouter();
  
  const loginUser=()=>{
    if (isCheckLogin){
    router.push('/home');
    }
  }
  return (
    <div>trang dang nhap
      <br />
      <button onClick={loginUser}>Login</button>
    </div>
  )
}

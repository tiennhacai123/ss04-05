'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Home() {
  const pathName = usePathname();
  return (
    <div>
      <b>b1</b><br />
        <b>Đây là trang chủ</b><br />
        <b>b5,6</b><br />
        <div className='style'>
         <Link className={pathName=='/home/home5'?'active':''} href={'/home/home5'}>Home</Link>
        <Link className={pathName=='/home/about'?'active':''} href={'/home/about'}>About</Link>
        <Link className={pathName=='/home/contact'?'active':''} href={'/home/contact'}>Contact</Link>
        <Link className={pathName=='/home/login'?'active':''} href={'/home/login'}>Login</Link> 
        </div>
        
    </div>
  )
}

'use client'
import React from 'react'
interface IDProduct{
    idProduct: string
}
interface Props{
    params:IDProduct
}
export default function ProductDetail(props:Props) {
    console.log('gia tri props:', props);
    const {params}=props;
  return (
    <div>San pham co id la:{params.idProduct}</div>
  )
}
/*
    client component
    server component
*/

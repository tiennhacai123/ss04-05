'use client'
import React from 'react'
interface idProduct{
    idProduct: string
}
 interface Props {
    params: idProduct
 }
export default function idProduct(props:Props) {
    console.log(props);
    const {params} = props
  return (
    <div>
        <b>B3</b><br />
        <b>Product id: {params.idProduct}</b>
    </div>
  )
}

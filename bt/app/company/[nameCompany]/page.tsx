'use client'
import React from 'react'

interface nameCompany{
    nameCompany: string;
}
interface Props{
    params:nameCompany
}
export default function nameCompany(props: Props) {
    console.log('gia tri props',props);
    const {params} = props;
  return (
    <div>
        <b>b4</b><br />
        <b>Company name: {params.nameCompany}</b>
    </div>
  )
}

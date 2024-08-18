import React from 'react'

interface idUser {
    idUser:string,
}
interface Props{
    params:idUser
}
export default function idUser(props:Props) {
    const { params} = props;
  return (
    <div>
        <b>User Id:{params.idUser}</b>
    </div>
  )
}

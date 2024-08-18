import React from 'react'
interface idUser{
    idUser: string,
}
interface Props{
    params:idUser
}
export default function Posts(props:Props) {
    const {params}=props
  return (
    <div>
        Danh sách bài viết của User Id: <b>{params.idUser}</b>
    </div>
  )
}

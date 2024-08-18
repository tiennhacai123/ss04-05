import React from 'react'

interface idProject{
    idProject: string;
}
interface Props{
    params:idProject
}
export default function idProject(props:Props) {
    const { params} = props;
  return (
    <div>
        <b>Trang chi tiet du an co Id: {params.idProject}</b>
    </div>
  )
}

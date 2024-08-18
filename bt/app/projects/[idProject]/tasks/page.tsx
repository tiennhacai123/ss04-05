import React from 'react'

export default function Tasks(props:any) {
    const {params} = props;
  return (
    <div>
        Danh sach nhiem vu cua du an co Id: {params.idProject}
    </div>
  )
}

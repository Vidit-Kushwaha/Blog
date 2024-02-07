import React from 'react'
import { AiOutlineLoading } from "react-icons/ai";

const Loader = () => {
  return (
    <div className='overflow-hidden w-full flex justify-center p-2'>
      <AiOutlineLoading className='animate-spin overflow-y-hidden'/>
    </div>
  )
}

export default Loader

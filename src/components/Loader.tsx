import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

const Loader = () => {
  return (
    <div className="flex w-full justify-center overflow-hidden p-2">
      <AiOutlineLoading className="animate-spin overflow-y-hidden" />
    </div>
  )
}

export default Loader

import React, { FC } from 'react'
import Navbar from '@/components/sections/NavBar'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className = '' }) => {
  return (
    <div className={`relative w-full bg-white ${className}`}>
      <div className="absolute z-[99] my-auto">
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
          limit={1}
        />
      </div>
      <Navbar />
    </div>
  )
}

export default Header

import React, { FC } from 'react'
import Navbar from '@/components/NavBar'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className = '' }) => {
  return (
    <div className={`relative w-full bg-white ${className}`}>
      <Navbar />
    </div>
  )
}

export default Header

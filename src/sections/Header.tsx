// import NavBar from '@/components/NavBar'
import React, { FC } from 'react'
import NavBar from '../components/NavBar'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className = '' }) => {
  return (
    <div className={`sticky left-0 right-0 top-0 z-40 w-full ${className}`}>
      <NavBar />
    </div>
  )
}

export default Header

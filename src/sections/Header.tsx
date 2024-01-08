// import NavBar from '@/components/NavBar'
import React, { FC } from 'react'
import NavBar from './NavBar'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  return (
    <div className={`sticky top-0 w-full left-0 right-0 z-40 ${className}`}>
      <NavBar />
    </div>
  )
}

export default Header

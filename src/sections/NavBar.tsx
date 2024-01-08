import DarkModeToggle from '@/components/DarkModeToggle'
import { NavLinks } from '@/config/SocialMediaLinks'
import React, { FC } from 'react'

interface Props {
  className?: string
}

const NavBar: FC<Props> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Blogs</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            {
              NavLinks.map((link, index) => {
                return (
                  <a key={index} className="mr-5 hover:text-gray-900">{link.name}</a>
                )
              })
            }
          </nav>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
          </button> */}
          <DarkModeToggle className="ml-auto md:ml-0 lg:mr-5" />
        </div>
      </header>
    </div>
  )
}

export default NavBar

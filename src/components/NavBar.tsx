import DarkModeToggle from '@/components/DarkModeToggle'
import { NavLinks } from '@/config/SocialMediaLinks'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
  className?: string
}

const NavBar: FC<Props> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <header className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <Link
            href="/"
            className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
          >
            <span className="ml-3 text-xl">Blogs</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-4	md:mr-auto md:border-l md:border-gray-400 md:py-1 md:pl-4">
            {NavLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.url}
                  className="mr-5 hover:text-gray-900"
                >
                  {link.name}
                </Link>
              )
            })}
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

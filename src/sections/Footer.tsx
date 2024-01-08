import { socialMediaLinks } from '@/config/SocialMediaLinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Blogs</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Vidit Kushwaha —
            <Link
              href={
                socialMediaLinks.find((link) => link.name === 'Twitter')?.url ||
                ''
              }
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              {socialMediaLinks.find((link) => link.name === 'Twitter')
                ?.handle || ''}
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {socialMediaLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.url}
                  className={`text-gray-500 ${index !== 0 && 'ml-3'}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              )
            })}
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer

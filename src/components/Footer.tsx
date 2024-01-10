import { socialMediaLinks } from '@/config/SocialMediaLinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
          <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <span className="ml-3 text-xl">Blogs</span>
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
            © 2024 Vidit Kushwaha —
            <Link
              href={
                socialMediaLinks.find((link) => link.name === 'Twitter')?.url ||
                ''
              }
              className="ml-1 text-gray-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              {socialMediaLinks.find((link) => link.name === 'Twitter')
                ?.handle || ''}
            </Link>
          </p>
          <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
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

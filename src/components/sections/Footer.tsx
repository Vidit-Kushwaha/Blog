import { logo } from '@/assets'
import { socialMediaLinks } from '@/config/SocialMediaLinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="mt-5 w-full border-t border-gray-300 bg-white text-gray-900">
      <footer className="body-font mx-auto max-w-screen-xl text-gray-600">
        <div className="container mx-auto flex flex-col items-center p-5 sm:flex-row">
          <Link
            href={'/'}
            className="title-font flex items-center justify-center font-medium text-gray-900  md:justify-start"
          >
            <Image
              src={logo}
              alt="logo"
              className="h-[60px] w-[75px] mix-blend-normal"
            />
          </Link>
          <p
            className="mt-4 text-sm text-black sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:pl-4"
            aria-disabled
          >
            © 2024 Vidit Kushwaha —
            <Link
              href={
                socialMediaLinks.find((link) => link.name === 'Twitter')?.url ||
                ''
              }
              className="ml-1 underline"
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
                  className={`text-gray-500 ${
                    index !== 0 && 'ml-3'
                  } duration-150 hover:text-black`}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={link.name}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
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

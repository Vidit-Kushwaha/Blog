'use client'
import { logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Suspense, use, useEffect, useRef, useState } from 'react'
import SearchSmall from '../SearchSmall'
import { IoIosSearch } from 'react-icons/io'
import { IoReorderThree } from 'react-icons/io5'

const NavLinks = [
  {
    name: 'Discover',
    url: '/discover',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
  {
    name: 'About',
    url: '/about',
  },
]

const SearchBarFallback = () => {
  return (
    <div className="border-b-[1px] border-black py-2">
      <div className="flex cursor-text touch-manipulation overflow-hidden">
        <div className="flex flex-grow flex-row-reverse items-center overflow-hidden">
          <div className="mx-2 flex">
            <IoIosSearch className="h-6 w-6 fill-gray-500" />
          </div>
          <div className="flex items-center">
            <div className="flex w-full flex-col items-start justify-start overflow-hidden">
              <input
                className="w-full text-ellipsis border-none bg-transparent text-black decoration-transparent focus:border-transparent focus:outline-none focus:ring-0"
                type="search"
                placeholder="Search..."
                aria-required="false"
                maxLength={100}
                autoComplete="off"
                aria-label="Search..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const NavBar = () => {
  const router = usePathname()
  const [active, setActive] = useState(router.replace('/', ''))
  const [toggle, setToggle] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setToggle((toggle) => false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }

    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setActive(router.replace('/', ''))
  }, [router])

  return (
    <>
      <header
        className={`relative mb-8 border-b border-gray-300 px-1 pb-4 pt-4 shadow-md sm:px-6 ${
          toggle && 'mb-2'
        }`}
        ref={ref}
      >
        <div className="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between">
          <Link
            href="/"
            className="relative mr-4 flex items-center"
            aria-label="blog logo"
          >
            <Image
              src={logo}
              alt="logo"
              className="h-[70px] w-[75px] mix-blend-normal"
            />
          </Link>
          <nav className="relative hidden items-center bg-white md:flex">
            <div className="r-0 relative hidden space-x-8 font-light md:block">
              {NavLinks.map((link, index) => (
                <Link
                  key={index}
                  className={`capitalize !text-black hover:underline hover:underline-offset-8 ${
                    active.toLowerCase() == link.name.toLowerCase()
                      ? 'font-semibold underline underline-offset-8'
                      : ''
                  }`}
                  href={link.url}
                  onClick={() => setActive(link.name)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="ml-8 flex items-center">
              <Suspense fallback={<SearchBarFallback />}>
                <SearchSmall />
              </Suspense>
            </div>
          </nav>
          <button
            className="absolute right-0 md:hidden"
            type="button"
            aria-label="Sidebar Toggle"
            onClick={() => {
              setToggle((toggle) => !toggle)
            }}
          >
            <IoReorderThree className="h-[60px] w-auto" />
          </button>
        </div>
      </header>
      <div
        className={`${
          !toggle && 'hidden'
        } absolute z-40 w-[100vw] transform justify-center overscroll-none bg-white py-10 shadow-md`}
      >
        <div className="r-0 relative flex flex-col space-y-8 text-lg font-light">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              className={`mx-auto text-xl capitalize !text-black hover:underline hover:underline-offset-8 ${
                active == link.name.toLowerCase()
                  ? 'font-semibold underline underline-offset-8'
                  : ''
              }`}
              href={link.url}
              onClick={() => setActive(link.name)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mx-auto my-8 max-w-[200px]">
          <Suspense fallback={<SearchBarFallback />}>
            <SearchSmall />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default NavBar

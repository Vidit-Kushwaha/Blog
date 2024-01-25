'use client'

import React, { useState } from 'react'
import { open, close } from '@/assets'
import { NavLinks } from '@/config/SocialMediaLinks'
import Image from 'next/image'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="navbar fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between bg-white px-3 py-6 ">
      <div
        className="container mx-auto flex w-full flex-row flex-wrap items-center
        "
      >
        <Link
          href="/"
          className="title-font flex items-center font-bold text-gray-900 md:mb-0"
        >
          <span className="ml-3 text-xl">Blogs</span>
        </Link>
        <div className="hidden flex-wrap items-center justify-center text-base md:ml-4 md:mr-auto md:flex md:border-l md:border-gray-400 md:py-1 md:pl-4 ">
          {NavLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.url}
                className={`font-poppins } mr-5 text-neutral-900 hover:text-gray-900`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
        <DarkModeToggle className="ml-auto hidden md:ml-0 md:block lg:mr-5" />

        <div className="flex flex-1 items-center justify-end duration-200 md:hidden">
          <Image
            src={toggle ? close : open}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer fill-neutral-700 object-contain text-black "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } absolute right-0 top-20 -z-0 mx-4 my-2 min-w-[140px] rounded-xl border-[1px] bg-neutral-50 p-6 transition-transform duration-100`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end">
              {NavLinks.map((nav, index) => (
                <li
                  key={index}
                  className={`font-poppins text-dimWhite mb-4 cursor-pointer text-[16px] font-normal `}
                >
                  <Link href={`${nav.url}`}>{nav.name}</Link>
                </li>
              ))}
              <li className="font-poppins text-dimWhite cursor-pointer text-[16px] font-normal">
                <DarkModeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

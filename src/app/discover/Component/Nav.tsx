'use client'
import Link from 'next/link'
import React, { FC, useState } from 'react'

const NavLink = [
  { title: 'all', href: '' },
  { title: 'featured', href: 'featured' },
]

interface NavProps {
  active: string
}

const Nav: FC<NavProps> = ({ active }) => {
  const [activeTab, setActiveTab] = useState(active || 'all')

  return (
    <nav className="m-auto mb-10 w-fit grid-cols-2 gap-6 self-center rounded-full border border-gray-400 p-2 md:grid">
      {NavLink.map((link, index) => (
        <Link
          key={index}
          className={`rounded-full px-6 py-1 text-center font-bold md:py-2 ${
            activeTab === link.title
              ? 'bg-black !text-white'
              : '!text-slate-900'
          } capitalize !no-underline transition-colors hover:bg-gray-400`}
          href={`/discover/${link.href}`}
          onClick={() => setActiveTab(link.title)}
        >
          {link.title.replace('-', ' ')}
        </Link>
      ))}
    </nav>
  )
}

export default Nav

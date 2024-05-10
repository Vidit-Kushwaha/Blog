import { BadgeColorType } from '@/types/BadgeColor'
import { Route } from 'next'
import React from 'react'
import ShareButton from './ShareButton'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  badge: { name: string; color?: BadgeColorType; href: Route }
  headline: string
  createdAt: string
  author: string
  readingTime: number
  featureThumbnail: string
  user: {
    name: string
    avatar: string
  }
}

const Header: React.FC<HeaderProps> = ({
  badge,
  headline,
  createdAt,
  author,
  readingTime,
  user: { name, avatar: url },
}) => {
  return (
    <header>
      <Link
        className="text-md relative py-1 font-medium uppercase text-black hover:text-blue-400"
        href={badge.href}
      >
        {badge.name}
      </Link>
      <h1
        className="mb-10 mt-5 max-w-4xl text-3xl font-semibold leading-[100%] text-neutral-900 md:text-4xl md:!leading-[120%] lg:text-4xl"
        title={headline}
      >
        {headline}
      </h1>
      <div className="border-neutral-300 py-3">
        <div className="flex items-baseline justify-between sm:flex-row">
          <div className="flex flex-shrink-0 flex-wrap items-center text-left text-sm leading-none text-neutral-700">
            <div
              className={`relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full shadow-inner sm:h-11 sm:w-11`}
            >
              <Image
                fill
                className={`absolute inset-0 h-full w-full rounded-full object-cover`}
                src={url}
                alt={name}
              />
            </div>
            <div className="ml-3">
              <div className="flex items-center font-bold">{author}</div>
              <div className="mt-[6px] text-xs">
                <span className="text-neutral-700">
                  {new Date(createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <span className="mx-2 font-semibold">·</span>
                <span className="text-neutral-700">{readingTime} min read</span>
              </div>
            </div>
          </div>
          <ShareButton
            className="my-auto cursor-pointer sm:mr-3 sm:mt-0"
            urlHeader={headline}
          />
        </div>
      </div>
    </header>
  )
}

export default Header

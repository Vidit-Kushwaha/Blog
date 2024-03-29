import Badge from '@/components/Badge'
import { BadgeColorType } from '@/types/BadgeColor'
import { Route } from 'next'
import React from 'react'
import ShareButton from './ShareButton'
import Image from 'next/image'

interface HeaderProps {
  badge: { name: string; color?: BadgeColorType; href: Route }
  headline: string
  description: string
  createdAt: string
  author: string
  sharedUrl: string
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
  description,
  createdAt,
  author,
  readingTime,
  sharedUrl,
  user: { name, avatar: url },
}) => {
  return (
    <header className="space-y-5 rounded-xl">
      <Badge href={badge.href} color={badge.color} name={badge.name} />
      <h1
        className="max-w-4xl text-3xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-4xl md:!leading-[120%] lg:text-4xl"
        title={headline}
      >
        {headline}
      </h1>
      <span className="block pb-1 text-base text-neutral-500 dark:text-neutral-400 md:text-sm">
        {description}
      </span>
      {/* author and share section */}
      <div className="border-b-[1px] border-t-[1px] border-neutral-300 py-3 dark:border-neutral-800">
        {/* author image */}
        <div className="flex items-baseline justify-between sm:flex-row">
          <div className="flex flex-shrink-0 flex-wrap items-center text-left text-sm leading-none text-neutral-700 dark:text-neutral-200">
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
                <span className="text-neutral-700 dark:text-neutral-300">
                  {new Date(createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <span className="mx-2 font-semibold">·</span>
                <span className="text-neutral-700 dark:text-neutral-300">
                  {readingTime} min read
                </span>
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

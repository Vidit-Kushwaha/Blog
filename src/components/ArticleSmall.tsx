import React, { FC } from 'react'
import Image from 'next/image'
import Badge from './Badge'

export interface Card3SmallProps {
  className?: string
  post: {
    _id: string
    headline: string
    featureThumbnail: string
    createdAt: string
    description?: string
    genre: string
    readingTime: number
    flag?: string
  }
}

const ArticleSmall: FC<Card3SmallProps> = ({ className = 'h-full', post }) => {
  const { headline, createdAt, featureThumbnail, genre, readingTime, flag } =
    post

  return (
    <div
      className={`relative flex flex-col-reverse rounded-lg border-[1px] p-2 transition-colors duration-150 hover:border-blue-400 sm:flex-row sm:items-center sm:justify-between ${className}`}
    >
      <div className="relative space-y-2 overflow-x-hidden">
        <div className="space-x-2">
          {flag && <Badge name={flag} color="gray" />}
          {genre && <Badge name={genre} />}
        </div>
        <h2 className="block truncate text-base font-semibold text-neutral-900 hover:border-blue-400 dark:text-neutral-100">
          <div className="font-semibold" title={headline}>
            {headline}
          </div>
        </h2>
        <div className="fledx-wrap inline-flex items-center text-sm leading-none  text-neutral-800 dark:text-neutral-200">
          <>
            <span className="line-clamp-1 font-normal text-neutral-500 dark:text-neutral-400">
              {readingTime} min read
            </span>
            <span className="mx-[6px] font-medium text-neutral-500 dark:text-neutral-400">
              ·
            </span>
            <span className="line-clamp-1 font-normal text-neutral-500 dark:text-neutral-400">
              {new Date(createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          </>
        </div>
      </div>

      <div
        title={headline}
        className={`group relative mb-5 block flex-shrink-0 overflow-hidden rounded-lg sm:mb-0 sm:ml-4 sm:w-28`}
      >
        <div className={`aspect-h-9 aspect-w-16 h-0 w-full sm:aspect-h-16`}>
          <Image
            fill
            src={featureThumbnail}
            title={headline}
            alt=""
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      </div>
    </div>
  )
}

export default ArticleSmall

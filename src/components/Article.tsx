import React, { FC } from 'react'
import Image from 'next/image'
import Badge from './Badge'
import { Post } from '@/types/postType'

export interface ArticleProps {
  className?: string
  post: Post
}

const Article: FC<ArticleProps> = ({ className = 'h-full', post }) => {
  const {
    headline,
    featureThumbnail,
    description,
    createdAt,
    genre,
    readingTime,
  } = post

  return (
    <div
      className={`group relative flex flex-col rounded-lg border-[1px] border-gray-200 p-2 hover:border-blue-500 sm:flex-row sm:items-center ${className}`}
    >
      <div
        className={`mb-5 block flex-shrink-0 overflow-hidden rounded-lg sm:mb-0  sm:w-40`}
      >
        <div
          className={`aspect-h-9 aspect-w-16 block h-0 w-full sm:aspect-h-16 `}
        >
          <Image
            fill
            src={featureThumbnail}
            alt={headline}
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      </div>
      <div className="flex flex-grow flex-col sm:ml-6">
        <div className="mb-4 space-y-2">
          {genre && <Badge name={genre} />}
          <div>
            <h2
              className={`line-clamp-2 block text-xl font-semibold text-neutral-900 hover:text-blue-700 dark:text-neutral-100`}
              title={headline}
            >
              {headline}
            </h2>
            <div className="hidden sm:mt-2 sm:block">
              <span className="md:text-md block max-w-prose truncate pb-1 text-base text-neutral-500 dark:text-neutral-400">
                {description}
              </span>
            </div>
          </div>

          <div className="fledx-wrap inline-flex items-center text-sm leading-none  text-neutral-800 dark:text-neutral-200">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article

import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Badge from './Badge'

export interface ArticleProps {
  className?: string
  post: {
    _id: string
    headline: string
    featureThumbnail: string
    createdAt: string
    // readingTime?: number
    description?: string
    genre?: string
  }
}

const Article: FC<ArticleProps> = ({ className = 'h-full', post }) => {
  const { _id, headline, featureThumbnail, description, createdAt, genre } =
    post
  const href = `/blog/${_id}`
  const readingTime = 5
  return (
    <div
      className={`group relative flex flex-col rounded-[30px] border-[1px] border-gray-200 p-2 sm:flex-row sm:items-center ${className}`}
    >
      <div
        className={`mb-5 block flex-shrink-0 overflow-hidden rounded-3xl sm:mb-0  sm:w-56`}
      >
        <Link
          href={href}
          className={`aspect-h-9 aspect-w-16 block h-0 w-full sm:aspect-h-16 `}
        >
          <Image
            fill
            src={featureThumbnail}
            alt={headline}
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </Link>
      </div>
      <div className="flex flex-grow flex-col sm:ml-6">
        <div className="mb-4 space-y-5">
          {genre && <Badge name={genre} />}
          <div>
            <h2
              className={`nc-card-title block text-xl font-semibold text-neutral-900 dark:text-neutral-100`}
            >
              <Link href={href} className="line-clamp-2" title={headline}>
                {headline}
              </Link>
            </h2>
            <div className="hidden sm:mt-2 sm:block">
              <span className="line-clamp-1 truncate text-base text-neutral-500 dark:text-neutral-400">
                {description}
              </span>
            </div>
          </div>

          <div
            className="fledx-wrap inline-flex items-center text-sm leading-none  text-neutral-800 dark:text-neutral-200"
            data-nc-id="PostCardMeta"
          >
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
      </div>
    </div>
  )
}

export default Article

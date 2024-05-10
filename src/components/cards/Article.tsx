import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface ArticleProps {
  className?: string
  post: {
    headline: string
    featureThumbnail: string
    description?: string
    href: string
    _id: string
  }
}

const Article: FC<ArticleProps> = ({ className = 'h-full', post }) => {
  const { headline, featureThumbnail, description, _id } = post
  const href = `/blog/${_id}`
  return (
    <div
      className={`group relative flex flex-col py-2 sm:flex-row sm:items-center ${className}`}
    >
      <div
        className={`mb-5 block flex-shrink-0 overflow-hidden sm:mb-0  sm:w-40`}
      >
        <Link
          href={href}
          className={`aspect-h-9 aspect-w-16 block h-0 w-full sm:aspect-h-16`}
        >
          <Image
            fill
            src={featureThumbnail}
            alt={headline}
            className="rounded"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </Link>
      </div>
      <div className="flex flex-grow flex-col sm:ml-6">
        <div className="mb-4 space-y-2">
          <div>
            <Link
              href={href}
              className={`line-clamp-2 block text-xl font-semibold text-neutral-900 hover:underline hover:underline-offset-2`}
              title={headline}
            >
              {headline}
            </Link>
            <div className="hidden sm:mt-2 sm:block ">
              <p className="md:text-md line-clamp-3  pb-1 text-base text-neutral-500">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article

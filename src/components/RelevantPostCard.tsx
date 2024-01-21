import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Badge from './Badge'

// import Badge from '../Badge'
interface RelevantPostCardProps {
  id: string
  headline: string
  href: string
  featureThumbnail?: string
  date: string
  readTime?: string
}

const RelevantPostCard: React.FC<RelevantPostCardProps> = ({
  id = 1,
  headline,
  href = '/blog/1',
  featureThumbnail = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  date,
  readTime,
}) => {
    console.log('featureThumbnail', featureThumbnail)
    
  return (
    <div
      key={id}
      className="aspect-w-3 aspect-h-4 group relative overflow-hidden rounded-3xl shadow-lg"
    >
      <Link href={href}>
        <Image
          className="transform object-cover transition-transform duration-300 group-hover:scale-105"
          src={featureThumbnail}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          alt=""
        />
        <div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black"></div>
          <div className="absolute bottom-0 z-10 flex flex-col items-start justify-end space-y-2.5 p-4 text-xs text-neutral-600">
            <Badge name="Categories" />
            <h2 className="block text-lg font-semibold text-white ">
              {/* //titel   */}
              <span className="line-clamp-2">{headline}</span>
            </h2>

            <div className="flex text-neutral-200 hover:text-white">
              <span className="block truncate font-medium text-neutral-200 hover:text-white">
                {/* readTime */}
                10 min
              </span>
              <span className="mx-1.5 font-medium">·</span>
              <span className="truncate font-normal">
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RelevantPostCard

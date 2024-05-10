import topic from '@/utils/topic'
import Link from 'next/link'
import React from 'react'

const Topic = () => {
  return (
    <div>
      <section className="my-24 text-center md:px-4">
        <header className="mb-10 text-4xl font-medium antialiased">
          Discover Topics
        </header>
        <div className="flex flex-wrap justify-center gap-4 md:gap-y-8 lg:gap-x-5 lg:gap-y-8">
          {topic.map((topic, index) => (
            <Link
              key={index}
              className="hover:!no-underline"
              href={`/blog/search?q=${topic.toLowerCase().replace(/\s/g, '-')}`}
            >
              <span className="mr-2 inline-flex flex-row items-center gap-2 rounded-full border border-gray-500 bg-gray-100 px-3 py-2 align-middle text-sm font-medium !text-black !no-underline last:mr-0 hover:border-gray-700 hover:bg-gray-300 md:px-10 lg:bg-gray-200 lg:px-6 lg:py-4">
                <span className="capitalize">{topic}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Topic

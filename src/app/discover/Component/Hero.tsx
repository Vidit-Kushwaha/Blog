import { URL } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData(id: string) {
  const res = await fetch(`${URL}/api/v1/post/${id}`, {
    cache: 'no-cache',        
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const id = '65bcb8bafe446b52a5616077'
const Hero = async () => {
  const { data } = await getData(id)
  const href = `/blog/${id}`

  return (
    <section className="text-gray-600">
      <div className="flex flex-col-reverse items-center md:flex-row md:py-24">
        <div className="mb-16 flex flex-col items-start text-left md:mb-0 md:w-1/2 md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <Link
            className="relative my-5 text-lg font-normal uppercase text-black hover:text-blue-400"
            href={href}
          >
            {data.genre}
          </Link>
          <Link
            className="mb-4 text-2xl font-semibold text-gray-900 underline-offset-2 hover:underline md:text-3xl"
            href={href}
          >
            {data.headline}
          </Link>
          <p className="mb-8 line-clamp-3 text-sm leading-relaxed md:text-base">
            {data.description}
          </p>
          <div className="flex justify-center">
            <Link
              className="py-2 text-lg font-semibold text-black underline underline-offset-2 focus:outline-none"
              href={href}
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-full lg:max-w-lg">
          <Link
            href={href}
            className={`aspect-h-3 aspect-w-4 block h-0 w-full md:aspect-w-3`}
          >
            <Image
              fill
              src={data.featureThumbnail}
              alt={data.headline}
              className="rounded object-cover object-center transition-opacity duration-200 hover:opacity-90"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

import Link from 'next/link'
import React from 'react'
import { IoLogoTwitter } from 'react-icons/io5'
import { PiQuotesFill } from 'react-icons/pi'

const TwitterCard = () => {
  return (
    <div className="font-nunito-sans relative h-[33rem] rounded-2xl bg-transparent  text-slate-500 ">
      <div className="absolute h-full w-full bg-[#3770ff] text-neutral-300">
        <div className="grid h-full w-full grid-cols-1 content-between  space-y-2 p-8">
          <div>
            <span className="text-6xl font-semibold text-neutral-100">
              <PiQuotesFill className="rotate-180 text-neutral-200" />
            </span>
            <span className="text-4xl font-semibold text-neutral-100">
              It&apos;s not a bug, it&apos;s a feature
            </span>
            <span className="mt-4 text-xl font-semibold text-neutral-200">
              <br />- @helloVidit
            </span>
          </div>
          <Link
            href={`https://twitter.com/intent/tweet?&text=${encodeURIComponent(
              `It's not a bug, it's a feature - @helloVidit`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mx-auto w-full rounded-lg bg-[#1d9cec] py-3 text-2xl font-medium text-neutral-100 shadow-lg"
          >
            <div className="flex justify-center space-x-2">
              <IoLogoTwitter className="my-auto" />
              <div>Post</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TwitterCard

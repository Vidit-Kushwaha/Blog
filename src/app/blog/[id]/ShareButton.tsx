'use client'
import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import {
  IoEllipsisHorizontal,
  IoEllipsisVerticalSharp,
  IoLink,
  IoLogoLinkedin,
  IoLogoTwitter,
} from 'react-icons/io5'

interface ShareButtonProps {
  className?: string
  urlHeader: string
}

const ShareButton: React.FC<ShareButtonProps> = ({ className, urlHeader }) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const solutions = [
    {
      name: 'Share Link',
      href: shareUrl,
      icon: IoLink,
    },
    {
      name: 'Share on Twitter',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        'Check out this article! ' + urlHeader
      )}&url=${encodeURIComponent(`${shareUrl}`)}`,
      icon: IoLogoTwitter,
    },
    {
      name: 'Share on LinkedIn',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        `${shareUrl}`
      )}&title=${encodeURIComponent(
        'Check out this article!'
      )}&summary=${encodeURIComponent(urlHeader)}&source=${encodeURIComponent(
        'Check out this article!'
      )}`,
      icon: IoLogoLinkedin,
    },
  ]
  return (
    <Popover className={`relative ${className}`}>
      <Popover.Button className="rounded-3xl border-[1px] px-2 py-1 focus:border-transparent focus:ring-0 sm:border-0">
        <div className="flex space-x-1">
          <IoEllipsisHorizontal className="h-7 w-7" />
          <div className="block sm:hidden ">more</div>
        </div>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0 "
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-[250px] -translate-x-3/4 transform px-4 sm:-translate-x-1/2 sm:px-0 ">
          <div className="overflow-hidden rounded-lg border-0 border-transparent shadow-lg focus:border-transparent focus:ring-0">
            <div className="relative grid gap-4 bg-white p-7 lg:grid-cols-1">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="-m-3 flex items-center rounded-lg p-2 text-neutral-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-neutral-900 focus:outline-none"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                    <item.icon aria-hidden="true" className="h-7 w-7" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium ">{item.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default ShareButton

import React from 'react'
import { IoStar } from 'react-icons/io5'
import { PiGitFork } from 'react-icons/pi'

interface Props {
  className?: string
  repo: {
    name: string
    description: string
    html_url: string
    stargazers_count: number
    forks_count: number
    language: string
  }
}
const GitHub: React.FC<Props> = ({ className = '', repo }) => {
  const { name, description, forks_count, stargazers_count } = repo
  return (
    <div
      className={`relative flex items-center  rounded-lg border-[1px] p-2 text-neutral-900 hover:border-blue-400 hover:text-blue-700 dark:text-neutral-100 ${className}`}
    >
      <div>
        <h2
          className="relative line-clamp-1 max-w-[30ch] text-lg font-semibold"
          title={name}
        >
          {name}
        </h2>
        <div className="hidden sm:mt-2 sm:block">
          <div className="pb-1 text-base text-neutral-500 dark:text-neutral-400 md:text-sm">
            <span className="line-clamp-1 text-neutral-900 dark:text-neutral-100">
              {description || <div className="text-white">NA</div>}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute right-2 hidden space-x-2 bg-white sm:flex">
        <div className="flex h-full flex-col items-center justify-center rounded-lg border-[1px] px-5 py-2 shadow-md">
          <PiGitFork className="h-5 w-5 fill-black" />
          <span className="text-sm text-neutral-400">{forks_count}</span>
        </div>
        <div className="flex h-full flex-col items-center justify-center rounded-lg border-[1px] px-5 py-2 shadow-md">
          <IoStar className="h-5 w-5 fill-yellow-400" />
          <span className="text-sm text-neutral-400">{stargazers_count}</span>
        </div>
      </div>
    </div>
  )
}

export default GitHub

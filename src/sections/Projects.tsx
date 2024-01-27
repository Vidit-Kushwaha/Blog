import GitHubCard from '@/components/GitHub'
import TwitterCard from '@/components/TwitterCard'
import React from 'react'

const Projects = () => {
  return (
    <section className="flex flex-col gap-6 overflow-x-hidden md:flex-row">
      <div className="relative mt-12 w-full flex-shrink-0 space-y-8 rounded-xl bg-white p-2 shadow-lg sm:mt-0 md:w-3/5 md:space-y-2 xl:w-2/3">
        <div className="overflow-y-auto px-2  md:space-y-2">
          <GitHubCard />
        </div>
      </div>
      <div className="my-auto flex-grow">
        <div className="relative mb-5 block flex-shrink-0 overflow-hidden rounded-xl shadow-lg sm:mb-0">
          <TwitterCard />
        </div>
      </div>
    </section>
  )
}

export default Projects

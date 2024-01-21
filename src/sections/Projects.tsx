import GitHubCard from '@/components/GitHubCard'
import TwitterCard from '@/components/TwitterCard'
import React from 'react'
import { IoLogoTwitter, IoStarOutline } from 'react-icons/io5'

const Projects = () => {
  return (
    <section className="body-font relative text-gray-600">
      <div className="container mx-auto flex flex-wrap px-5 py-24 md:flex-nowrap">
        {/* <!-- First div with 2/3 width --> */}
        <div className="relative  flex w-2/3 items-end justify-start overflow-hidden rounded-lg bg-white p-10 sm:mr-10">
          GitHubCard
        </div>

        {/* <!-- Second div with 1/3 width --> */}
        <div className="mt-8 flex  w-1/3 flex-col bg-white md:ml-auto md:mt-0 md:py-8">
          TwitterCard
        </div>
      </div>
    </section>
  )
}

export default Projects

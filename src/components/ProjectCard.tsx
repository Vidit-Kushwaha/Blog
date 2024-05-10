'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  iconSrc: string
  description?: string
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  iconSrc,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(!isOpen)
  return (
    <button
      className="relative flex flex-col justify-center overflow-hidden rounded border border-black text-left md:flex-[1_1_77px] md:flex-row md:items-center "
      onClick={handleClick}
    >
      <div
        className={`t-18 w-full border-b px-4 py-6 transition-opacity duration-100 md:w-[unset] md:border-b-0 md:px-0 md:py-0 md:pb-0 ${
          isOpen && description ? 'md:rotate-0 md:opacity-0' : ''
        }`}
      >
        <span
          className={`block duration-200 md:-rotate-90 md:opacity-100 ${
            isOpen ? '' : 'translateX(-20px) transform'
          }`}
        >
          {title}
        </span>
      </div>
      {isOpen && (
        <div className="inset-0 flex w-full flex-col justify-between gap-5 duration-1000 md:absolute md:flex-row">
          {description && (
            <div className="mt-8 flex flex-col justify-between gap-y-8 pb-5 md:pb-10">
              <div className="ml-4 max-w-[369px] lg:ml-[36px]">
                <h3 className="t-26">{title}</h3>
                <div className="mt-4">{description}</div>
              </div>
              <div className="ml-4 max-w-[369px] lg:ml-[36px]">
                <Link
                  href={iconSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black hover:underline hover:underline-offset-2 hover:transition-opacity"
                >
                  <FaGithub />
                  <span>View on GitHub</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </button>
  )
}

export default ProjectCard

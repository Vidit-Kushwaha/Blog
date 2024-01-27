import React from 'react'
import GitHub from './GitHubCard'
import Link from 'next/link'
import { GitHubType } from '@/types/GitHubTypes'

async function getData() {
  return await fetch(`https://api.github.com/users/Vidit-Kushwaha/repos`, {
    next: {
      revalidate: 24 * 60 * 60,
    },
  }).then((res) => res.json())
}

const GitHubCard = async () => {
  const data = await getData()

  return (
    <div className="font-nunito-sans relative w-full overflow-hidden bg-white p-4 text-left text-slate-500 sm:h-[33rem]">
      <div className="font-montserrat text-darkgray items-center font-extrabold uppercase text-neutral-500">
        Projects Spotlight
      </div>
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full flex-col space-y-3 ">
          {data &&
            data.length > 0 &&
            data
              ?.filter((item: any) => !item.fork)
              .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
              .slice(0, 5)
              .map((item: GitHubType, index: number) => {
                return (
                  <Link key={index} href={item.html_url}>
                    <GitHub repo={item} />
                  </Link>
                )
              })}
        </div>
      </div>
    </div>
  )
}

export default GitHubCard

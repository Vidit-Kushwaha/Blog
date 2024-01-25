'use client'

import React, { useEffect } from 'react'
import GitHub from './GitHub'

interface GitHub {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
  fork: boolean
}
const GitHubCard = () => {
  const [data, setData] = React.useState<{
    loading: boolean
    error: Error | ''
    data: null | [GitHub]
  }>({
    loading: false,
    error: '',
    data: null,
  })

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://api.github.com/users/Vidit-Kushwaha/repos`
      )
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }

      const data = await res.json()
      data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      setData({ loading: false, error: '', data })
    }
    getData()
  }, [])

  return (
    <div className="font-nunito-sans relative w-full overflow-hidden bg-white p-4 text-left text-slate-500 sm:h-[33rem]">
      <div className="font-montserrat text-darkgray items-center font-extrabold uppercase text-neutral-500">
        Projects Spotlight
      </div>
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full flex-col space-y-3 ">
          {data.data &&
            data.data.length > 0 &&
            data.data
              ?.filter((item: any) => !item.fork)
              .slice(0, 5)
              .map((item, index) => <GitHub key={index} repo={item} />)}
        </div>
      </div>
    </div>
  )
}

export default GitHubCard

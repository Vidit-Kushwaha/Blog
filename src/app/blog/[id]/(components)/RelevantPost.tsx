import RelevantPostCard from '@/components/RelevantPostCard'
import { URL } from '@/config'
import React from 'react'

async function getData(search: string) {
  const res = await fetch(`${URL}/api/v1/post/featured/`, {
    method: 'POST',
    body: JSON.stringify({ search }),
    next: { revalidate: 30 },
  }).then((res) => res.json())

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

interface RelevantPostProps {
  parameters: string
  className?: string
}

const RelevantPost: React.FC<RelevantPostProps> = async ({
  className = 'border-t-[1px] border-neutral-200 dark:border-neutral-700',
  parameters,
}) => {
  const { data } = await getData(parameters)

  return (
    <div
      className={`${className} relative mt-16 bg-neutral-100 py-16 dark:bg-neutral-800 lg:mt-24 lg:py-28`}
    >
      <div className="container max-h-[340px]">
        <h2 className="text-3xl font-semibold">Related posts</h2>
        <div className="mt-10 grid h-full gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          <RelevantPostCard headline="djfjdkj" date="hello" id="1" href="/" />
          {/* {relevantArticle &&
              relevantArticle.map((post, i) => (
              ))} */}
          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default RelevantPost

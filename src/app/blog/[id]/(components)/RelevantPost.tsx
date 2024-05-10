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
  className = 'border-y-[1px] border-neutral-200',
  parameters,
}) => {
  // const { data } = await getData(parameters)

  return (
    <div className={`${className} relative mt-16 py-16 lg:mt-24`}>
      <div className="container">
        <h2 className="text-lg font-semibold">Related Posts</h2>
        <div className="mt-5 grid h-full gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {/* {[1, 2, 3, 4, 5].slice(0, 3).map((item, index) => (
            <ArticleCard key={index} {...tempFeature} />
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default RelevantPost

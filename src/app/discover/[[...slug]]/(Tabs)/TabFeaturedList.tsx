import Card from '@/components/cards/Card'
import { URL } from '@/config'
import { Post } from '@/types/postType'
import React from 'react'

async function getData() {
  return await fetch(`${URL}/api/v1/post?n=12`, {
    next: {
      revalidate: 3600,
    },
  }).then((res) => res.json())
}

const FeaturedList = async () => {
  const { data } = await getData()

  return (
    <section>
      <div className="my-20 text-center text-3xl font-semibold md:text-6xl">
        Latest Articles
      </div>
      <div className="mb-6 flex items-center justify-between">
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {data &&
            data.map((item: Post, index: number) => (
              <Card key={index} {...item} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedList

import { Post } from '@/types/postType'
import React, { FC } from 'react'
import Link from 'next/link'
import { IoChevronForward } from 'react-icons/io5'
import Card from './Card'
import { URL } from '@/config'

interface FeatureArticleProps {
  title: string
  noOfCard: number
  expand?: string
  ApiEndpoint: string
}

const getData = async (endpoint: string) => {
  const res = await fetch(`${`${URL}/api/v1`}${endpoint}`, {
    cache: 'no-cache',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const ArticleSection: FC<FeatureArticleProps> = async ({
  title,
  noOfCard,
  expand,
  ApiEndpoint,
}) => {
  const { data } = await getData(ApiEndpoint)

  !data && <></>

  return (
    <section>
      <div className="mb-16 flex items-center justify-between">
        <h2 className="text-3xl font-semibold md:text-5xl">{title}</h2>
        {expand && (
          <nav className="flex items-center">
            <Link
              className="overflow-hidden text-ellipsis !text-gray-800"
              rel="noopener noreferrer"
              href={`/discover/${expand}`}
            >
              View All
            </Link>
            <IoChevronForward />
          </nav>
        )}
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {data &&
          data
            .slice(0, noOfCard)
            .map((item: Post, index: number) => <Card key={index} {...item} />)}
      </div>
    </section>
  )
}

export default ArticleSection

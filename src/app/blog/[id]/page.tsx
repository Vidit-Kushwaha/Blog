import React from 'react'
import Header from './Header'
import ArticleBody from './ArticleBody'
import Tag from './Tag'
import { env } from 'process'

async function getData(id: string) {
  const res = await fetch(`${env.URL}/api/v1/post/${id}`, {
    next: { revalidate: 3600 },
    // cache: 'no-cache',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const { data } = await getData(id)
  return (
    <div className="container w-full max-w-screen-md space-y-5 pt-8 lg:pt-16  mt-24">
      <Header
        badge={{ name: data.genre, color: 'blue', href: `/blog/${data.id}` }}
        {...data}
      />
      <ArticleBody
        articleBody={data.articleBody}
        className="container text-neutral-600 "
      />
      <Tag keywords={data.keywords} />
      {/* <RelevantPost parameters={data.keywords.join('')} /> */}
    </div>
  )
}

export default page

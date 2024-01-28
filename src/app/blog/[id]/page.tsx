import React from 'react'
import Header from './(components)/Header'
import ArticleBody from './(components)/ArticleBody'
import Tag from './(components)/Tag'
import { Metadata, ResolvingMetadata } from 'next'
import { URL } from '@/config'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getData(id: string) {
  const res = await fetch(`${URL}/api/v1/post/${id}`, {
    cache: 'no-cache',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const page: React.FC<Props> = async ({ params: { id } }) => {
  const { data } = await getData(id)
  return (
    <div className="container mt-24 w-full max-w-screen-md space-y-5 pt-8 lg:pt-16">
      <Header
        badge={{ name: data.genre, color: 'blue', href: `/blog/${data.id}` }}
        {...data}
      />
      <ArticleBody articleBody={data.articleBody} className="container" />
      <Tag keywords={data.keywords} />
    </div>
  )
}

export default page

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id

  const product = await fetch(`${URL}/api/v1/post/${id}`).then((res) =>
    res.json()
  )

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${product.data.headline} | Blog`,
    keywords: product.data.keywords,
    creator: product.data.author,
    description: product.data.description,
    publisher: product.data.author,
    openGraph: {
      type: 'article',
      title: product.data.headline,
      description: product.data.description,
      url: `${URL}/blog/${product.data._id}`,
      images: [
        product.data.featureThumbnail,
        product.data.thumbnail,
        ...previousImages,
      ],
      siteName: 'Blog',
    },
  }
}

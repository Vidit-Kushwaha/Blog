import React from 'react'
import Header from './(components)/Header'
import ArticleBody from './(components)/ArticleBody'
import { Metadata, ResolvingMetadata } from 'next'
import { URL } from '@/config'
import FeedBack from './(components)/FeedBack'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getData(id: string) {
  const res = await fetch(`${URL}/api/v1/post/${id}`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const page: React.FC<Props> = async ({ params: { id } }) => {
  const { data } = await getData(id)
  return (
    <>
      <div className="container w-full max-w-screen-md space-y-8">
        <Header
          badge={{ name: data.genre, color: 'blue', href: `/blog/${id}` }}
          {...data}
        />
        <ArticleBody {...data} />
        <hr className="mb-10 mt-20 border-black" />
        <FeedBack id={id} />
      </div>
    </>
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

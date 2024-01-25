import Image from 'next/image'
import React from 'react'
import ArticleSmall from './ArticleSmall'

const post = [
  {
    index: 1,
    _id: '9e3e3994-a3ed-47ca-a014-d4483884cfe2',
    featureThumbnail:
      'https://images.unsplash.com/photo-1597551681492-10c86e481548?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    headline:
      'Lenovo’s smarter devices stoke professional passions fsddfsdfsfsdfsdfsdf',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    createdAt: new Date('2021-03-01T00:00:00.000Z').toISOString(),
    href: '/blog/single',
    readingTime: 2,
    genre: 'standard',
  },
  {
    index: 1,
    id: '9e3e3994-a3ed-47ca-a014-d4483884cfe2',
    featureThumbnail:
      'https://images.unsplash.com/photo-1597551681492-10c86e481548?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    headline: 'Lenovo’s smarter devices stoke professional passions ',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    createdAt: new Date('2021-03-01T00:00:00.000Z').toISOString(),
    href: '/blog/single',
    readingTime: 2,
    genre: 'standard',
  },
]

const src =
  'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const FearturedArticleCard = () => {
  return (
    <>
      <main className=" mt-12 flex flex-col md:flex-row">
        <div className="my-auto block flex-grow">
          <div className="relative mb-5 block flex-shrink-0 overflow-hidden rounded-xl shadow-lg sm:mb-0">
            <div className="absolute z-10 h-full w-full text-neutral-300 [background:linear-gradient(0deg,_rgba(39,_51,_57,_0.8),_rgba(39,_51,_57,_0))]">
              <div className="grid h-full w-full grid-cols-1 content-end   space-y-2 p-5">
                <span className="text-2xl font-semibold text-neutral-100">
                  Featured Article
                </span>
                <span className="w-full text-neutral-300">
                  Indulge in the hottest events happening around the globe and
                  mellow out.
                </span>
              </div>
            </div>
            <div className="aspect-h-1 aspect-w-1 block h-0 w-full">
              <Image
                fill
                objectFit="cover"
                alt="Featured article image"
                src={src}
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-12 w-full flex-shrink-0 space-y-8 rounded-xl bg-white p-2 shadow-lg sm:mt-0 md:ml-5 md:w-3/5 md:space-y-2 xl:w-2/3">
          <span className="p-2 text-xl  font-semibold text-neutral-500">
            Latest Articles
          </span>
          <div className="space-y-2 overflow-y-auto px-2">
            {post.slice(0, 2).map((posts, index) => (
              <div key={index} className="flex">
                <div className="font-nunito-sans mx-auto block w-full truncate border-none bg-transparent p-0 font-normal text-gray-400">
                  <ArticleSmall post={posts} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default FearturedArticleCard

'use client'

import { URL } from '@/config'
import Image from 'next/image'
import React, { useState } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter'
import { useRouter } from 'next/navigation'

interface Props {
  Post: {
    headline: string
    description: string
    author: string
    uid: string
    genre?: string
    keywords?: string[]
    articleBody: string
    sponsor?: string
    thumbnail?: string
    featureThumbnail?: string
  }
  id?: string
}

const Editor: React.FC<Props> = ({ id, Post }) => {
  const [postData, setPostData] = useState(Post)
  const router = useRouter()

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const method = id ? 'PUT' : 'POST'
    const url = `/api/v1/post${id ? `/${id}` : ''}`
    try {
      const response = {
        ...postData,
        slug: slugify(postData.headline),
      }
      const res = await fetch(url, {
        method,
        body: JSON.stringify(response),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`)
      }
      const data = await res.json()
      if (method === 'POST') {
        router.push(`/editor/${data.data._id}`)
      } else {
        setPostData(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6">
        <div className="w-full rounded-lg bg-white shadow sm:max-w-screen-md md:mt-0 xl:p-0">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              {/* title */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="title" className="text-xl font-semibold">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="focus:ring-primary-600 rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Enter title here"
                  value={postData?.headline}
                  onChange={(e) =>
                    setPostData({ ...postData, headline: e.target.value })
                  }
                />
              </div>
              {/* description */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="description" className="text-xl font-semibold">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="focus:ring-primary-600 row-auto rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2"
                  rows={5}
                  placeholder="Enter description here"
                  value={postData?.description}
                  onChange={(e) =>
                    setPostData({ ...postData, description: e.target.value })
                  }
                />
              </div>
              {/* author  */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="content" className="text-xl font-semibold">
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  className="focus:ring-primary-600 rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Enter author here"
                  value={postData?.author}
                  onChange={(e) =>
                    setPostData({ ...postData, author: e.target.value })
                  }
                />
              </div>
              {/* genre  */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="content" className="text-xl font-semibold">
                  Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  id="genre"
                  className="focus:ring-primary-600 rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Enter genre here"
                  value={postData?.genre}
                  onChange={(e) =>
                    setPostData({ ...postData, genre: e.target.value })
                  }
                />
              </div>
              {/* Tags  */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="content" className="text-xl font-semibold">
                  Tags
                </label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  className="focus:ring-primary-600 rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Enter tags here"
                  value={postData?.keywords}
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      keywords: e.target.value.toLowerCase().split(','),
                    })
                  }
                />
              </div>
              {/* ArticleBody  */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="content" className="text-xl font-semibold">
                  Content
                </label>
                <textarea
                  name="content"
                  id="content"
                  className="focus:ring-primary-600 rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Enter content here"
                  value={postData?.articleBody}
                  onChange={(e) => {
                    setPostData({
                      ...postData,
                      articleBody: e.target.value,
                    })
                  }}
                  rows={20}
                />
                <Markdown
                  components={{
                    code(props) {
                      const { children, className, node, ...rest } = props
                      const match = /language-(\w+)/.exec(className || '')
                      return match ? (
                        <SyntaxHighlighter
                          PreTag="div"
                          language={match[1] as unknown as string}
                          {...(rest as unknown as SyntaxHighlighterProps[])}
                          // style={dark}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code {...rest} className={className}>
                          {children}
                        </code>
                      )
                    },
                  }}
                  rehypePlugins={[rehypeRaw, remarkGfm]}
                >
                  {postData?.articleBody}
                </Markdown>
              </div>
              {/* featureThumbnail  */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="content" className="text-xl font-semibold">
                  Feature Thumbnail
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  className="focus:ring-primary-600 rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Enter image url here"
                  value={postData?.featureThumbnail}
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      featureThumbnail: e.target.value,
                    })
                  }
                />
                {postData?.featureThumbnail && (
                  <div className="max-w-36 aspect-h-1 aspect-w-1 block h-0">
                    <Image
                      fill
                      className=""
                      src={postData?.featureThumbnail}
                      alt=""
                      sizes="(max-width: 768px) 50vw, 300px"
                    />
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Editor

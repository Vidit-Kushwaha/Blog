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
    uid?: string
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const method = id ? 'PUT' : 'POST'
    const url = `${URL}/api/v1/post${id ? `/${id}` : ''}`
    try {
      const res = await fetch(url, {
        method,
        body: JSON.stringify(postData),
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-8">
          {/* title */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="title" className="text-xl font-semibold">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="focus:ring-primary-600 rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2 dark:border-neutral-700"
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
              className="focus:ring-primary-600 row-auto rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2 dark:border-neutral-700"
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
              className="focus:ring-primary-600 rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2 dark:border-neutral-700"
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
              className="focus:ring-primary-600 rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2 dark:border-neutral-700"
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
              className="focus:ring-primary-600 rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2 dark:border-neutral-700"
              placeholder="Enter tags here"
              value={postData?.keywords}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  keywords: e.target.value.split(','),
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
              className="focus:ring-primary-600 rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2 dark:border-neutral-700"
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
              className="focus:ring-primary-600 rounded-md border border-neutral-200 p-3 focus:border-transparent focus:outline-none focus:ring-2 dark:border-neutral-700"
              placeholder="Enter image url here"
              value={postData?.featureThumbnail}
              onChange={(e) =>
                setPostData({ ...postData, featureThumbnail: e.target.value })
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
            className="bg-primary-600 border-primary-600 hover:text-primary-600 rounded-md border-[1px] px-6 py-3 text-neutral-700 transition duration-300 ease-in-out hover:bg-transparent"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Editor

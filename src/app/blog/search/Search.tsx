'use client'
import Article from '@/components/cards/Article'
import { URL as urlString } from '@/config'
import React, { FC, useEffect, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'

interface Post {
  headline: string
  featureThumbnail: string
  description?: string | undefined
  _id: string
  href: string
}

const getData = async (query: string) => {
  try {
    const res = await fetch(`${urlString}/api/v1/search`, {
      method: 'POST',
      body: JSON.stringify({ query }),
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()
    return data
  } catch (error: any) {
    throw new Error('Fail to fetch')
  }
}

interface SearchProps {
  searchParams: { [key: string]: string | string[] | undefined }
}
const Search: FC<SearchProps> = ({ searchParams }) => {
  const [searchQuery, setSearchQuery] = useState<string | undefined>(
    searchParams.q as string | undefined
  )
  const [searchState, setSearchState] = useState<{
    loading: boolean
    error: Error | ''
    post: null | [{ item: Post }]
  }>({ loading: false, error: '', post: null })

  useEffect(() => {
    ;(async () => {
      if (searchQuery) {
        const { data } = await getData(searchQuery)
        setSearchState({ loading: false, error: '', post: data })
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const url = new URL(window.location.href)
    url.searchParams.set('q', searchQuery ? searchQuery : '')
    window.history.pushState({}, '', url.toString())

    if (searchQuery) {
      const { data } = await getData(searchQuery)
      setSearchState({ loading: false, error: '', post: data })
    }
  }

  return (
    <>
      <form
        className="flex w-full rounded border-[1px] border-black px-3 py-4"
        data-testid="search-box-form"
        role="search"
        action="/blog/search"
        onSubmit={onSubmit}
      >
        <IoIosSearch className="h-8 w-8 fill-gray-500" />
        <div className="ml-2 flex w-full flex-col">
          <input
            className="w-full text-ellipsis border-none bg-transparent text-xl text-black decoration-transparent focus:border-transparent focus:outline-none focus:ring-0"
            name="q"
            type="search"
            placeholder="Search..."
            autoComplete="off"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="mt-4">
        {searchState.post && searchState.post.length > 0 ? (
          searchState.post.map((item, index) => (
            <div key={index} className="my-2">
              <Article post={{ ...item.item }} />
            </div>
          ))
        ) : (
          <div className="mt-10 text-center text-base">No results found</div>
        )}
      </div>
    </>
  )
}

export default Search

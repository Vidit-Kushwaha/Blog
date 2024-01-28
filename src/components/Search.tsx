'use client'

import React, { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import Article from './Article'
import { Post } from '@/types/postType'
import { URL } from '@/config'
import Link from 'next/link'

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [showPopover, setShowPopover] = useState(false)
  const [search, setSearch] = useState('')
  const [searchState, setSearchState] = useState<{
    loading: boolean
    error: Error | ''
    post: null | [{ item: Post }]
  }>({ loading: false, error: '', post: null })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let delayDebounceFn: NodeJS.Timeout

    async function getData(query: string) {
      try {
        const res = await fetch(`${URL}/api/v1/search`, {
          method: 'POST',
          body: JSON.stringify({ query }),
        })

        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }

        const data = await res.json()
        setSearchState({ loading: false, error: '', post: data.data })
      } catch (error: any) {
        setSearchState({
          loading: false,
          error: new Error('Fail to fetch'),
          post: null,
        })
      }
    }

    delayDebounceFn = setTimeout(() => {
      if (search.length > 3) {
        setSearchState({ loading: true, error: '', post: null })
        getData(search)
      }
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [search])

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowPopover(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className="relative mt-24 w-full" ref={ref}>
      {/* search */}
      <div className="relative mx-auto flex w-full items-center rounded-xl border bg-white p-4 shadow-md">
        <div className="flex w-full flex-row items-center justify-stretch gap-[1rem] self-stretch">
          <div className="h-12 w-full rounded-lg border-[1px] border-solid border-gray-100 bg-gray-100">
            <div className="flex p-3">
              <IoIosSearch className="mx-2 h-6 w-6 fill-gray-500" />
              <input
                placeholder="Type to begin search blogs and books"
                className="font-nunito-sans block w-full max-w-[58.44rem] truncate border-none bg-transparent p-0 font-normal text-gray-400 placeholder-gray-400 focus:placeholder-neutral-400 focus:outline-none focus:ring-0 dark:placeholder-neutral-200 xl:text-base"
                onFocus={() => setShowPopover(true)}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="relative mx-auto box-border hidden h-12 flex-row items-center justify-start gap-[0.25rem] rounded-lg text-left text-[1.25rem] font-medium md:flex">
            <div className="box-border flex h-12 min-w-[3rem] flex-row items-center justify-center rounded-lg border-[1px] border-solid border-gray-300 bg-gray-200 px-2 py-[.75rem] ">
              <div className="relative inline-block max-h-[1.81rem] capitalize leading-[1.25rem] ">
                Ctrl
              </div>
            </div>
            <div className="font-space-mono flex flex-col items-start justify-start">
              <div className="relative leading-[1.75rem]">+</div>
            </div>
            <div className="box-border flex h-12 min-w-[3rem] flex-row items-center justify-center rounded-lg border-[1px] border-solid border-gray-300 bg-gray-200 px-2 py-[.50rem]">
              <div className="relative inline-block max-h-[1rem] capitalize leading-[1.25rem]">
                k
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* popover  */}
      {showPopover && (
        <div className="absolute left-0 top-full z-40 mt-3 max-h-96 w-full min-w-[250px] overflow-y-auto rounded-xl bg-white py-3 shadow-xl dark:bg-neutral-800 sm:min-w-[400px] sm:py-5">
          <div className="flex px-3 py-2">
            <div className="font-nunito-sans block w-full max-w-[58.44rem] truncate border-none bg-transparent p-0 font-normal text-gray-400">
              {searchState.loading && 'Loading'}
              {searchState.error && 'Error'}
              {searchState.post
                ? searchState.post.length > 0
                  ? searchState.post.map((item, index) => (
                      <div key={index} className="flex px-3 py-2">
                        <Link
                          href={`/blog/${item.item._id}`}
                          className="block w-full max-w-[58.44rem] truncate bg-white p-0 font-normal text-gray-400 "
                        >
                          <Article post={item.item} />
                        </Link>
                      </div>
                    ))
                  : 'No results found'
                : !searchState.loading && (
                    <div className="flex space-x-2">
                      <IoIosSearch className="mx-2 h-6 w-6 fill-gray-500" />
                      Start typing ....
                    </div>
                  )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search

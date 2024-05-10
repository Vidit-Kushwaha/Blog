'use client'
import { useSearchParams } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'

const SearchSmall = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('q')

  const [searchQuery, setSearchQuery] = useState<string | null>(search)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleIconFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <>
      <div
        className="border-b-[1px] border-black py-2"
        onClick={handleIconFocus}
      >
        <form
          className="flex cursor-text touch-manipulation overflow-hidden"
          data-testid="search-box-form"
          role="search"
          action="/blog/search"
        >
          <div className="flex flex-grow flex-row-reverse items-center overflow-hidden">
            <div className="mx-2 flex" data-testid="search-icon">
              <IoIosSearch className="h-6 w-6 fill-gray-500" />
            </div>
            <div className="flex items-center">
              <div
                className="flex w-full flex-col items-start justify-start overflow-hidden"
                data-testid="search-box-input"
              >
                <input
                  ref={inputRef}
                  name="q"
                  className="w-full text-ellipsis border-none bg-transparent text-black decoration-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  type="search"
                  placeholder="Search..."
                  aria-required="false"
                  maxLength={100}
                  autoComplete="off"
                  aria-label="Search..."
                  value={searchQuery ?? ''}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchSmall

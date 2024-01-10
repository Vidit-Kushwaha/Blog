import React from 'react'
import { IoIosSearch } from 'react-icons/io'

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <div className="relative mx-auto flex w-3/4 items-center rounded-2xl border bg-white p-2 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.08)] ">
      <div className="flex w-full flex-row items-center justify-stretch gap-[1rem] self-stretch">
        <div className="h-10 w-full rounded-lg border-[1px] border-solid border-gray-100 bg-gray-100">
          <div className="flex px-3 py-2">
            <IoIosSearch className="mx-2 h-6 w-6 fill-gray-500" />
            <input
              placeholder="Type to begin search blogs and books"
              className="font-nunito-sans block w-full max-w-[58.44rem] truncate border-none bg-transparent p-0 font-normal text-gray-400 placeholder-gray-400 focus:placeholder-neutral-400 focus:outline-none focus:ring-0 dark:placeholder-neutral-200 xl:text-base"
            />
          </div>
        </div>
        <div className="relative mx-auto box-border hidden h-10 flex-row items-center justify-start gap-[0.25rem] rounded-lg text-left text-[1.25rem] font-medium md:flex">
          <div className="box-border flex h-10 min-w-[3rem] flex-row items-center justify-center rounded-lg border-[1px] border-solid border-gray-300 bg-gray-200 px-2 py-[.75rem] ">
            <div className="relative inline-block max-h-[1.81rem] capitalize leading-[1.25rem] ">
              Ctrl
            </div>
          </div>
          <div className="font-space-mono flex flex-col items-start justify-start">
            <div className="relative leading-[1.75rem]">+</div>
          </div>
          <div className="box-border flex h-10 min-w-[3rem] flex-row items-center justify-center rounded-lg border-[1px] border-solid border-gray-300 bg-gray-200 px-2 py-[.50rem]">
            <div className="relative inline-block max-h-[1rem] capitalize leading-[1.25rem]">
              k
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search

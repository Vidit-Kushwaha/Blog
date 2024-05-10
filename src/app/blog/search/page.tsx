import React from 'react'
import Search from './Search'

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  return (
    <main
      className="mx-auto mt-8 max-w-screen-lg lg:px-0"
      data-test="Search results"
    >
      <div className="mb-10 text-center text-3xl font-bold">Search results</div>
      <Search searchParams={searchParams} />
    </main>
  )
}

export default page

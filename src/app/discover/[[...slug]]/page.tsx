import React, { useState } from 'react'
import Tab from './(Tabs)/Tab'

const page = ({
  params,
  searchParams,
}: {
  params: { slug: string[] | undefined }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  return (
    <div>
      <Tab activeTab={params.slug ? params.slug[0] : ''} />
    </div>
  )
}

export default page

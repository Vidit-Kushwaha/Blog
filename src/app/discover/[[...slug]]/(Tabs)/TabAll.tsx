import React from 'react'
import ArticleSection from '@/components/cards/ArticleSection'
import Hero from '../../Component/Hero'

const All = async () => {
  return (
    <>
      <Hero />
      <hr className="mb-10 mt-20 border-black" />
      <ArticleSection
        title="Top Articles"
        noOfCard={6}
        ApiEndpoint="/post/like"
      />
      <hr className="mb-10 mt-20 border-black" />
      <ArticleSection
        title="Latest Article"
        noOfCard={6}
        ApiEndpoint="/post"
        expand="latest"
      />
    </>
  )
}

export default All

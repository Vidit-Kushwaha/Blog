import FearturedArticleCard from '@/components/FearturedArticleCard'
import Search from '@/components/Search'
import React from 'react'

const LatestArticleSection = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <Search />
      </div>
        <FearturedArticleCard />
    </div>
  )
}

export default LatestArticleSection

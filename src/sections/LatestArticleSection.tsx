import FearturedArticleCard from '@/components/FearturedArticleCard'
import Search from '@/components/Search'
import React from 'react'

const LatestArticleSection = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center px-2 py-4">
        <Search />
      </div>

      <div>
        <div className="flex w-2/5 justify-center">
          <FearturedArticleCard />
        </div>
      </div>
    </div>
  )
}

export default LatestArticleSection

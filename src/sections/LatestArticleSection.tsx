import FearturedArticleCard from '@/components/FearturedArticleCard'
import Search from '@/components/Search'
import React from 'react'

const LatestArticleSection = () => {
  return (
    <div className="w-full">
      <div className="my-4 flex justify-center">
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

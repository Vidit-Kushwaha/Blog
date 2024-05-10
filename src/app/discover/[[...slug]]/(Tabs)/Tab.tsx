import React, { FC } from 'react'
import All from './TabAll'
import FeaturedList from './TabFeaturedList'

interface Props {
  activeTab: string
}

const Tab: FC<Props> = ({ activeTab }) => {
  const renderSection = () => {
    switch (activeTab) {
      case 'latest':
        return <FeaturedList />

      default:
        return <All />
    }
  }

  return <div>{renderSection()}</div>
}

export default Tab

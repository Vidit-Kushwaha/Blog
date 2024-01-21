import React from 'react'

import Badge from '@/components/Badge'

interface TagProps {
  keywords: string[]
}

const Tag: React.FC<TagProps> = ({ keywords }) => {
  return (
    <div className={`pt-10 px-5 space-y-2 `}>
      {keywords.map((item: string, index: number) => (
        <Badge
          key={index}
          name={item}
          color="gray"
          className="px-3 py-1 text-sm font-normal mr-1 truncate overflow-hidden whitespace-nowrap overflow-ellipsis"
        />
      ))}
    </div>
  )
}

export default Tag

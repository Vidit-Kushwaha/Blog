import React from 'react'

import Badge from '@/components/Badge'

interface TagProps {
  keywords: string[]
}

const Tag: React.FC<TagProps> = ({ keywords }) => {
  return (
    <div className={`space-y-2 px-5 pt-10 `}>
      {keywords.map((item: string, index: number) => (
        <Badge
          key={index}
          name={item}
          color="gray"
          className="mr-1 overflow-hidden truncate overflow-ellipsis whitespace-nowrap px-3 py-1 text-sm font-normal"
        />
      ))}
    </div>
  )
}

export default Tag

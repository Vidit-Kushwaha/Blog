import React from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface ArticleBodyProps {
  className?: string
  articleBody: string
}

const ArticleBody: React.FC<ArticleBodyProps> = ({
  className,
  articleBody,
}) => {
  return (
    <div className={className}>
      <Markdown rehypePlugins={[rehypeRaw]}>{articleBody}</Markdown>
    </div>
  )
}

export default ArticleBody

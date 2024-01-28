import React from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter'

interface ArticleBodyProps {
  className?: string
  articleBody: string
}

const ArticleBody: React.FC<ArticleBodyProps> = ({
  className,
  articleBody,
}) => {
  return (
    <div className={`font-regular leading-relaxed ${className}`}>
      <Markdown
        components={{
          code(props) {
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                language={match[1] as unknown as string}
                {...(rest as unknown as SyntaxHighlighterProps[])}
                // style={dark}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
        }}
        rehypePlugins={[rehypeRaw, remarkGfm]}
      >
        {articleBody}
      </Markdown>
    </div>
  )
}

export default ArticleBody

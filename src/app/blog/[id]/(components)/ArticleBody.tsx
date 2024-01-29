import React from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter'
import Image from 'next/image'

interface ArticleBodyProps {
  className?: string
  articleBody: string
  featureThumbnail: string
}

const ArticleBody: React.FC<ArticleBodyProps> = ({
  className,
  articleBody,
  featureThumbnail,
}) => {
  return (
    <div className={`font-regular leading-relaxed ${className}`}>
      <div className="mb-10">
        <Image
          className="w-full rounded-lg"
          width={600}
          height={300}
          src={featureThumbnail}
          alt="featureThumbnail"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
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

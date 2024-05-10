import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
  _id: string
  headline: string
  featureThumbnail: string
  author: string
  genre: string
}

const Card: FC<Props> = ({ _id, headline, featureThumbnail, genre }) => {
  const href = `/blog/${_id}`

  return (
    <div className="flex w-full overflow-hidden rounded !text-black !no-underline transition-colors lg:max-w-[454px]">
      <article className="flex w-full flex-col justify-between">
        <div>
          <Link href={href}>
            <Image
              src={featureThumbnail}
              alt={headline}
              className="mb-6 h-[340px] w-full rounded object-cover transition-opacity duration-200 hover:opacity-90"
              height={340}
              width={350}
            />
          </Link>

          <div>
            <Link
              className="text-md relative py-1 text-sm font-normal uppercase text-black hover:text-blue-400"
              href={href}
            >
              {genre}
            </Link>
            <Link
              className="line-clamp-2 py-2 text-lg font-semibold text-black underline-offset-2 hover:underline lg:text-xl"
              href={href}
            >
              {headline}
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Card

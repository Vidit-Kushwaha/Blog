export interface Post {
  _id: string
  headline: string
  description?: string
  author: string
  readingTime: number
  user: string
  uid: string
  genre: PostGenreType[]
  flags?: PostFlagType[]
  keywords?: string[]
  articleBody: string
  sponsor?: string
  likes: number
  views: number
  thumbnail?: string
  featureThumbnail: string
  createdAt: string
}

export type PostGenreType =
  | 'Book'
  | 'Podcast'
  | 'Article'
  | 'Video'
  | 'Course'
  | 'Event'
  | 'Product'
  | 'Service'
  | 'Job'
  | 'Other'

export type PostFlagType =
  | 'Featured'
  | 'Trending'
  | 'Latest'
  | 'Popular'
  | 'Recommended'

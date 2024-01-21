import { FeaturedSearchConfig } from '@/config/SearchConfig'
import connectDB from '@/libs/mongodb'
import Post from '@/models/Post'
import Fuse from 'fuse.js'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  await connectDB()

  const { search } = await req.json()

  const posts = await Post.aggregate([
    {
      $project: {
        headline: 1,
        featureThumbnail: 1,
        readTime: 1,
        createdAt: 1,
        keywords: 1,
        description: 1,
        genre: 1,
      },
    },
  ])


  const fuse = new Fuse(posts, FeaturedSearchConfig)
  const results = fuse.search(search)

  if (!posts)
    return NextResponse.json({
      success: false,
      message: NextResponse.error.name,
      data: {},
    })

  return NextResponse.json({
    success: true,
    message: '',
    data: results,
  })
}

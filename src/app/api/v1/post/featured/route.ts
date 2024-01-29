import connectDB from '@/libs/mongodb'
import Post from '@/models/Post'
import { NextResponse } from 'next/server'

export async function GET() {
  await connectDB()

  const posts = await Post.find({
    flag: 'Featured',
  })
    .select(
      'headline featureThumbnail readingTime createdAt keywords description genre flag'
    )
    .limit(5)
    .sort('-createdAt')

  if (!posts)
    return NextResponse.json({
      success: false,
      message: NextResponse.error.name,
      data: {},
    })

  return NextResponse.json({
    success: true,
    message: '',
    data: posts,
  })
}

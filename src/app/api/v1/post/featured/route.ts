import connectDB from '@/libs/mongodb'
import Post from '@/models/Post'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  await connectDB()

  const searchParams = req.nextUrl.searchParams

  const keywords = searchParams?.get('q')?.toLowerCase().split(',')

  console.log(keywords)

  const query = { keywords: { $in: keywords } }

  const posts = await Post.find(query).limit(6)

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

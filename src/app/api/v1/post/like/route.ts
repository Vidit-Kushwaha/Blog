import connectDB from '@/libs/mongodb'
import Post from '@/models/Post'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  await connectDB()

  const posts = await Post.find().sort({ likes: 1 }).limit(6)

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

import connectDB from '@/libs/mongodb'
import { NextRequest, NextResponse } from 'next/server'
import Post from '@/models/Post'
import { Post as PostType } from '@/types/postType'

export async function GET(req: NextRequest) {
  await connectDB()

  const posts: PostType = await Post.find()

  if (!posts)
    return NextResponse.json({
      success: false,
      message: 'Hello World',
      data: {},
    })

  return NextResponse.json({
    success: true,
    message: '',
    data: posts,
  })
}

export async function POST(req: Request) {
  await connectDB()

  const postBody = await req.json()

  const post = await Post.create(postBody)

  if (!post)
    return NextResponse.json({
      success: false,
      message: NextResponse.error.name,
      data: {},
    })

  return NextResponse.json({
    success: true,
    message: '',
    data: post,
  })
}

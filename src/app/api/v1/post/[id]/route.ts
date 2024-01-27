import { getSession } from '@/app/editor/(login)/action'
import connectDB from '@/libs/mongodb'
import Post from '@/models/Post'
import { Post as PostType } from '@/types/postType'
import { estimateReadingTime } from '@/utils/estimateReadingTime'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, context: any) {
  await connectDB()
  const { id } = context.params
  const post: PostType = await Post.findById(id)

  if (!post) {
    return NextResponse.json({
      success: false,
      message: 'Post not found!',
      data: {},
    })
  }

  return NextResponse.json({ success: true, message: 'success', data: post })
}

export async function PUT(req: Request, context: any) {
  await connectDB()

  const session = await getSession()

  if (!session.isLoggedIn) {
    return NextResponse.json({
      success: false,
      message: 'You are not authorized to access this route!',
      data: {},
    })
  }

  const { id } = context.params
  const updates = await req.json()

  const post = await Post.findByIdAndUpdate(
    id,
    { ...updates, readingTime: estimateReadingTime(updates.articleBody) },
    { new: true }
  )

  if (!post) {
    return NextResponse.json({
      success: false,
      message: 'Post not found!',
      data: {},
    })
  }

  return NextResponse.json({ success: true, message: '', data: post })
}

export async function DELETE(req: NextRequest, context: any) {
  const session = await getSession()

  if (!session.isLoggedIn) {
    return NextResponse.json({
      success: false,
      message: 'You are not authorized to access this route!',
      data: {},
    })
  }

  const { id } = context.params
  const post = await Post.findByIdAndDelete(id)

  if (!post) {
    return NextResponse.json({
      success: false,
      message: 'Post not found!',
      data: {},
    })
  }

  return NextResponse.json({ success: true, message: '', data: post })
}

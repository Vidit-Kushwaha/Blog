import connectDB from '@/libs/mongodb'
import Post from '@/models/Post'
import { Post as PostType } from '@/types/postType'
import { estimateReadingTime } from '@/utils/estimateReadingTime'
import { NextRequest, NextResponse } from 'next/server'
import ProtectedRoute from '@/libs/middleware/protectedRoute'

export async function GET(req: NextRequest, context: any) {
  await connectDB()
  const { id } = context.params

  const post: PostType = await Post.findById(id).populate('user', 'avatar')

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
  ProtectedRoute()

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
  await connectDB()
  ProtectedRoute()

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

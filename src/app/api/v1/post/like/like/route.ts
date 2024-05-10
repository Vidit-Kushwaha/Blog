import connectDB from '@/libs/mongodb'
import Post from '@/models/Post'
import { NextResponse } from 'next/server'

export async function PUT(req: Request, context: any) {
  await connectDB()

  const id = await req.json()

  const post = await Post.findByIdAndUpdate(
    id,
    { $inc: { likes: 1 } },
    { new: true }
  )

  if (!post) {
    return NextResponse.json({
      success: false,
      message: 'Post not found!',
      data: {},
    })
  }

  return NextResponse.json({ success: true, message: '' })
}

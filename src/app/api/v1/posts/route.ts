// pages/api/posts/index.js
import connectDB from '@/libs/mongodb'
import { NextRequest, NextResponse } from 'next/server'
import Post from '@/models/Post'

type Post = {
  title: String
  content: String
  createdAt: { type: Date; default: Date }
}


export async function GET(req: NextRequest) {
  await connectDB()

  const posts: Post = await Post.find()
  return NextResponse.json({ message: 'Hello World', data: { ...posts } })
}

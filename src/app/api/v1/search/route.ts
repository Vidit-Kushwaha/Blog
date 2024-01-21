import { SearchConfig } from '@/config/SearchConfig'
import connectDB from '@/libs/mongodb'
import Post from '@/models/Post'
import Fuse from 'fuse.js'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  await connectDB()

  const { query, page = 1 } = await req.json()

  const pageSize = 10
  const skip = (page - 1) * pageSize
  const posts = await Post.find({}).skip(skip).limit(pageSize).lean()

  const fuse = new Fuse(posts, SearchConfig)
  const results = fuse.search(query)

  const totalPosts = results.length
  const totalPages = Math.ceil(totalPosts / pageSize)

  return NextResponse.json({
    success: true,
    message: '',
    data: results,
    page,
    totalPages,
  })
}

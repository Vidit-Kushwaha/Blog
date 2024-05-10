import connectDB from '@/libs/mongodb'
import { NextRequest, NextResponse } from 'next/server'
import Post from '@/models/Post'
import { Post as PostType } from '@/types/postType'
import { estimateReadingTime } from '@/utils/estimateReadingTime'
import ProtectedRoute from '../../../../libs/middleware/protectedRoute'
import { getSession } from '@/app/editor/(login)/action'
import { sessionOptions } from '@/libs/auth/lib'
import { unsealData } from 'iron-session'

export async function GET(req: NextRequest) {
  await connectDB()

  const searchParams = req.nextUrl.searchParams

  const limit = parseInt(searchParams?.get('n')?.toLowerCase() || '6')

  console.log(limit)

  const posts: PostType[] = await Post.find()
    .limit(limit)
    .sort({ createdAt: -1 })

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

export async function POST(req: Request) {
  await connectDB()
  ProtectedRoute()

  const session = await getSession()
  const sessionData: { id: string } = await unsealData(
    session.token,
    sessionOptions
  )

  const postBody = await req.json()

  const post = await Post.create({
    ...postBody,
    readingTime: estimateReadingTime(postBody.articleBody),
    user: sessionData.id,
  })

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

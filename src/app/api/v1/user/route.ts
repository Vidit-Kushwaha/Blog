import connectDB from '@/libs/mongodb'
import User from '@/models/User'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  await connectDB()

  const body = await req.json()

  const salt = await bcrypt.genSalt(10)
  const encrypt = await bcrypt.hash(body.password, salt)

  const user = await User.create({
    ...body,
    password: encrypt,
  })

  if (!user)
    return NextResponse.json({
      success: false,
      message: NextResponse.error.name,
      data: {},
    })

  return NextResponse.json({
    success: true,
    message: '',
    data: user,
  })
}

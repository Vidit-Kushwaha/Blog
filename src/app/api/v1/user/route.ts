import { JWT_SECRET } from '@/config'
import connectDB from '@/libs/mongodb'
import User from '@/models/User'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

  const token = jwt.sign(user.id, JWT_SECRET)

  return NextResponse.json({
    success: true,
    message: '',
    data: user,
    token: token,
  })
}

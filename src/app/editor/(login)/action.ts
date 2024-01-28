'use server'

import { SessionData } from '@/libs/auth/lib'
import { defaultSession, sessionOptions, sleep } from '@/libs/auth/lib'
import { getIronSession, sealData } from 'iron-session'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import connectDB from '@/libs/mongodb'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

export async function getSession(shouldSleep = true) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn
    session.username = defaultSession.username
  }

  if (shouldSleep) {
    await sleep(250)
  }

  return session
}

export async function logout() {
  'use server'

  const session = await getSession(false)
  session.destroy()
  revalidatePath('/')
}

export async function login(formData: FormData) {
  'use server'

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    await connectDB()
    const user = await User.findOne({ email })
    const valid = await bcrypt.compare(password, user.password)

    if (!user || !valid) {
      return {
        success: false,
        message: 'Invalid email or password',
      }
    }

    const session = await getSession()

    const x = await sealData({ id: user._id }, sessionOptions)

    session.token = x
    session.username = user.name
    session.isLoggedIn = true

    await session.save()
    revalidatePath('/')

    return {
      success: true,
      message: 'Login successful',
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    }
  }
}

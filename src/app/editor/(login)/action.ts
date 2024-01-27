'use server'

import { SessionData } from '@/libs/auth/lib'
import { defaultSession, sessionOptions, sleep } from '@/libs/auth/lib'
import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import connectDB from '@/libs/mongodb'
import User from '@/models/User'
const bcrypt = require('bcryptjs')

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

  connectDB()
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const user = await User.findOne({ email })

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return {
      success: false,
      message: 'Invalid email or password',
    }
  }
  const session = await getSession()

  session.username = (formData.get('password') as string) ?? 'No username'
  session.isLoggedIn = true
  await session.save()
  revalidatePath('/')
}

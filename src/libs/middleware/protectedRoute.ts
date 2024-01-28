import { getSession } from '@/app/editor/(login)/action'
import { sessionOptions } from '@/libs/auth/lib'
import User from '@/models/User'
import { unsealData } from 'iron-session'
import { NextResponse } from 'next/server'

const ProtectedRoute = async () => {
  const session = await getSession()
  const sessionData: { id: string } = await unsealData(
    session.token,
    sessionOptions
  )
  const user = await User.findById(sessionData.id)

  if (!session.isLoggedIn || !user || !user.admin) {
    return NextResponse.json({
      success: false,
      message: 'You are not authorized to access this route!',
      data: {},
    })
  }
  return NextResponse.next()
}

export default ProtectedRoute

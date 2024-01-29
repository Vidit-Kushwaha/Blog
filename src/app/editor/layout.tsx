'use server'

import { getSession, login } from './(login)/action'
import { LoginForm } from './(login)/form'

const EditorLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    return <LoginForm />
  }
  return <div className="container max-w-screen-md">{children}</div>
}

export default EditorLayout

'use server'

import { getSession, login } from './(login)/action'
import { Input } from './(login)/input'

const EditorLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    return <LoginForm />
  }
  return (
    <div className="container mt-24 w-full max-w-screen-md space-y-5 pt-8  lg:pt-16">
      {children}
    </div>
  )
}

export default EditorLayout

function LoginForm() {
  return (
    <form
      action={login}
      className={
        'container mt-24 w-full max-w-screen-md space-y-5 pt-8  lg:pt-16'
      }
    >
      <label className="block text-lg">
        <span className={''}>Username</span>
        <Input />
      </label>
      <div>
        <button value="Login">Login</button>
      </div>
    </form>
  )
}

'use server'

import { getSession, login } from './(login)/action'
import { Input } from './(login)/input'

const EditorLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    return <LoginForm />
  }
  return (
    <div className="container max-w-screen-md">
      {children}
    </div>
  )
}

export default EditorLayout

function LoginForm() {
  return (
    <form
      action={login}
      className='container max-w-screen-md'
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

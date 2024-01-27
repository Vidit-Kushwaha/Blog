'use server'

import { Input } from './input'
import { getSession, login, logout } from './action'

export async function Form() {
  const session = await getSession()

  if (session.isLoggedIn) {
    return (
      <>
        <p className="text-lg">
          Logged in user: <strong>{session.username}</strong>
        </p>
        <form action={logout} className={''}>
          <div>
            <button value="Logout">Logout</button>
          </div>
        </form>
      </>
    )
  }

  return <LoginForm />
}

function LoginForm() {
  return (
    <form action={login} className={''}>
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

'use server'

import { Input } from './input'
import { getSession, login, logout } from './action'

export async function Form() {
  const session = await getSession()

  if (session.isLoggedIn) {
    return (
      <section>
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8">
          <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Sign Out{' '}
                <div className="text-md inline-flex font-semibold text-neutral-600">
                  ({session.username})
                </div>
              </h1>
              <form className="space-y-4 md:space-y-6" action={logout}>
                <button
                  value="Logout"
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return <LoginForm />
}

export async function LoginForm() {
  return (
    <section>
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action={login}>
              <Input />
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

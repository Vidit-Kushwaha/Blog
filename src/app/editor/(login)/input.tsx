'use client'

import { useFormStatus } from 'react-dom'

export function Input() {
  const { pending } = useFormStatus()

  return (
    <>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          disabled={pending}
          autoComplete="off"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
          placeholder="example@email.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          disabled={pending}
          autoComplete="off"
          placeholder="••••••••"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
          required
        />
      </div>
    </>
  )
}

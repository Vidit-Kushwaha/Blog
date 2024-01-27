// We're using a client component to show a loading state
'use client'

import { useFormStatus } from 'react-dom'

export function Input() {
  const { pending } = useFormStatus()

  return (
    <>
      <input
        type="email"
        disabled={pending}
        name="email"
        placeholder="Username"
        required
        autoComplete="off"
        data-1p-ignore
      />
      <input
        type="password"
        disabled={pending}
        name="password"
        placeholder="password"
        required
        autoComplete="off"
        data-1p-ignore
      />
    </>
  )
}

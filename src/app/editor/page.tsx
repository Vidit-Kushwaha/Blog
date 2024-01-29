import { Form } from './(login)/form'
import { Suspense } from 'react'

const page = () => {
  return (
    <main className="mt-24 space-y-5">
      <Suspense fallback={<p className="text-lg">Loading...</p>}>
        <Form />
      </Suspense>
    </main>
  )
}

export default page

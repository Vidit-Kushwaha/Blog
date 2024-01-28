import { Form } from './(login)/form'
import { Suspense } from 'react'

const page = () => {
  return (
    <main className="mt-24 space-y-5">
      <div className="container grid max-w-xl grid-cols-1 gap-4 rounded-md border-[1px] border-slate-500 p-10">
        <Suspense fallback={<p className="text-lg">Loading...</p>}>
          <Form />
        </Suspense>
      </div>
    </main>
  )
}

export default page

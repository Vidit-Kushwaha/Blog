import { URL } from '@/config'
import Editor from './Editor'

async function getData(id: string) {
  const res = await fetch(`${URL}/api/v1/post/${id}`, {
    cache: 'no-cache',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const { data } = await getData(id)

  return (
    <div className="container mt-24 w-full max-w-screen-md space-y-5 pt-8  lg:pt-16">
      <Editor {...data} />
    </div>
  )
}

export default page

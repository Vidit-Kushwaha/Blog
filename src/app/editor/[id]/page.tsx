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
    <div className="">
      <Editor Post={data} id={id} />
    </div>
  )
}

export default page

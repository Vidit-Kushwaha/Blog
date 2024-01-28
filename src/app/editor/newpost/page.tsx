import React from 'react'
import Editor from '../[id]/Editor'

const post = {
  headline: '',
  description: '',
  author: '',
  uid: '',
  genre: '',
  keywords: [''],
  articleBody: '',
  sponsor: '',
  thumbnail: '',
  featureThumbnail: '',
}
const page = () => {
  return (
    <div>
      <Editor Post={post} />
    </div>
  )
}

export default page

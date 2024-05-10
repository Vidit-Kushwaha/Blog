'use client'
import { URL } from '@/config'
import React, { FC, useState } from 'react'
import { toast } from 'react-toastify'

interface FeedBackProps {
  id: string
}

const FeedBack: FC<FeedBackProps> = ({ id }) => {
  const [isClicked, setIsClicked] = useState('')

  const handleFeedback = async (feedback: string) => {
    setIsClicked(feedback)

    const res = await fetch(`${URL}/api/v1/post/like/${feedback}`, {
      method: 'PUT',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (res.ok) {
      toast('Feedback submitted')
      const query = document.querySelector(`#${feedback}`)
      query?.setAttribute('disabled', 'true')
    }
  }

  return (
    <div className="mx-auto my-20">
      <div className="my-5 flex justify-center space-x-5 text-2xl font-semibold">
        Was this article helpful?
      </div>
      <div className="flex justify-center space-x-5">
        <button
          className={`rounded-lg border-[1px] border-black px-6 py-2 duration-150 hover:bg-black hover:text-white ${
            isClicked === 'like' ? 'bg-black text-white' : ''
          }`}
          onClick={() => handleFeedback('like')}
          id="like"
        >
          Yes
        </button>
        <button
          className={`rounded-lg border-[1px] border-black px-6 py-2 duration-150 hover:bg-black hover:text-white ${
            isClicked === 'unlike' ? 'bg-black text-white' : ''
          }`}
          onClick={() => handleFeedback('unlike')}
          id="unlike"
        >
          No
        </button>
      </div>
    </div>
  )
}

export default FeedBack

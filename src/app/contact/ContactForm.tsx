'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const intialState = {
  name: '',
  email: '',
  message: '',
}

const ContactForm = () => {
  const [form, setForm] = useState(intialState)

  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await fetch('https://viditkushwaha.live/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          mode: 'no-cors',
        },
        body: JSON.stringify(form),
      }).then((res) => {
        console.log(res)
        if (res.status === 200) {
          toast('Message Sent Successfully !')
          setForm(intialState)
        }
      })
    } catch (error) {
      console.log(error)
      toast('Error sending message')
    }
  }
  return (
    <form className="mt-10 max-w-lg" onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold" htmlFor="name">
          Name
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border border-black px-5 py-3 leading-tight focus:outline-none"
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handelChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border border-black px-5 py-3 leading-tight focus:outline-none"
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handelChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold" htmlFor="message">
          Message
        </label>
        <textarea
          className="focus:shadow-outline w-full appearance-none rounded border border-black px-5 py-3 leading-tight focus:outline-none"
          id="message"
          rows={5}
          name="message"
          value={form.message}
          onChange={handelChange}
          required
        />
      </div>
      <button className="rounded bg-black px-5 py-3 text-white" type="submit">
        Send
      </button>
    </form>
  )
}

export default ContactForm

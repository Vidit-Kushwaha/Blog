import React from 'react'
import Form from './Form'

const page = () => {
  return (
    <main
      className="mx-auto mt-8 max-w-screen-lg px-4 lg:px-0"
      data-test="contactUs"
    >
      <div className="mb-5 text-3xl font-bold md:text-7xl">Contact Us</div>
      <div className="text-lg">
        We&apos;d love to hear from you! Send us a message using the form below.
      </div>
      <Form />
    </main>
  )
}

export default page

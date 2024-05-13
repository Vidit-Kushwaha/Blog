import { EMAIL } from '@/config'
import { transporter } from '@/config/NodeMailerConfig'
import { NextResponse } from 'next/server'
import { EmailTemplate } from '@/config/EmailTemplate'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  try {
    await transporter.sendMail({
      from: EMAIL,
      to: EMAIL,
      subject: 'Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: EmailTemplate({ name, email, message }, 'ADMIN'),
    })
    await transporter.sendMail({
      from: EMAIL,
      to: email,
      subject:
        'Thank You for Your Message – Looking Forward to Connecting Soon!',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: EmailTemplate({ name, email, message }, 'USER'),
    })
    return NextResponse.json({
      success: true,
      message: 'Email has been sent!',
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      success: false,
      message: 'Failed to send email',
    })
  }
}

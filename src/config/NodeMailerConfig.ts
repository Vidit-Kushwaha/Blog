import nodemailer from 'nodemailer'
import { EMAIL, EMAIL_PASS } from '.'

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: EMAIL_PASS,
  },
})

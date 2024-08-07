const NODE_ENV = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 3000
const URL = NODE_ENV == 'development' ? `http://localhost:${port}` : 'https://blog.viditkushwaha.com'
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Blog'
const SESSION_PASS = process.env.SESSION_PASS || 'secret2'
const EMAIL = process.env.EMAIL || ''
const EMAIL_PASS = process.env.EMAIL_PASS || ''
const NEXT_PUBLIC_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID || ''

export { NODE_ENV, port, URL, MONGODB_URI, SESSION_PASS, EMAIL, EMAIL_PASS, NEXT_PUBLIC_MEASUREMENT_ID }

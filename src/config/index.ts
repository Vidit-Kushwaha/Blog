const NODE_ENV = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 3000
const URL = process.env.URL || `http://localhost:${port}`
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Blog'
const SESSION_PASS = process.env.SESSION_PASS || 'secret2'
const EMAIL = process.env.EMAIL || ''
const EMAIL_PASS = process.env.EMAIL_PASS || ''

export { NODE_ENV, port, URL, MONGODB_URI, SESSION_PASS, EMAIL, EMAIL_PASS }

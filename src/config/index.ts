const NODE_ENV = process.env.NODE_ENV || 'development'
const JWT_SECRET = process.env.JWT_SECRET || 'secret1'
const port = process.env.PORT || 3000
const URL = process.env.URL || 'http://localhost:3000'
const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/'
const SESSION_PASS = process.env.SESSION_PASS || 'secret2'

export { NODE_ENV, port, JWT_SECRET, URL, MONGODB_URI, SESSION_PASS }

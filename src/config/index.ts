const NODE_ENV = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 3000
const URL = process.env.URL || 'http://localhost:3000'
const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/'
const SESSION_PASS = process.env.SESSION_PASS || 'secret2'

export { NODE_ENV, port, URL, MONGODB_URI, SESSION_PASS }

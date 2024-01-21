// lib/mongodb.js
import mongoose from 'mongoose'

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '', {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    })
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

export default connectDB

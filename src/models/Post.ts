const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
  },
  keywords: [String],
  articleBody: {
    type: String,
    required: true,
  },
  sponsor: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  thumbnail: {
    type: String,
  },
  featureThumbnail: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

export default Post

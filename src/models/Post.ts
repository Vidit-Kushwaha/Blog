import { PostFlagType, PostGenreType } from '@/types/postType'
import { Error } from 'mongoose'
const mongoose = require('mongoose')

const genreTypes: PostGenreType[] = [
  'Book',
  'Podcast',
  'Article',
  'Video',
  'Course',
  'Event',
  'Product',
  'Service',
  'Job',
  'Other',
]

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
  genre: {
    type: String,
    enum: genreTypes,
    required: true,
  },
  flag: {
    type: String,
    enum: ['Featured', 'Trending', 'Latest', 'Popular', 'Recommended'],
  },
  keywords: [String],
  articleBody: {
    type: String,
    required: true,
  },
  readingTime: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

export default Post

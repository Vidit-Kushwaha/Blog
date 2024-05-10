import { PostFlagType, PostGenreType } from '@/types/postType'
import mongoose from 'mongoose'

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
  slug: {
    type: String,
    required: true,
    unique: true,
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

postSchema.set('toJSON', {
  transform: (document: mongoose.Document, returnedObject: any) => {
    delete returnedObject.__v
    delete returnedObject.createdAt
    delete returnedObject.updatedAt
  },
})

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

export default Post

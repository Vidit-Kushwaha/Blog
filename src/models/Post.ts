import { faker } from '@faker-js/faker'

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
  genre: {
    type: String,
    enum: ['featured', 'trending', 'latest', 'popular', 'recommended'],
  },
  keywords: [String],
  articleBody: {
    type: String,
    required: true,
  },
  readingTime: {
    type: Number,
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
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

export default Post

export const createRandomPosts = async (numPosts = 10) => {
  try {
    const posts = []
    for (let i = 0; i < numPosts; i++) {
      posts.push(
        new Post({
          headline: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          author: faker.person.firstName(),
          uid: i * Math.random(),
          genre: faker.lorem.word(),
          keywords: faker.lorem.words(5),
          articleBody: faker.lorem.paragraphs(3),
          sponsor: faker.company.name(),
          likes: faker.number.int(),
          views: faker.number.int(),
          thumbnail: faker.image.url(),
          featureThumbnail: faker.image.url(),
          createdAt: faker.date.past(),
        })
      )
    }

    await Post.insertMany(posts) // Insert multiple posts at once
    console.log(`Created ${numPosts} random posts`)
  } catch (error) {
    console.error('Error creating posts:', error)
  }
}

import Post from '@/models/Post'
import { faker } from '@faker-js/faker'

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
          genre: 'Article',
          keywords: faker.lorem.words(5),
          articleBody: faker.lorem.paragraphs(6),
          user: '65b73bc938867083b39c15cc',
          sponsor: faker.company.name(),
          flag: 'Featured',
          likes: faker.number.int(),
          views: faker.number.int(),
          thumbnail: faker.image.url(),
          featureThumbnail: faker.image.url(),
          createdAt: faker.date.past(),
          readingTime: faker.number.int().toPrecision(1),
        })
      )
    }

    await Post.insertMany(posts)
    console.log(`Created ${numPosts} random posts`)
  } catch (error) {
    console.error('Error creating posts:', error)
  }
}

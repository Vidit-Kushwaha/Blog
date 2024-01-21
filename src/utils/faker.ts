import Post from '@/models/Post'
import { faker } from '@faker-js/faker'

export function createFakePost() {
  return {
    headline: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    author: faker.person.firstName(),
    uid: faker.datatype.uuid(),
    genre: faker.animal,
    keywords: faker.lorem.words(5),
    articleBody: faker.lorem.paragraphs(3),
    sponsor: faker.company.name(),
    likes: faker.number.int(),
    views: faker.number.int(),
    thumbnail: faker.image.url(),
    featureThumbnail: faker.image.url(),
    createdAt: faker.date.past(),
  }
}

// Example usage:

import mongoose from 'mongoose'
import { ApiError } from 'next/dist/server/api-utils'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    lowercase: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
    imuutable: true,
  },
  avatar: {
    type: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

/**
 * Methods
 */
UserSchema.method({})

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get user
   * @param {string} id - The email of user.
   * @returns {Promise<User, APIError>}
   */
  get(email) {
    return this.findOne({ email })
      .select('name email')
      .exec()
      .then((user: any) => {
        if (user) {
          return user
        }
        const err = new ApiError(404, 'User id does not exist')
        return Promise.reject(err)
      })
  },
  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limipt - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .select('name email createdAt updatedAt ')
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec()
  },
}

/**
 * @typedef User
 */
export default mongoose.models.User || mongoose.model('User', UserSchema)

const config = require('../config/index')

class ApiError extends Error {
  statusCode: number // Add statusCode property
  isOperational: boolean // Add isOperational property
  constructor(
    statusCode: number,
    message: string,
    isOperational = true,
    stack = ''
  ) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational
    if (stack && config.env === 'development') {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

module.exports = ApiError

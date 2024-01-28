export const estimateReadingTime = (text: string) => {
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 4)
  const wordsPerMinute = 75
  const estimatedMinutes = Math.ceil(words.length / wordsPerMinute)

  return estimatedMinutes
}

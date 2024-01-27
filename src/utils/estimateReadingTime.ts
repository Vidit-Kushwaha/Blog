export const estimateReadingTime = (text: string) => {
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 4)
  const wordsPerMinute = 200
  const estimatedMinutes = Math.ceil(words.length / wordsPerMinute)

  return {
    minutes: estimatedMinutes,
    seconds: estimatedMinutes * 60,
  }
}

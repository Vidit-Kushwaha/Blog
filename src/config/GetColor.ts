export const getColor = (
  hasHover: boolean = true,
  color?: 'green' | 'red' | 'indigo' | 'blue' | 'purple' | 'gray' | 'pink'
): string => {
  switch (color) {
    case 'red':
      return ` bg-red-100 ${hasHover ? 'hover:bg-red-800' : ''}`
    case 'gray':
      return `text-gray-800 bg-gray-100 ${hasHover ? 'hover:bg-gray-800' : ''}`
    case 'green':
      return `text-green-800 bg-green-100 ${
        hasHover ? 'hover:bg-green-800' : ''
      }`
    case 'purple':
      return `text-purple-800 bg-purple-100 ${
        hasHover ? 'hover:bg-purple-800' : ''
      }`
    case 'indigo':
      return `text-indigo-800 bg-indigo-100 ${
        hasHover ? 'hover:bg-indigo-800' : ''
      }`
    case 'blue':
      return `text-blue-800 bg-blue-100 ${hasHover ? 'hover:bg-blue-800' : ''}`
    case 'pink':
      return `text-pink-800 bg-pink-100 ${hasHover ? 'hover:bg-pink-800' : ''}`
    default:
      return `text-blue-800 bg-blue-100 ${hasHover ? 'hover:bg-blue-800' : ''}`
  }
}

import TwitterCard from '@/components/TwitterCard'
import Books from '@/sections/Books'
import LatestArticleSection from '@/sections/LatestArticleSection'
import Projects from '@/sections/Projects'

export default function Home() {
  return (
    <div className="container max-w-5xl space-y-6">
      <LatestArticleSection />
      <Projects />
      <Books />
    </div>
  )
}

const post = {
  index: 1,
  id: '9e3e3994-a3ed-47ca-a014-d4483884cfe2',
  featureThumbnail:
    'https://images.unsplash.com/photo-1597551681492-10c86e481548?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  headline: 'Lenovo’s smarter devices stoke professional passions ',
  description:
    'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  date: 'May 20, 2021',
  href: '/blog/single',
  readingTime: 2,
  genre: 'standard',
}

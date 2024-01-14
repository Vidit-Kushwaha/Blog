import Books from '@/sections/Books'
import LatestArticleSection from '@/sections/LatestArticleSection'
import Projects from '@/sections/Projects'

export default function Home() {
  return (
    <div>
      <LatestArticleSection />
      <Projects />
      <Books />
    </div>
  )
}

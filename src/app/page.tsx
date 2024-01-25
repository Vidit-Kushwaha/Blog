import LatestArticleSection from '@/sections/LatestArticleSection'
import Projects from '@/sections/Projects'

export default function Home() {
  return (
    <div className="container max-w-5xl space-y-6">
      <LatestArticleSection />
      <Projects />
    </div>
  )
}

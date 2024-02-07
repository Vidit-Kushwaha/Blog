import LatestArticleSection from '@/components/sections/LatestArticleSection'
import Projects from '@/components/sections/Projects'

export const runtime = 'edge'
const page = () => {
  return (
    <div className="max-w-5xl space-y-6">
      <LatestArticleSection />
      <Projects />
    </div>
  )
}

export default page

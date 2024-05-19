import SplashScreens from '@/components/SplashScreen'
import RenderCTA from '@/components/RenderCTA'

export const runtime = 'edge'
const page = () => {
  return (
    <div className="relative max-w-7xl space-y-6">
      <SplashScreens />
      <RenderCTA />
      <div className="absolute left-0 top-0">
        <div className="flex h-[80vh] flex-col items-center justify-center">
          <div className="relative md:flex">
            <div className="block overflow-hidden text-5xl font-medium md:text-7xl">
              <div className="inline-block space-x-4">
                <span className="pl-4 sm:pl-20">A</span>
                <span className="">PINCH</span>
                <span>OF</span>
              </div>
              <div className="inline-block">
                <span>KNOWLEDGE</span>
              </div>
            </div>
            <div className="py-10 text-sm md:w-1/3 md:p-0">
              Keep up with our most recent tech articles. Check out the book
              synopsis, stay updated, and learn about upcoming events.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

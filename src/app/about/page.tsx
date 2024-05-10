import React from 'react'
import ProjectSection from './Project'
import { FaQuoteLeft } from 'react-icons/fa'

const page = () => {
  return (
    <div className="container max-w-screen-xl">
      <section className="flex h-[70vh] w-full justify-center">
        <div className="absolute flex w-full justify-between overflow-x-hidden text-center text-4xl font-bold md:text-8xl">
          <div className="words flex overflow-y-clip text-[#222222]">
            WEB PROGRAMMER DEVELOPER DESIGNER CREATIVITY
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-end px-5 text-center text-5xl font-bold md:text-8xl">
          <div className="absolute text-center text-5xl md:text-8xl">VIDIT</div>
        </div>
      </section>
      <section className="h-auto w-full rounded bg-[#191919]">
        <div className="p-5 text-center text-5xl font-bold text-white md:text-8xl">
          KUSHWAHA
        </div>
        <div className="mx-auto flex-wrap justify-center space-x-5 py-10 text-2xl text-white md:flex">
          <div className="w-full justify-center px-5">
            <div className="relative mx-auto flex flex-col justify-evenly gap-y-2 sm:flex-row">
              <div className="text-grey-800 my-[10px] flex flex-col items-center justify-center border-dashed border-white/20">
                <div className="mx-auto flex flex-col items-center font-semibold text-white/40">
                  <span className="text-4xl">2+</span>
                  <span>Experiences</span>
                </div>
              </div>
              <div className="hidden w-px scale-y-[0.6] border-r border-dashed border-white/20  sm:block"></div>
              <div className="text-grey-80 my-[10px] flex flex-col items-center justify-center border-dashed border-white/20">
                <div className="mx-auto flex flex-col items-center font-semibold text-white/40">
                  <span className="text-4xl">10+</span>
                  <span>Projects</span>
                </div>
              </div>
              <div className="hidden w-px scale-y-[0.6] border-r border-dashed border-white/20  sm:block"></div>
              <div className="text-grey-80 my-[10px] flex flex-col items-center justify-center border-dashed border-white/20">
                <div className="mx-auto flex flex-col items-center font-semibold text-white/40">
                  <span className="text-4xl">10K+</span>
                  <span>Lines of code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-[#f5f2e9] py-20">
        <div className="container space-y-10 md:space-y-24">
          <div className="border-line w-full border-t border-white/[0.15] pt-12 md:pt-6">
            <div className="text-left text-2xl font-semibold">&gt; About_</div>
            <div className="mt-12 flex w-full justify-end md:mt-20">
              <div className="container !mx-0 flex !w-full justify-end">
                <div className="flex w-full max-w-[732px] flex-col text-left">
                  <div className="max-w-[650px]">
                    <h2 className="mb-5 md:mb-[15px]">
                      <FaQuoteLeft />
                      Experience is the name everyone gives to their mistakes
                    </h2>
                    <div className="mb-5 max-w-prose space-y-5 text-xl font-medium text-gray-800">
                      <p>
                        Vidit Kushwaha is a full-stack developer with a passion
                        for building beautiful and functional websites. He has
                        been working in the industry for over 2 years and has
                        experience with a wide range of technologies. He is
                        always looking for new challenges and loves learning new
                        things. In his free time, he enjoys playing video games,
                        and reading books.
                      </p>
                      <p>
                        Vidit is a self-taught developer who has a background in
                        metallurgy & materials enginnering. He is always looking
                        for new ways to improve his skills and stay up-to-date
                        with the latest technologies. He is passionate about
                        creating clean and efficient code and loves working on
                        projects that challenge him.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container space-y-10 md:space-y-24">
          <div className="border-line w-full border-t border-white/[0.15] pt-12 md:pt-6">
            <div className="text-left text-2xl font-semibold">
              &gt; Projects_
            </div>
            <ProjectSection />
          </div>
        </div>
      </section>
    </div>
  )
}

export default page

import React from 'react'
import ProjectCard from '@/components/ProjectCard'

async function getData() {
  return await fetch(`https://api.github.com/users/Vidit-Kushwaha/repos`, {
    next: {
      revalidate: 24 * 60 * 60,
    },
  }).then((res) => res.json())
}

const ProjectSection: React.FC = async () => {
  const data = await getData()

  return (
    <div className="mt-12 flex w-full flex-col gap-5 overflow-hidden md:min-h-[492px] md:flex-row xl:gap-[30px]">
      {data &&
        data.length > 0 &&
        data
          ?.filter((item: any) => !item.fork)
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 5)
          .map((item: any, index: number) => {
            return (
              <ProjectCard
                key={index}
                title={item.name}
                iconSrc={item.html_url}
                description={item.description}
              />
            )
          })}
    </div>
  )
}

export default ProjectSection

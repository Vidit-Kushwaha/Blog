import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mb-12 max-w-7xl" data-test="Discover">
      {children}
    </main>
  )
}

export default layout

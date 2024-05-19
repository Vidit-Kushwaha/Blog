'use client'

import React, { useEffect, useState } from 'react'
import RenderBlock from './RenderBlock'

const RenderCTA = () => {
  const [state, setState] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(true)
    }, 4050)
    return () => clearTimeout(timeout)
  }, [state])

  if (state) {
    return <RenderBlock />
  }
  return <></>
}

export default RenderCTA

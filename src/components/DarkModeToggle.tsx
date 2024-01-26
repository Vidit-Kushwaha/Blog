'use client'

import { useThemeMode } from '@/utils/useThemeMode'
import { Switch } from '@headlessui/react'
import React, { useEffect } from 'react'
import { IoIosMoon, IoMdSunny } from 'react-icons/io'

export interface DarkModeToggleProps {
  className?: string
}
const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = '' }) => {
  const { _toogleDarkMode, isDarkMode, toDark, toLight } = useThemeMode()

  useEffect(() => {
    // if (isDarkMode) {
    //   toDark()
    // } else {
    //   toLight()
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode])

  return (
    <div className={`inline-flex ${className}`}>
      <span className="sr-only">Enable dark mode</span>
      <Switch
        disabled
        title='Feature coming soon'
        checked={isDarkMode}
        onChange={_toogleDarkMode}
        className={`${isDarkMode ? 'bg-gray-200' : 'bg-gray-600'}
          relative inline-flex h-[30px] w-[52px] shrink-0 cursor-pointer rounded-full border-4 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          aria-hidden="true"
          className={`${isDarkMode ? 'translate-x-5' : 'translate-x-0'}
            item-center pointer-events-none flex transform transition duration-200 ease-in-out`}
        >
          {isDarkMode ? (
            <IoMdSunny className="h-[22px] w-[22px]" />
          ) : (
            <IoIosMoon className="h-[22px] w-[22px] fill-white" />
          )}
        </span>
      </Switch>
    </div>
  )
}

export default DarkModeToggle

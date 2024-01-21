import { BadgeColorType } from '@/types/BadgeColor'
import { Route } from 'next'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

export interface BadgeProps {
  className?: string
  name: ReactNode
  color?: BadgeColorType
  href?: Route
}

const Badge: FC<BadgeProps> = ({
  className = 'relative text-xs px-2.5 py-1',
  name,
  color = 'green',
  href,
}) => {
  const getColor = () => {
    switch (color) {
      case 'pink':
        return `text-pink-800 bg-pink-200 hover:bg-pink-800 hover:text`
      case 'red':
        return `text-red-800 bg-red-200 hover:bg-red-800 hover:text-white`
      case 'gray':
        return `text-gray-800 bg-gray-200 hover:bg-gray-800 hover:text-white`
      case 'green':
        return `text-green-800 bg-green-200 hover:bg-green-800 hover:text-white`
      case 'purple':
        return `text-purple-800 bg-purple-200 hover:bg-purple-800 hover:text-white`
      case 'indigo':
        return `text-indigo-800 bg-indigo-200 hover:bg-indigo-800 hover:text-white`
      case 'blue':
        return `text-blue-800 bg-blue-200 hover:bg-blue-800 hover:text-white`
      default:
        return `text-pink-800 bg-pink-200 hover:bg-pink-800 hover:text`
    }
  }

  const commonClass =
    `inline-flex  rounded-full font-medium ${getColor()} ` + className
  return !!href ? (
    <Link
      href={href || ''}
      className={`transition-colors duration-300 hover:text-white ${commonClass}`}
    >
      {name}
    </Link>
  ) : (
    <span className={commonClass}>{name}</span>
  )
}

export default Badge

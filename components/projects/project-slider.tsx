'use client'
import { useState, useEffect, useRef } from 'react'

import Project from '../projects/project'

import { projects } from '../../constants/projects'

export default function ProjectSlider() {
  const [right, setRight] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const innerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let projectWidth = -1
    if (innerRef.current) projectWidth = innerRef.current?.offsetWidth / 2
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setRight((prevLeft) =>
          projectWidth === prevLeft + 1 ? 0 : prevLeft + 1
        )
      }
    }, 1)

    return () => clearInterval(intervalId)
  }, [isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div id="slider" className="py-3 overflow-hidden">
      <div
        ref={innerRef}
        style={{ right: `${right}px` }}
        id="slider-inner"
        className="relative w-max"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {projects.map((proj) => {
          return <Project key={`${proj.name}-1`} project={proj} />
        })}
        {projects.map((proj) => {
          return <Project key={`${proj.name}-2`} project={proj} />
        })}
      </div>
    </div>
  )
}

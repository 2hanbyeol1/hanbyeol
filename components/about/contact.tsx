'use client'
import React, { useEffect } from 'react'

export default function Contact() {
  let emailElement: HTMLElement | null = null

  useEffect(() => {
    emailElement = document.querySelector('#email')
  }, [])

  const onMouseEnter = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.currentTarget.style.backgroundColor = 'yellow'
    e.currentTarget.style.color = 'black'

    if (emailElement) {
      emailElement.style.backgroundColor = 'yellow'
    }
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.currentTarget.style.backgroundColor = 'transparent'
    e.currentTarget.style.color = 'white'

    if (emailElement) {
      emailElement.style.backgroundColor = 'transparent'
    }
  }

  return (
    <div className="text-center text-white">
      Contact me via&nbsp;
      <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        email
      </span>
      , please 🙏
    </div>
  )
}

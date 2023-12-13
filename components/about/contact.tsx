'use client'
import React from 'react'

export default function Contact() {
  const emailElement = document.querySelector('#email') as HTMLElement

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

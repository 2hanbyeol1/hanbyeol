'use client'
import React from 'react'
import Image from 'next/image'
import Me from '../../public/image/me.png'
import Wink from '../../public/image/wink.png'
import Cursor from '../../public/image/cursor.png'

export default function MyImage() {
  const [isHovering, setIsHovering] = React.useState<boolean>(false)
  const onMouseEnter = () => {
    setIsHovering(true)
  }
  const onMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div className="relative">
      <Image
        src={isHovering ? Wink : Me}
        alt="me-image"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Image
        className="animate-bounce-xy absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
        width={20}
        height={20}
        src={Cursor}
        alt="cursor-image"
      />
    </div>
  )
}

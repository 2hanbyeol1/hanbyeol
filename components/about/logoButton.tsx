import React from 'react'
import Image from 'next/image'

export default function LogoButton({
  image,
  href,
  name,
}: {
  image: any
  href: string
  name: string
}) {
  return (
    <div className="mr-3 last:mr-0">
      <a href={href} target="_blank">
        <Image className="w-10 h-10" src={image} alt={`${name}-link`} />
      </a>
    </div>
  )
}

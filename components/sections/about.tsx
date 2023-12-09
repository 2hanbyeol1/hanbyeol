'use client'
import React from 'react'
import MyImage from '../about/myImage'
import LogoButton from '../about/logoButton'

import GitHub from '../../public/image/github.svg'
import Blog from '../../public/image/blog.png'
import Instagram from '../../public/image/instagram.svg'
import Velog from '../../public/image/velog.png'
import Title from '../common/title'

const infos = [
  '🐹 Hanbyeol Lee',
  '🎂 2001-12-30',
  '✏️ 명지대학교, 융합소프트웨어학부',
]

const links = [
  { img: GitHub, href: 'https://github.com/2hanbyeol1', name: 'github' },
  { img: Blog, href: 'https://blog.naver.com/2hanbyeol1', name: 'naver blog' },
  { img: Velog, href: 'https://velog.io/@2hanbyeol1', name: 'velog' },
  {
    img: Instagram,
    href: 'https://www.instagram.com/1nstargram_/',
    name: 'instagram',
  },
]

export default function About() {
  const [isHovering, setIsHovering] = React.useState(false)

  const onMouseEnter = () => {
    setIsHovering(true)
  }
  const onMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <>
      <div
        id="about"
        className="flex flex-col mb-5 px-10 py-7 bg-white rounded-2xl"
      >
        <Title title="About me" />
        <div className="text-lg mb-3">
          안녕하세요! ~~~ 개발자,&nbsp;
          <span className="font-semibold">이한별</span>입니다 :)
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center items-center pr-10 border-r border-gray-300">
            <MyImage />
          </div>
          <div className="flex flex-col justify-between pl-10">
            <div>
              {infos.map((info, i) => {
                return (
                  <div key={`info-${i}`} className="text-lg w-fit">
                    {info}
                  </div>
                )
              })}
              <div
                className={`text-lg w-fit ${
                  isHovering ? ' bg-yellow-300' : ''
                }`}
              >
                📧 2hanbyeol1@naver.com
              </div>
            </div>
            <div className="flex">
              {links.map((link, i) => {
                return (
                  <LogoButton
                    key={`link-${i}`}
                    href={link.href}
                    image={link.img}
                    name={link.name}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        Contact me via&nbsp;
        <span
          className={`underline${
            isHovering ? ' bg-yellow-300 text-black' : ''
          }`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          email
        </span>
        , please 🙏
      </div>
    </>
  )
}

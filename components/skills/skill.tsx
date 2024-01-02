'use client'
import React, { MouseEvent } from 'react'
import Image from 'next/image'
import Rating from './rating'
import { SkillType } from '../../constants/type'

export default function Skill({ skill }: { skill: SkillType }) {
  const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    e?.currentTarget?.children[1]?.classList.remove('hidden')
  }

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e?.currentTarget?.children[1]?.classList.add('hidden')
  }

  return (
    <div
      id={skill.name}
      className="flex justify-center items-center mx-3 my-1 relative w-10 y-10"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        className={`${
          skill.requireBg && 'bg-white rounded-full '
        }h-min z-0 hover:animate-scale-up fill-mode-forwards`}
        width={30}
        src={skill.img}
        alt={skill.name}
      />
      <div
        id={`${skill.name}-des`}
        className="hidden absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2.5 flex flex-col items-center bg-white text-black text-xs px-2 py-1 rounded-sm z-10"
      >
        <div className="font-semibold">{skill.name}</div>
        <Rating id={`${skill.name}-bar`} rate={skill.rate} />
        <div className="mt-1">{skill.content}</div>
      </div>
    </div>
  )
}

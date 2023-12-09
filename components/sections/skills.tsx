'use client'
import React, { MouseEvent } from 'react'
import Image from 'next/image'
import Title from '../common/title'
import SkillTitle from '../skills/title'

import skillData from '../../constants/skills'

export default function Skills() {
  const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    e?.currentTarget?.children[1]?.classList.remove('hidden')
  }
  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e?.currentTarget?.children[1]?.classList.add('hidden')
  }

  return (
    <div id="skills" className="p-10">
      <Title title="Skills" />
      <div className="flex flex-col">
        {skillData.map((s) => {
          return (
            <div key={s.title} className="mb-5">
              <SkillTitle title={s.title} />
              <div className="flex flex-wrap items-center">
                {s.skills.map((skill) => {
                  return (
                    <div
                      id={skill.name}
                      key={`${skill.name}-container`}
                      className="flex justify-center items-center mx-3 my-1 relative w-10 y-10"
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    >
                      <Image
                        key={`${skill.name}-img`}
                        className={
                          'h-min z-0 hover:animate-scale-up fill-mode-forwards'
                        }
                        width={30}
                        src={skill.img}
                        alt={skill.name}
                      />
                      <div
                        id={`${skill.name}-des`}
                        className="hidden absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-white text-black text-xs px-2 py-1 rounded-sm z-10"
                      >
                        {skill.name}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

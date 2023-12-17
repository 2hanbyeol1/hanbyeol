'use client'
import Title from '../common/title'
import SkillTitle from '../skills/title'
import Skill from '../skills/skill'

import skillData from '../../constants/skills'

export default function Skills() {
  return (
    <>
      <Title title="Skills" />
      <div className="flex flex-col">
        {skillData.map((s) => {
          return (
            <div key={s.title} className="mb-5">
              <SkillTitle title={s.title} />
              <div className="flex flex-wrap items-center">
                {s.skills.map((skill) => {
                  return <Skill key={`${skill.name}-container`} skill={skill} />
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

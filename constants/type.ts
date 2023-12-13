import { StaticImageData } from 'next/image'

// about

// skills
export type SkillType = {
  name: string
  img: any
}

// projects
export type ProjectType = {
  name: string
  skills: string[]
  description: string
  img: StaticImageData
  content: string[]
  github: string
  url?: string
  fe?: number
  be?: number
}

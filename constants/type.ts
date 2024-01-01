import { StaticImageData } from 'next/image'

// about

// skills
export type SkillType = {
  name: string
  img: any
  requireBg?: Boolean
  rate: number
  content?: string
}

// projects
export type ProjectType = {
  name: string
  duration: [Date, Date | null]
  skills: string[]
  description: string
  img: StaticImageData
  content: string[]
  github: string
  url?: string
  dev: number
}

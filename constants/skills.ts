import React from '../public/image/react.png'
import HTML from '../public/image/html.svg'
import CSS from '../public/image/css.svg'
import Javascript from '../public/image/javascript.svg'
import Typescript from '../public/image/typescript.svg'
import TailwindCSS from '../public/image/tailwind-css.svg'
import Git from '../public/image/git.svg'
import GitHub from '../public/image/github.svg'
import MySQL from '../public/image/mysql.svg'
import BootStrap from '../public/image/bootstrap.svg'
import NextJS from '../public/image/nextjs.svg'
import NodeJS from '../public/image/nodejs.svg'
import Java from '../public/image/java.svg'
import Spring from '../public/image/spring.svg'
import Python from '../public/image/python.svg'
import RecoilJS from '../public/image/recoiljs.svg'

import { SkillType } from './type'

const feSkills: SkillType[] = [
  {
    name: 'HTML',
    img: HTML,
    rate: 90,
  },
  { name: 'CSS', img: CSS, rate: 80 },
  { name: 'Javascript', img: Javascript, rate: 70 },
  { name: 'Typescript', img: Typescript, rate: 50 },
  { name: 'ReactJS', img: React, rate: 60 },
  { name: 'RecoilJS', img: RecoilJS, rate: 50 },
  { name: 'NextJS', img: NextJS, requireBg: true, rate: 50 },
  { name: 'BootStrap', img: BootStrap, rate: 90 },
  { name: 'TailwindCSS', img: TailwindCSS, rate: 90 },
]

const scmSkills: SkillType[] = [
  { name: 'Git', img: Git, rate: 80 },
  { name: 'GitHub', img: GitHub, requireBg: true, rate: 80 },
]

const etcSkills: SkillType[] = [
  { name: 'Java', img: Java, rate: 50 },
  { name: 'JavaSpring', img: Spring, requireBg: true, rate: 40 },
  { name: 'Python', img: Python, rate: 40 },
  { name: 'NodeJS', img: NodeJS, rate: 10 },
  { name: 'MySQL', img: MySQL, rate: 30 },
]

const data = [
  { title: 'FE', skills: feSkills },
  { title: 'SCM', skills: scmSkills },
  { title: 'ETC', skills: etcSkills },
]

export default data

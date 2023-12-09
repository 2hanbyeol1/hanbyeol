import React from '../public/image/react.png'
import HTML from '../public/image/html.svg'
import CSS from '../public/image/css.svg'
import Javascript from '../public/image/javascript.svg'
import Typescript from '../public/image/typescript.svg'
import Java from '../public/image/java.svg'
import Git from '../public/image/git.svg'
import GitHub from '../public/image/github.svg'
import MongoDB from '../public/image/mongoDB.svg'
import MySQL from '../public/image/mysql.svg'
import BootStrap from '../public/image/bootstrap.svg'
import NextJS from '../public/image/nextjs.svg'
import NodeJS from '../public/image/nodejs.svg'
import Python from '../public/image/python.svg'
import RecoilJS from '../public/image/recoiljs.svg'

const feSkills = [
  { name: 'HTML', img: HTML },
  { name: 'CSS', img: CSS },
  { name: 'Javascript', img: Javascript },
  { name: 'Typescript', img: Typescript },
  { name: 'React.js', img: React },
  { name: 'RecoilJS', img: RecoilJS },
  { name: 'NextJS', img: NextJS },
  { name: 'NodeJS', img: NodeJS },
  { name: 'BootStrap', img: BootStrap },
]

const scmSkills = [
  { name: 'Git', img: Git },
  { name: 'GitHub', img: GitHub },
]

const etcSkills = [
  { name: 'Java', img: Java },
  { name: 'Python', img: Python },
  { name: 'MySQL', img: MySQL },
  { name: 'MongoDB', img: MongoDB },
]

const data = [
  { title: '프론트', skills: feSkills },
  { title: '형상관리', skills: scmSkills },
  { title: '기타', skills: etcSkills },
]

export default data

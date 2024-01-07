import { SkillType } from './type';

const feSkills: SkillType[] = [
  {
    name: 'HTML',
    rate: 90,
  },
  { name: 'CSS', rate: 80 },
  { name: 'Javascript', rate: 70 },
  { name: 'Typescript', rate: 50 },
  { name: 'ReactJS', rate: 60 },
  { name: 'RecoilJS', rate: 50 },
  { name: 'NextJS', requireBg: true, rate: 50 },
  { name: 'BootStrap', rate: 90 },
  { name: 'TailwindCSS', rate: 90 },
];

const scmSkills: SkillType[] = [
  { name: 'Git', rate: 80 },
  { name: 'GitHub', requireBg: true, rate: 80 },
];

const etcSkills: SkillType[] = [
  { name: 'Java', rate: 50 },
  { name: 'JavaSpring', requireBg: true, rate: 40 },
  { name: 'Python', rate: 40 },
  { name: 'NodeJS', rate: 10 },
  { name: 'MySQL', rate: 30 },
];

const data = [
  { title: 'FE', skills: feSkills },
  { title: 'SCM', skills: scmSkills },
  { title: 'ETC', skills: etcSkills },
];

export default data;

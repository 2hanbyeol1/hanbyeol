import Liberty52 from '../public/image/project/liberty52.png';
import Liberty52_Admin from '../public/image/project/admin-liberty52.png';
import Portfolio from '../public/image/project/portfolio.png';
import Egomogo from '../public/image/project/egomogo.png';
import { ProjectType } from './type';

export const projects: ProjectType[] = [
  {
    name: 'Liberty 52',
    dev: 10,
    duration: [new Date(2023, 2), new Date(2023, 11)],
    skills: ['React', 'axios', 'styled-components'],
    description: '쇼핑몰 웹 사이트',
    img: Liberty52,
    content: [],
    github: 'https://github.com/2hanbyeol1/liberty-front-end',
    url: 'https://liberty52.com/',
  },
  {
    name: 'Liberty 52 Admin',
    dev: 10,
    duration: [new Date(2023, 2), new Date(2023, 11)],
    skills: ['React', 'axios', 'styled-components'],
    description: '쇼핑몰 웹 사이트 관리자 페이지',
    img: Liberty52_Admin,
    content: [],
    github: 'https://github.com/2hanbyeol1/liberty-admin-page',
    url: 'https://admin.liberty52.com/',
  },
  {
    name: 'Egomogo',
    dev: 6,
    duration: [new Date(2023, 6), new Date(2023, 7)],
    skills: ['React Native', 'axios', 'styled-components', 'Recoil'],
    description: '명지대 주변 식당 추천 앱',
    img: Egomogo,
    content: [],
    github: 'https://github.com/2hanbyeol1/egomogo-front-end',
  },
  {
    name: 'portfolio',
    dev: 1,
    duration: [new Date(2023, 11), null],
    skills: ['React', 'Next.js', 'Typescript', 'Tailwind CSS'],
    description: '포트폴리오 웹 페이지',
    img: Portfolio,
    content: [],
    github: 'https://github.com/2hanbyeol1/hanbyeol',
  },
];

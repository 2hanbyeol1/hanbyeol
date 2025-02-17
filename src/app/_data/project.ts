import { TSkillImgFileName } from './skill';

export interface TProject {
  id: string;
  title: string;
  description: string | string[];
  duration: [Date, Date];
  mainSkills: TSkillImgFileName[];
  isMain: boolean; // 주요 프로젝트 여부
  bgDark?: boolean;
}

export const PROJECT_CONTENTS: TProject[] = [
  {
    id: 'liberty-52',
    title: 'Liberty 52 Frame',
    description: ['커스텀 스피커, Liberty 52', '쇼핑몰 및 관리자 서비스'],
    duration: [new Date('2023.03'), new Date('2023.12')],
    mainSkills: ['react', 'javascript', 'styled-component', 'recoil'],
    isMain: true,
  },
  {
    id: 'egomogo',
    title: 'egomogo',
    description: ['명지대 인근 음식점 랜덤 추첨', '모바일 애플리케이션'],
    duration: [new Date('2023.07'), new Date('2023.08')],
    mainSkills: ['react-native', 'javascript', 'styled-component', 'recoil'],
    isMain: true,
  },
  {
    id: 'chat-chat',
    title: '챗챗',
    description: ['Web Socket 학습용', '채팅 애플리케이션'],
    duration: [new Date('2023.10'), new Date('2023.12')],
    mainSkills: ['react', 'javascript', 'styled-component', 'node'],
    isMain: false,
    bgDark: true,
  },
  {
    id: 'movie-movie',
    title: '무비무비',
    description: '영화 검색 웹페이지',
    duration: [new Date('2024.05'), new Date('2024.05')],
    mainSkills: ['html', 'css', 'javascript'],
    isMain: false,
    bgDark: true,
  },
  {
    id: 'culture-train',
    title: '문화열차',
    description: '공연 예약 시스템',
    duration: [new Date('2024.07'), new Date('2024.07')],
    mainSkills: ['next', 'typescript', 'tailwind-css', 'zustand', 'supabase'],
    isMain: false,
  },
  {
    id: 'oosie',
    title: 'oosie',
    description: ['기록, 챌린지를 통한', '헬스 케어 커뮤니티'],
    duration: [new Date('2024.07'), new Date('2024.08')],
    mainSkills: ['next', 'typescript', 'tailwind-css', 'zustand', 'supabase'],
    isMain: true,
    bgDark: true,
  },
  {
    id: 'searchright',
    title: '서치라이트',
    description: ['인재 추천 솔루션,', '서치라이트를 소개하는 랜딩페이지'],
    duration: [new Date('2024.09'), new Date('2024.11')],
    mainSkills: ['next', 'typescript', 'tailwind-css', 'zustand'],
    isMain: true,
  },
  {
    id: 'portfolio-2',
    title: '포트폴리오',
    description: ['FE 개발자 이한별,', '포트폴리오 웹사이트'],
    duration: [new Date('2025.01'), new Date('2025.02')],
    mainSkills: ['next', 'typescript', 'tailwind-css', 'zustand'],
    isMain: true,
  },
];

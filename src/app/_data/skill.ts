export type TSkillImgFileName =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'react-native'
  | 'next'
  | 'aws'
  | 'git'
  | 'recoil'
  | 'zustand'
  | 'tanstack-query'
  | 'styled-component'
  | 'tailwind-css'
  | 'node'
  | 'supabase';

export interface TSkill {
  title: string;
  descriptions: string[];
  imgFileName: TSkillImgFileName;
}

export const SKILL_CONTENTS: TSkill[] = [
  {
    title: 'HTML & CSS',
    descriptions: [
      '<b>다양한 디바이스 환경에 최적화된 레이아웃과 CSS 애니메이션</b>을 구현합니다.',
      '시맨틱 태그를 사용하여 <b>접근성과 SEO 최적화를 고려</b>한 마크업을 작성합니다.',
    ],
    imgFileName: 'html',
  },
  {
    title: 'JS & TS',
    descriptions: [
      '<b>ES6 문법과 최신 자바스크립트</b> 기능들을 활용하여 효율적인 코드를 작성합니다.',
      '타입 안전성을 확보하기 위해 <b>Typescript를 적극 활용</b>합니다.',
      '코드의 <b>가독성과 유지보수성</b>을 높입니다.',
    ],
    imgFileName: 'javascript',
  },
  {
    title: 'React',
    descriptions: [
      '<b>재사용 가능한 컴포넌트 및 모듈화</b>를 통해 유지보수성이 뛰어난 애플리케이션을 구현합니다.',
      '<b>다양한 React Hook을 활용</b>하여 기능을 개발할 수 있습니다.',
      '<b>React Native</b>를 이용한 크로스 플랫폼 앱 개발 프로젝트를 진행한 적이 있습니다.',
    ],
    imgFileName: 'react',
  },
  {
    title: 'Next.js',
    descriptions: [
      '<b>CSR, SSR, SSG, ISR 렌더링 방식에 대해 이해</b>하고 적합한 상황에서 사용할 수 있습니다.',
      'Next.js의 다양한 기능을 활용하여 <b>성능 및 SEO에 최적화된 웹 애플리케이션을 개발</b>합니다.',
    ],
    imgFileName: 'next',
  },
  {
    title: 'Deploy',
    descriptions: [
      '<b>AWS S3와 CloudFront로 정적 페이지를 배포</b>한 경험이 있습니다.',
      'GitHub Actions를 통해 <b>CI/CD 파이프라인을 구축하여 배포 프로세스를 자동화</b>한 경험이 있습니다.',
    ],
    imgFileName: 'aws',
  },
  {
    title: 'Git',
    descriptions: [
      'Git과 GitHub를 활용한 <b>코드 버전 관리 및 협업 경험</b>을 바탕으로, 효과적인 팀 커뮤니케이션과 프로젝트 관리를 수행합니다.',
    ],
    imgFileName: 'git',
  },
  {
    title: '전역 상태 관리',
    descriptions: [
      '상태 관리 라이브러리로 <b>Recoil, Zustand, Tanstack Query</b> 등을 사용한 경험이 있습니다.',
    ],
    imgFileName: 'recoil',
  },
];

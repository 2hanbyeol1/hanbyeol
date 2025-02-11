export interface TSkill {
  title: string;
  descriptions: string[];
  imgFileName: string;
}

export const SKILL_CONTENTS: TSkill[] = [
  {
    title: 'HTML & CSS',
    descriptions: [
      '다양한 디바이스 환경에 최적화된 레이아웃과 CSS 애니메이션을 구현합니다.',
      '시맨틱 태그를 사용하여 접근성과 SEO 최적화를 고려한 마크업을 작성합니다.',
    ],
    imgFileName: 'html',
  },
  {
    title: 'JS & TS',
    descriptions: [
      'ES6 문법과 최신 자바스크립트 기능들을 활용하여 효율적인 코드를 작성합니다.',
      '타입 안전성을 확보하기 위해 Typescript를 적극 활용하며, 코드의 가독성과 유지보수성을 높입니다.',
    ],
    imgFileName: 'js',
  },
  {
    title: 'React',
    descriptions: [
      '재사용 가능한 컴포넌트 및 모듈화를 통해 유지보수성이 뛰어난 애플리케이션을 구현합니다.',
      'React의 다양한 훅을 활용하여 기능을 개발할 수 있습니다.',
      'React Native를 이용한 크로스 플랫폼 앱 개발 프로젝트를 진행한 적이 있습니다.',
    ],
    imgFileName: 'react',
  },
  {
    title: 'Next.js',
    descriptions: [
      'CSR, SSR, SSG, ISR의 동작원리에 대해 이해하고 있습니다.',
      'Next.js의 라우팅, API 라우트, 이미지 최적화 등 다양한 기능을 활용하여 성능 및 SEO에 최적화된 웹 애플리케이션을 개발합니다.',
    ],
    imgFileName: 'next',
  },
  {
    title: 'Deploy',
    descriptions: [
      'AWS S3와 CloudFront로 정적 페이지를 배포한 경험이 있습니다.',
      'GitHub Actions를 통해 CI/CD 파이프라인을 구축하여 배포 프로세스를 자동화한 경험이 있습니다.',
    ],
    imgFileName: 'aws',
  },
  {
    title: 'Git',
    descriptions: [
      'Git과 GitHub를 활용한 코드 버전 관리 및 협업 경험을 바탕으로, 효과적인 팀 커뮤니케이션과 프로젝트 관리를 수행합니다.',
    ],
    imgFileName: 'git',
  },
  {
    title: '전역 상태 관리',
    descriptions: [
      '상태 관리 라이브러리로 Recoil, Zustand, Tanstack Query 등을 사용한 경험이 있습니다.',
    ],
    imgFileName: 'recoil',
  },
];

import { SkillType } from './type';

const skills: SkillType[] = [
  {
    name: 'HTML & CSS',
    contents: [
      '웹 표준을 지키려 노력합니다',
      '시멘틱 마크업 작업이 가능합니다',
      'transition/keyframes를 사용한 애니메이션 작업을 할 수 있습니다',
      '미디어 쿼리로 반응형 웹을 만들 수 있습니다',
      'Styled-Component를 이용하여 스타일링이 가능합니다',
      'CSS 라이브러리(Bootstrap, tailwindCSS 등)를 사용할 수 있습니다',
    ],
  },
  {
    name: 'Javascript',
    contents: [
      'ES6 Javascript 문법에 익숙합니다',
      'Typescript을 사용할 수 있습니다',
    ],
  },
  {
    name: 'ReactJS',
    contents: [
      'React.js를 활용하여 Single Page Application (SPA)를 제작하는 데 익숙합니다',
      'React Native를 활용하여 모바일 애플리케이션을 개발할 수 있습니다',
      'Next.js를 사용하여 서버 사이드 렌더링 (SSR)을 구현한 경험이 있습니다',
      'Recoil을 활용하여 효과적인 전역 상태 관리를 수행할 수 있습니다',
      'Axios를 이용하여 백엔드와 통신할 수 있습니다',
    ],
  },
  {
    name: 'Git & GitHub',
    contents: [
      'Git을 이용한 프로젝트 관리와 협업이 가능합니다',
      '코드 리뷰로 코드 질을 향상시킵니다',
    ],
  },
  {
    name: 'DEPLOY',
    contents: [
      'S3를 이용해서 React 페이지를 배포한 경험이 있습니다',
      'Github Pages와 Vercel를 이용한 페이지 배포 경험이 있습니다.',
    ],
  },

  {
    name: 'ETC',
    contents: [
      'Java/ Spring Boot를 이용한 백엔드 개발 경험이 있습니다',
      'Python과 R을 이용한 데이터 분석 경험이 있습니다',
      'node.js를 사용해 본 적이 있습니다',
      'SQL을 사용한 데이터 CRUD가 가능합니다',
    ],
  },
];

export default skills;

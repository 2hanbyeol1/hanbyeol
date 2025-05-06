import { TSkillImgFileName } from './skill';

export interface TProject {
  id: string;
  title: string;
  subtitle: string | string[];
  duration: [Date, Date];
  mainSkills: TSkillImgFileName[];
  isMain: boolean; // 주요 프로젝트 여부
  team?: TTeam; // undefined인 경우 개인 프로젝트
  bgDark?: boolean;
  tasks?: string[];
  images?: { src: string; caption: string }[];
  website?: string;
  isMobile?: boolean;
}

export interface TTeam {
  fe?: number;
  be?: number;
  designer?: number;
}

export const PROJECT_CONTENTS: TProject[] = [
  {
    id: 'liberty-52',
    title: 'Liberty 52 Frame',
    subtitle: ['커스텀 스피커, Liberty 52', '쇼핑몰 및 관리자 서비스'],
    duration: [new Date('2023.03'), new Date('2023.12')],
    mainSkills: ['react', 'javascript', 'styled-component', 'recoil'],
    isMain: true,
    team: {
      fe: 4,
      be: 6,
    },
    images: [
      {
        src: 'https://github.com/2hanbyeol1/liberty-front-end/raw/main/readme/page/main.png',
        caption: '메인 페이지',
      },
      {
        src: 'https://github.com/2hanbyeol1/liberty-front-end/raw/main/readme/page/login.png',
        caption: '로그인 페이지',
      },
      {
        src: 'https://github.com/2hanbyeol1/liberty-front-end/raw/main/readme/page/signup.png',
        caption: '회원가입 페이지',
      },
      {
        src: 'https://github.com/2hanbyeol1/liberty-front-end/raw/main/readme/page/order.png',
        caption: '주문 페이지',
      },
      {
        src: 'https://github.com/2hanbyeol1/liberty-front-end/raw/main/readme/page/reviewTab.png',
        caption: '주문 페이지 - 리뷰 탭',
      },
      {
        src: 'https://github.com/2hanbyeol1/liberty-front-end/raw/main/readme/page/productInfoTab.png',
        caption: '주문 페이지 - 상품 소개 탭',
      },
    ],
    tasks: [
      '<b>배송 정보 입력, 주문 조회, 이미지 업스케일링 등 13개 이상의 기능 및 화면 구현</b><br>`react-daum-postcode`를 이용한 배송지 주소 검색<br>`toast-ui/react-editor` 텍스트 에디터 사용하여 HTML 형식으로 상품 소개 글 작성<br>에디터 우측에서 html 형식으로 작성한 글에 대한 미리보기 구현<br>페이지네이션',
      '<b>관리자 페이지와 쇼핑몰 페이지 데이터 동기화</b>',
      '<b>패키지 구조 설계</b>',
      '<b>9개의 공용 컴포넌트 구현</b>',
      '<b>지속적인 리팩토링</b>',
    ],
  },
  {
    id: 'egomogo',
    title: 'egomogo',
    subtitle: ['명지대 인근 음식점 랜덤 추첨', '모바일 애플리케이션'],
    duration: [new Date('2023.07'), new Date('2023.08')],
    mainSkills: ['react-native', 'javascript', 'styled-component', 'recoil'],
    isMain: true,
    isMobile: true,
    team: {
      fe: 3,
      be: 3,
    },
    images: [
      {
        src: 'https://github.com/2hanbyeol1/egomogo-front-end/raw/main/readme/page/main.jpg',
        caption: '메인 페이지',
      },
      {
        src: 'https://github.com/2hanbyeol1/egomogo-front-end/raw/main/readme/page/distanceModal.png',
        caption: '거리 설정 모달',
      },
      {
        src: 'https://github.com/2hanbyeol1/egomogo-front-end/raw/main/readme/component/detail.png',
        caption: '식당 카드',
      },
    ],
    tasks: [
      '<b>컴포넌트 디자인 참여</b><br>내 위치와 거리 설정 기능 구현<br>설정한 거리 이내에 있는 식당을 추천할 수 있도록 하는 기능<br>내 현재 위치와 설정한 거리에 따른 반경을 지도에 표시',
      '<b>카테고리</b>',
      '<b>카카오맵 API를 이용한 식당 위치 표시</b>',
    ],
  },
  {
    id: 'chat-chat',
    title: '챗챗',
    subtitle: ['Web Socket 학습용', '채팅 애플리케이션'],
    duration: [new Date('2023.10'), new Date('2023.12')],
    mainSkills: ['react', 'javascript', 'styled-component', 'node'],
    isMain: false,
    bgDark: true,
    tasks: [
      '<b>React + Typescript</b> 공부',
      '<b>Node.js 및 Web Socket</b> 공부',
    ],
    images: [
      {
        src: 'https://github.com/2hanbyeol1/chatchat/raw/main/src/assets/screenshot/Main_iPhone12Pro.png',
        caption: '',
      },
    ],
    isMobile: true,
  },
  {
    id: 'movie-movie',
    title: '무비무비',
    subtitle: '영화 검색 웹페이지',
    duration: [new Date('2024.05'), new Date('2024.05')],
    mainSkills: ['html', 'css', 'javascript'],
    isMain: false,
    bgDark: true,
    team: {
      fe: 6,
    },
    website: 'https://2hanbyeol1.github.io/movie-movie/',
    tasks: [
      '<b>팀장</b><br>역할 분담, 회의 주도',
      '<b>메인 페이지</b><br>IMDb API를 이용한 인기 영화 정보 조회<br>영화 검색 및 필터<br>스크롤 감지 헤더, 스크롤 탑 버튼<br>영어, 한국어로 조회',
      '<b>상세 정보 및 리뷰 페이지</b><br>퍼블리싱<br>리뷰 유효성 검사',
      '<b>반응형</b> 페이지',
    ],
  },
  {
    id: 'culture-train',
    title: '문화열차',
    subtitle: '공연 예약 시스템',
    duration: [new Date('2024.07'), new Date('2024.07')],
    mainSkills: [
      'next',
      'typescript',
      'tailwind-css',
      'zustand',
      'tanstack-query',
      'supabase',
    ],
    isMain: false,
    team: {
      fe: 6,
    },
  },
  {
    id: 'oosie',
    title: 'OOSIE',
    subtitle: ['기록, 챌린지를 통한', '헬스 케어 커뮤니티'],
    duration: [new Date('2024.07'), new Date('2024.08')],
    mainSkills: [
      'next',
      'typescript',
      'tailwind-css',
      'zustand',
      'tanstack-query',
      'supabase',
    ],
    isMain: true,
    team: {
      fe: 6,
      designer: 1,
    },
    bgDark: true,
    images: [
      {
        src: 'https://github.com/user-attachments/assets/1371856b-9a18-438f-9277-fd7cc630319f',
        caption: '소개 이미지',
      },
    ],
    tasks: [
      '<b>식단, 운동 조회 및 삭제</b><br>달력에서 날짜를 선택해 해당 날짜의 식단과 운동을 조회하는 기능 구현<br>날짜 선택 방식이 불편하다는 사용자 피드백<br>→ swiper를 이용하여 캘린더 날짜 전환 방식을 드래그로 변경',
      '<b>식단, 운동 기록 및 수정</b><br>코드의 유지보수성과 가독성을 개선하기 위해 약 50 줄의 주요 로직을 커스텀 훅으로 분리<br>날짜와 끼니 별로 하나의 식단을 등록 및 수정 가능하게 구현<br>낙관적 업데이트를 적용한 운동 완료 체크<br>음식의 칼로리 입력에 어려움을 겪는다는 유저 테스트 결과<br>→ debounce를 활용한 음식 영양 성분 검색 기능 추가',
      '<b>캘린더, 로딩 컴포넌트 구현 및 UI 개선</b><br>캘린더, 로딩 컴포넌트 제작<br>디자이너 피드백을 반영한 공통 컴포넌트 UI 개선',
      '<b>프로젝트 문서화 및 기술 스택 정리</b>',
      '<b>반응형 웹 페이지 구현</b>',
    ],
    website: 'https://oosie.vercel.app',
  },
  {
    id: 'searchright',
    title: '서치라이트',
    subtitle: ['인재 추천 솔루션,', '서치라이트를 소개하는 랜딩페이지'],
    duration: [new Date('2024.09'), new Date('2024.11')],
    mainSkills: ['next', 'typescript', 'tailwind-css', 'zustand'],
    isMain: true,
    team: {
      fe: 1,
      be: 1,
    },
    tasks: [
      '<b>블로그 페이지 추가</b><br>DB에 저장된 블로그 글을 보여주는 화면과 기능 개발<br>설정한 거리 이내에 있는 식당을 추천할 수 있도록 하는 기능<br>내 현재 위치와 설정한 거리에 따른 반경을 지도에 표시',
      '<b>무료 리스트 신청 페이지 내재화</b><br>기존 smore로 구현된 신청 페이지 내재화<br>유효성 검사 및 에러 처리 구현',
      '<b>SEO 최적화 + 써드파티 서비스 연동</b><br>SSG(static export)로 구현<br>메타데이터, 오픈그래프, 캐노니컬 태그 적용<br>채널톡, Hotjar 연결',
      '<b>CI/CD 구현</b><br>린팅, 빌드, ssh+scp 를 이용한 배포<br>배포 성공 여부에 따른 슬랙 알림<br>AWS(Cloudfront + S3)로 이전',
      '<b>홈페이지 디자인 리뉴얼</b>',
    ],
    website: 'https://searchright.net/',
    images: [
      {
        src: 'https://github.com/user-attachments/assets/30d71024-d00a-468a-882d-3a8af63b0de6',
        caption: '메인 페이지',
      },
      {
        src: 'https://github.com/user-attachments/assets/fa845f15-e7e4-495e-81a8-4c9c3d65f238',
        caption: '블로그 페이지',
      },
      {
        src: 'https://github.com/user-attachments/assets/cfcd76d0-ba7b-4036-80c0-a3995240ae7b',
        caption: '블로그 상세 페이지',
      },
      {
        src: 'https://github.com/user-attachments/assets/aa31139c-639f-4410-af46-45518202cac1',
        caption: 'FAQ 페이지',
      },
      {
        src: 'https://github.com/user-attachments/assets/fbccaf38-a489-4cfe-8f53-f20ba797cc95',
        caption: '문의하기 페이지',
      },
      {
        src: 'https://github.com/user-attachments/assets/d7493c17-5463-4b13-84a0-1763b568b57f',
        caption: '리스트 신청 페이지',
      },
    ],
  },
  {
    id: 'portfolio',
    title: '포트폴리오',
    subtitle: ['FE 개발자 이한별,', '포트폴리오 웹사이트'],
    duration: [new Date('2025.01'), new Date('2025.05')],
    mainSkills: ['next', 'typescript', 'tailwind-css', 'zustand'],
    isMain: true,
    tasks: [
      'Intro, Skill, Experience, Projects, Contact 5개 섹션으로 구성',
      '디자인, 퍼블리싱',
    ],
  },
  {
    id: 'talix',
    title: 'TALIX',
    subtitle: ['경험 태그를 통한 인재 검색,', 'SaaS 프로덕트'],
    duration: [new Date('2025.02'), new Date('2025.04')],
    mainSkills: ['next', 'typescript', 'tailwind-css', 'zustand'],
    isMain: true,
    team: {
      fe: 1,
      be: 1,
    },
    tasks: [
      '<b>기획부터 디자인 및 프론트엔드 개발에 참여</b>',
      '<b>프로젝트 관리 페이지</b><br>프로젝트 CRUD, 활성화, 검색',
      '<b>인재 검색 페이지</b><br>인재 필터 (직군, 연차, 경험 태그, 자연어 검색)<br>필터 검색 기록 저장 / 조회 / 삭제<br>숏리스트에 인재 저장<br>인재 상세 조회<br>인재 신고<br>인재 URL 복사',
      '<b>숏리스트 페이지</b><br>메모<br>의뢰 요청',
      '<b>간단한 사용법 설명</b>',
      '<b>무료 이용 종료 모달</b>',
    ],
    website: 'https://talix.kr/',
    images: [
      {
        src: 'https://github.com/user-attachments/assets/a6698ddb-3f12-4745-ab2f-1703a78de872',
        caption: '프로젝트 관리 페이지',
      },
      {
        src: 'https://github.com/user-attachments/assets/78ec13ab-712d-45a2-babb-43c0b84f6f36',
        caption: '검색 페이지',
      },
      {
        src: 'https://github.com/user-attachments/assets/9b142406-b2b9-4380-9d46-9fa2378a3989',
        caption: '숏리스트 페이지',
      },
      {
        src: 'https://github.com/user-attachments/assets/a9245484-760c-44cc-9814-5350e9b94749',
        caption: '사용자 인증 모달',
      },
    ],
  },
];

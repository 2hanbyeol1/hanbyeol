import { TSkillImgFileName } from './skill';

export interface TProject {
  id: string;
  title: string;
  subtitle: string;
  duration: [Date, Date];
  mainSkills: TSkillImgFileName[];
  isMain: boolean; // 주요 프로젝트 여부
  team?: TTeam; // undefined인 경우 개인 프로젝트
  bgDark?: boolean;
  tasks: string[];
  troubles?: string[];
  learnings?: string[];
  images?: { src: string; caption: string }[];
  github?: string;
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
    id: 'talix',
    title: 'TALIX',
    subtitle: '경험 태그를 통한 인재 검색, SaaS 프로덕트',
    duration: [new Date('2025-02-01'), new Date('2025-04-01')],
    mainSkills: ['next', 'typescript', 'tailwind-css', 'zustand'],
    isMain: true,
    team: {
      fe: 1,
      be: 1,
    },
    tasks: [
      '<b>기획 일부 참여, 디자인 및 FE 개발 담당</b>',
      '<b>프로젝트 관리 페이지</b><br>프로젝트 CRUD, 활성화, 검색',
      '<b>인재 검색 페이지</b><br>인재 필터 (직군, 연차, 경험 태그, 자연어 검색)<br>필터 검색 기록 저장 / 조회 / 삭제<br>숏리스트에 인재 저장<br>인재 상세 조회<br>인재 신고<br>인재 URL 복사',
      '<b>숏리스트 페이지</b><br>메모<br>의뢰 요청',
      '<b>간단한 사용법 설명</b>',
      '<b>무료 이용 종료 모달</b>',
    ],
    troubles: [
      '<b>상태 관리 데이터 구조에 대한 고민</b><br>→ 각 상태를 역할별로 나누고, 어떤 상태가 어떤 흐름으로 연결되는지 구조화하여 명확하게 설계',
      '<b>Walktour 라이브러리 props</b><br>라이브러리에 필요한 기능이 존재하지 않았음.<br>→ 문서에는 해당 내용이 없었지만, 실제 오픈소스 코드에는 존재하는 것을 확인<br>→ 해당 라이브러리에 PR 작성',
    ],
    learnings: [
      '<b>0 to 1</b> 경험',
      '<b>피그마를 이용한 디자인</b> 경험',
      '<b>프로덕트를 사용자 관점에서</b> 바라보는 시야가 넓어짐',
      'jest + react-testing-library를 이용한 <b>테스트 코드</b> 작성',
      '<b>PM과의 소통</b>',
    ],
    images: [
      {
        src: 'project',
        caption: '프로젝트 관리 페이지',
      },
      {
        src: 'search',
        caption: '검색 페이지',
      },
      {
        src: 'shortlist',
        caption: '숏리스트 페이지',
      },
      {
        src: 'verification',
        caption: '사용자 인증 모달',
      },
    ],
  },
  {
    id: 'searchright',
    title: '서치라이트',
    subtitle: '인재 추천 솔루션, 서치라이트를 소개하는 랜딩페이지',
    duration: [new Date('2024-09-01'), new Date('2024-11-01')],
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
    troubles: [
      '<b>블로그 작성 방법에 대한 고민</b><br>→ 블로그 작성 및 스타일링에 대한 기준이 명확하지 않음<br>→ Shadow DOM으로 스타일을 분리, 노션의 HTML 내보내기 기능 활용 + 블로그 포매터 구현',
      '<b>FAQ api 호출 위치에 대한 고민</b><br>→ FAQ를 CSR로 구현할 경우 SEO에 부정적인 영향을 줄 우려가 있음<br>→ SEO 최적화를 위해 상위 컴포넌트에서 데이터를 호출해 SSG로 구현',
    ],
    learnings: [
      '<b>초기 스타트업 경험</b>과 <b>HR 도메인</b>에 대한 이해',
      'CI/CD, AWS 연결, SEO 최적화 등 <b>새로운 기술</b> 경험',
      '<b>static export</b>를 사용한 next.js의 동작 이해',
      '<b>Docker를 활용한 배포 환경 테스트</b> 경험',
      '<b>백엔드 개발자와의 소통</b>',
    ],
    website: 'https://searchright.net/',
    images: [
      {
        src: 'main',
        caption: '메인 페이지',
      },
      {
        src: 'blog',
        caption: '블로그 페이지',
      },
      {
        src: 'blog-detail',
        caption: '블로그 상세 페이지',
      },
      {
        src: 'faq',
        caption: 'FAQ 페이지',
      },
      {
        src: 'contact',
        caption: '문의하기 페이지',
      },
      {
        src: 'request',
        caption: '리스트 신청 페이지',
      },
    ],
  },
  {
    id: 'oosie',
    title: 'OOSIE',
    subtitle: '기록, 챌린지를 통한 헬스 케어 커뮤니티',
    duration: [new Date('2024-07-01'), new Date('2024-08-01')],
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
        src: 'intro',
        caption: '소개 이미지',
      },
    ],
    tasks: [
      '<b>식단, 운동 조회 및 삭제</b><br>달력에서 날짜를 선택해 해당 날짜의 식단과 운동을 조회하는 기능 구현<br>날짜 선택 방식이 불편하다는 사용자 피드백<br>→ swiper를 이용하여 캘린더 날짜 전환 방식을 드래그로 변경',
      '<b>식단, 운동 기록 및 수정</b><br>코드의 유지보수성과 가독성을 개선하기 위해 약 50줄의 주요 로직을 커스텀 훅으로 분리<br>날짜와 끼니 별로 하나의 식단을 등록 및 수정 가능하게 구현<br>낙관적 업데이트를 적용한 운동 완료 체크<br>음식의 칼로리 입력에 어려움을 겪는다는 유저 테스트 결과<br>→ debounce를 활용한 음식 영양 성분 검색 기능 추가',
      '<b>캘린더, 로딩 컴포넌트 구현 및 UI 개선</b><br>캘린더, 로딩 컴포넌트 제작<br>디자이너 피드백을 반영한 공통 컴포넌트 UI 개선',
      '<b>프로젝트 문서화 및 기술 스택 정리</b>',
      '<b>반응형 웹 페이지 구현</b>',
    ],
    troubles: [
      '<b>DB 구조 설계로 인한 식단 정렬 불가</b><br>→ dietType 컬럼의 타입이 string 이라 아침, 점심, 저녁 순서로 정렬이 어려움<br>→ dietType 컬럼의 타입을 int (0, 1, 2)로 변경',
      '<b>식품영양성분 DB정보 공공데이터 OPEN API 변경</b><br>→ OPEN API 변경으로 기존에 존재하던 FOOD_NAME_KR parameter가 사라져서 음식 이름으로 검색할 수 없게 됨<br>→ 공공데이터 API 대신 csv 파일을 전처리하여 supabase에 입력',
    ],
    learnings: [
      '<b>낙관적 업데이트</b>를 적용하여 사용자 경험 향상',
      '<b>유저 피드백</b>을 이용한 UX 개선',
      '<b>커스텀 훅</b>을 이용한 유지보수성 및 응집성 개선',
      '<b>Tanstack query 아키텍처에 대한 논의</b>, 팀원들과 회의, 아키텍처에 대한 이해 증진',
      '<b>디자이너와 협업</b> 및 <b>Figma</b>를 활용한 웹 퍼블리싱 경험',
    ],
    github: 'https://github.com/2hanbyeol1/oosie',
    // website: 'https://oosie.vercel.app',
  },
  {
    id: 'egomogo',
    title: 'egomogo',
    subtitle: '명지대 인근 음식점 랜덤 추첨, 모바일 애플리케이션',
    duration: [new Date('2023-07-01'), new Date('2023-08-01')],
    mainSkills: [
      'react-native',
      'javascript',
      'styled-component',
      'material-ui',
      'recoil',
    ],
    isMain: true,
    isMobile: true,
    team: {
      fe: 3,
      be: 3,
    },
    images: [
      {
        src: 'main',
        caption: '메인 페이지',
      },
      {
        src: 'distance-modal',
        caption: '거리 설정 모달',
      },
      {
        src: 'restaurant-card',
        caption: '식당 카드',
      },
    ],
    tasks: [
      '<b>컴포넌트 디자인 참여</b><br>내 위치와 거리 설정 기능 구현<br>설정한 거리 이내에 있는 식당을 추천할 수 있도록 하는 기능<br>내 현재 위치와 설정한 거리에 따른 반경을 지도에 표시',
      '<b>카테고리</b>',
      '<b>카카오맵 API를 이용한 식당 위치 표시</b>',
    ],
    github: 'https://github.com/2hanbyeol1/egomogo-front-end',
  },
  {
    id: 'liberty-52',
    title: 'Liberty 52 Frame',
    subtitle: '커스텀 스피커, Liberty 52 쇼핑몰 및 관리자 서비스',
    duration: [new Date('2023-03-01'), new Date('2023-12-01')],
    mainSkills: [
      'react',
      'javascript',
      'styled-component',
      'material-ui',
      'recoil',
    ],
    isMain: true,
    team: {
      fe: 4,
      be: 6,
    },
    images: [
      {
        src: 'main',
        caption: '메인 페이지',
      },
      {
        src: 'login',
        caption: '로그인 페이지',
      },
      {
        src: 'signup',
        caption: '회원가입 페이지',
      },
      {
        src: 'order',
        caption: '주문 페이지',
      },
      {
        src: 'review-tab',
        caption: '주문 페이지 - 리뷰 탭',
      },
      {
        src: 'product-info-tab',
        caption: '주문 페이지 - 상품 소개 탭',
      },
    ],
    tasks: [
      '<b>배송 정보 입력, 주문 조회, 이미지 업스케일링 등 13개 이상의 기능 및 화면 구현</b><br>`react-daum-postcode`를 이용한 배송지 주소 검색<br>`toast-ui/react-editor` 텍스트 에디터 사용하여 HTML 형식으로 상품 소개 글 작성<br>에디터 우측에서 html 형식으로 작성한 글에 대한 미리보기 구현<br>페이지네이션',
      '<b>관리자 페이지와 쇼핑몰 페이지 데이터 동기화</b>',
      '<b>패키지 구조 설계</b>',
      '<b>9개의 공용 컴포넌트 구현</b>',
    ],
    troubles: [
      '<b>이미지 업스케일링 결과 링크가 about:blank로 나옴</b><br>API에서 횟수 제한에 걸리면 response가 201지만 결과 값이 빈 문자열로 반환됨<br>→ 결과 이미지 주소가 빈 문자열인지 확인하고 경고 창을 띄움',
      '<b>업스케일링 결과 화면이 404로 표시됨</b><br>API에서 결과 주소를 먼저 반환하고 이미지를 업로드하는데 시간이 소요됨<br>→ setInterval를 사용하여 1초마다 이미지 url status를 확인하고 200일 때 미리보기 창을 표시함',
    ],
    learnings: [
      '팀 내 스프린트 및 스크럼 회의를 통해 <b>Agile 개발 방식에 익숙</b>해짐',
      '마감 기한을 맞추고 고객의 요구를 충족하기 위한 <b>유연한 프로젝트 관리와 빠른 의사 결정의 중요성 깨달음</b>',
      'React, axios 등 프로젝트에 필요한 기술을 신속하게 배우고 적용하며 <b>새로운 기술 학습에 익숙</b>해짐',
      '<b>고객사와 소통 경험</b>',
    ],
    github: 'https://github.com/2hanbyeol1/liberty-front-end',
  },
];

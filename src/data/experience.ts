export interface TExperience {
  title: string;
  image: string;
  subtitle: string;
  description?: string;
  activities: {
    works: string[];
    achievements?: string[];
    duration: [Date, Date];
    links?: { text: string; url: string }[];
  }[];
}

export const EXPERIENCE_CONTENTS: TExperience[] = [
  {
    title: 'SearcHRight AI',
    image: 'searchright.png',
    subtitle: '프론트엔드 개발',
    description:
      '숨어있는 ‘인재’의 역량을 분석하여 가장 적합한 후보자를 추천하는 솔루션을 개발하는 스타트업',
    activities: [
      {
        works: [
          '<b>서치라이트 랜딩페이지의 리뉴얼 작업</b> 담당',
          '블로그 작성 및 업로드',
        ],
        duration: [new Date('2024-09-01'), new Date('2024-11-01')],
        links: [
          {
            text: '[포트폴리오] 랜딩페이지 자세히 보기',
            url: '/project/searchright',
          },
          {
            text: '[블로그] 서치라이트 일지',
            url: 'https://velog.io/@2hanbyeol1/series/%EC%84%9C%EC%B9%98%EB%9D%BC%EC%9D%B4%ED%8A%B8',
          },
        ],
      },
      {
        works: [
          '직군, 연차, 경험 태그를 통해 원하는 인재를 검색할 수 있는 <b>SaaS 프로덕트 `talix` 개발</b>',
          '<b>디자인부터 로그인 화면을 제외한 모든 FE 개발 담당</b>',
        ],
        duration: [new Date('2025-02-01'), new Date('2025-04-01')],
        links: [
          {
            text: '[포트폴리오] TALIX 자세히 보기',
            url: '/project/talix',
          },
        ],
      },
    ],
  },
  {
    title: '내일배움캠프',
    image: 'nbcamp.png',
    subtitle: 'React 5기',
    activities: [
      {
        works: [
          '매일 <b>12시간 집중 학습</b> 및 TIL 작성',
          '<b>프로젝트 11개</b> 진행 (개인 5개, 팀 6개, 리더 3회)',
        ],
        achievements: [
          '<b>React 주요 개념</b> 습득',
          '팀원들을 이끌어 <b>프로젝트를 기한 내에 완성</b>하는 능력 기름',
          '<b>디자이너, 개발자와의 협업 및 소통 능력</b> 향상',
        ],
        duration: [new Date('2024-04-01'), new Date('2024-08-01')],
      },
    ],
  },
  {
    title: '오픈소스 컨트리뷰션 아카데미',
    image: 'oscca.png',
    subtitle: 'Git 활용 및 React',
    activities: [
      {
        works: [
          '<b>Git, React, React Native 기초 학습</b>',
          '오픈소스 <b>`hyper`의 코드와 패키지 구조 분석</b>',
        ],
        achievements: [
          '오픈소스에 기여할 수 있는 역량을 키우기 위한 목표 수립',
          '아카데미에서의 학습을 바탕으로 <b>오픈소스 가상 화이트보드 `excalidraw`에 기여</b>',
        ],
        duration: [new Date('2023-07-01'), new Date('2023-08-01')],
        links: [
          {
            text: '[블로그] Git 학습 내용',
            url: 'https://velog.io/@2hanbyeol1/series/Git',
          },
          {
            text: '[Github] Walktour - (OPEN) props에 대한 설명 추가',
            url: 'https://github.com/alfrdmalr/walktour/pull/146',
          },
          {
            text: '[Github] Excalidraw - (CLOSED) 한국어용 손글씨 폰트 추가',
            url: 'https://github.com/excalidraw/excalidraw/pull/8531',
          },
          {
            text: '[Github] Excalidraw - (MERGED) PNG로 내보낼 때 모든 파일로 저장되는 버그 수정',
            url: 'https://github.com/excalidraw/excalidraw/pull/8946',
          },
        ],
      },
    ],
  },
];

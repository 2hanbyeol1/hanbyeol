export interface TExperienceContent {
  title: string;
  subtitle: string;
  duration: [Date, Date];
  description?: string;
  activities: string[];
  achievements: string[];
  links?: { text: string; url: string }[];
}

export const EXPERIENCE_CONTENTS: TExperienceContent[] = [
  {
    title: 'SearcHRight AI',
    subtitle: '프론트엔드 개발 인턴',
    duration: [new Date('2024.09'), new Date('2024.11')],
    description:
      '서치라이트는 숨어있는 ‘인재’들의 역량을 분석하여 회사에 가장 적합한 후보자를 추천하는 솔루션을 개발하는 스타트업입니다.',
    activities: ['랜딩 페이지 개발', '블로그 작성 및 업로드'],
    achievements: ['실무 경험', '초기 스타트업 경험', 'HR 도메인에 대한 이해'],
    links: [
      {
        text: '프로젝트 자세히 보기',
        url: '/projects/searchright',
      },
    ],
  },
  {
    title: '내일배움캠프',
    subtitle: 'React 5기',
    duration: [new Date('2024.04'), new Date('2024.08')],
    activities: [
      '매일 12시간 집중 학습 및 TIL 작성',
      '개인 프로젝트 5개, 팀 프로젝트 6개 (리더 3회)',
    ],
    achievements: [
      'React 주요 개념 체계적 습득',
      '팀원들을 이끌어 프로젝트를 기한 내에 완성하는 능력 기름',
      '전문 디자이너, 개발자들과의 협업 및 소통 능력 향상',
    ],
  },
  {
    title: '오픈소스 컨트리뷰션 아카데미',
    subtitle: 'Git 활용 및 React',
    duration: [new Date('2023.07'), new Date('2023.08')],
    activities: [
      'Git, React, React Native의 기초적인 내용 학습',
      '오픈소스 hyper의 코드와 패키지 구조 분석',
    ],
    achievements: [
      '이후 팀 프로젝트에서 효율적으로 활용',
      '새로운 패턴 탐구',
      '오픈소스에 기여할 수 있는 역량을 키우기 위한 목표 수립',
      '    → 아카데미에서의 학습을 바탕으로 오픈소스 가상 화이트보드 `excalidraw`에 기여',
    ],
  },
];

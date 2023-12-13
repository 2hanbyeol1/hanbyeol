import Liberty52 from '../public/image/liberty52.png'
import Liberty52_Admin from '../public/image/admin-liberty52.png'
import Portfolio from '../public/image/portfolio.png'
import ChatChat from '../public/image/chatchat.png'
import Eyes from '../public/image/eyes.png'
import Pororo from '../public/image/pororo.png'
import Todo from '../public/image/todo.png'
import { ProjectType } from './type'

export const teamProjects: ProjectType[] = [
  {
    name: 'Liberty 52',
    fe: 4,
    be: 6,
    skills: ['React', 'axios', 'styled-components'],
    description: '쇼핑몰 웹 사이트',
    img: Liberty52,
    content: [
      'React와 axios와 같은 프로젝트에 필요한 기술들을 빠르게 습득하는데 익숙해지게 되었다.',
      'useState와 axios를 이용한 비동기 작업을 통한 상태 관리와 API 호출을 잘 다룰 수 있게 되었다.',
      'Git과 Github를 활용하여 팀원들과의 협업, 역할 분담, 일정 계획 등 프로젝트를 효율적으로 관리하는 방법을 습득하여 팀 구성원 간의 원활한 소통과 프로젝트 진행 상황을 효과적으로 추적하는 방법을 익혔다.',
    ],
    github: 'https://github.com/2hanbyeol1/liberty-front-end',
    url: 'https://liberty52.com/',
  },
  {
    name: 'Liberty 52 Admin',
    fe: 4,
    be: 6,
    skills: ['React', 'axios', 'styled-components'],
    description: '쇼핑몰 웹 사이트 관리자 페이지',
    img: Liberty52_Admin,
    content: [
      '팀 내에서 일관된 코드 스타일과 규칙을 정의하고 준수하는 것은 가독성을 향상시키고, 유지보수성을 높이며, 팀원 간의 협업을 원활하게 만들며 새로운 개발자가 프로젝트에 참여할 때에도 적응이 빠르게 이루어질 수 있으므로 중요하다.',
      '서버와의 통신 과정에서 CORS, 400, 500 등 많은 에러를 겪었지만 네트워크 탭을 조회하며 디버깅하고 백엔드 개발자와 소통하며 네트워크 관련 에러들을 핸들링하는 법을 배웠다.',
      'Agile을 적용하여 통해 짧은 개발 주기로 프로젝트를 나누고, 각 주기에서 새로운 요구사항이나 변경 사항을 빠르게 수용할 수 있었으며 각 주기에서 데모를 해보며 팀원들로부터 피드백을 받아 개선할 부분을 빠르게 확인하고 적용하는 것이 프로젝트 품질 향상에 도움이 되었다.',
    ],
    github: 'https://github.com/2hanbyeol1/liberty-admin-page',
    url: 'https://admin.liberty52.com/',
  },
  {
    name: 'Egomogo',
    fe: 3,
    be: 3,
    skills: ['React Native', 'axios', 'styled-components'],
    description: '명지대 주변 식당 추천 앱',
    img: Liberty52,
    content: [
      '이번 프로젝트에서는 모든 화면을 피그마로 디자인한 후 개발에 들어갔다. 피그마로 모든 개발자들이 피그마 툴을 사용하는 방법에 대해 배웠을 뿐만 아니라 피그마를 이용하면 프론트 개발 속도가 획기적으로 빨라지고, 앱이 일관성있는 디자인을 가질 수 있으며, 컴포넌트들을 미리 디자인 해놓고 개발자들이 필요할 때마다 사용할 수 있도록 해주는 등 많은 장점이 있다는 것을 알게 되었다.',
      '백엔드로부터 수신한 카테고리 데이터가 복잡한 트리 구조를 띄어서, 이를 이해하기 위해 백엔드 개발자와 소통을 진행했다. 코드 리뷰와 서로간의 질문은 물론이고, 다양한 의견을 나누는 팀 내 회의에서도 프론트엔드 개발자와 적극적으로 소통하였다. 이를 통해 프로젝트를 원활하게 진행하는 방법과 의사소통의 중요성을 더욱 깨달았다.',
    ],
    github: 'https://github.com/2hanbyeol1/egomogo-front-end',
  },
]

export const sideProjects: ProjectType[] = [
  {
    name: 'portfolio',
    skills: ['React', 'Next.js', 'Typescript', 'Tailwind CSS'],
    description: '포트폴리오 웹 페이지',
    img: Portfolio,
    content: [
      '요즘 많이 사용한다는 tailwind css를 사용해보았다.',
      '서버 사이드 렌더링을 위한 next.js를 처음 접해보았다.',
    ],
    github: 'https://github.com/2hanbyeol1/hanbyeol',
  },
  {
    name: 'chatchat',
    skills: ['React', 'Typescript', 'axios', 'styled-components', 'Node.js'],
    description: '웹 소켓을 이용한 채팅 애플리케이션',
    img: ChatChat,
    content: [
      'Node.js를 처음 접해보았다.',
      '항상 채팅은 어떤 방식으로 구현하는지 궁금했는데 많은 방식 중 웹 소켓을 이용해서 구현해봐서 좋았다.',
    ],
    github: 'https://github.com/2hanbyeol1/chatchat#readme',
  },
  {
    name: '명지대학교 수강신청 연습',
    skills: ['React Native', 'Recoil'],
    description: '명지대학교 수강신청 연습 애플리케이션',
    img: Eyes,
    content: [
      '이미 있는 시스템을 따라 화면을 만드는 것은 처음이었다',
      'Recoil을 이용하여 상태 관리를 하였다.',
      '화면크기에 따른 테스트는 못 해봐서 나의 폰 기종(Z Flip 3) 말고도 되는지 모르겠다.',
      '배포하는데 어려움을 겪어서 아직 못했는데 꼭 해보고 싶다. 다음 수강신청 전에 배포하고 싶다',
    ],
    github: 'https://github.com/2hanbyeol1/sugang-practice#sugang-practice',
  },
  {
    name: 'eyes',
    skills: ['React', 'html canvas'],
    description: 'html canvas를 이용한 움직이는 눈알',
    img: Eyes,
    content: [
      'canvas를 이용하여 interactive한 웹을 만드는 연습!',
      '눈알 안쪽에 커서를 놔두면 오류가 있어서 아쉬움',
    ],
    github: 'https://github.com/2hanbyeol1/eyes#readme',
    url: 'https://2hanbyeol1.github.io/eyes/',
  },
  {
    name: '뽀로로 찾기',
    skills: ['html', 'css', 'js'],
    description: '카드를 뒤집어서 뽀로로를 찾는 웹 게임',
    img: Pororo,
    content: ['js를 이용한 애니메이션을 추가'],
    github: 'https://github.com/2hanbyeol1/pororo',
    url: 'https://2hanbyeol1.github.io/pororo/html/game.html',
  },
  {
    name: 'TO DO LIST',
    skills: ['html', 'css', 'js'],
    description: '할 일 목록을 저장 가능한 투두리스트 웹 페이지',
    img: Todo,
    content: ['html css js 를 처음 접할 수 있었던 프로젝트!'],
    github: 'https://github.com/2hanbyeol1/todo',
    url: 'https://2hanbyeol1.github.io/todo/',
  },
]

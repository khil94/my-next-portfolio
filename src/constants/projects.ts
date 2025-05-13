export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  techStack?: string;
  features?: string[];
  links: {
    demo?: string;
    github?: string;
    website?: string;
  };
};

export const projects: Project[] = [
  {
    title: "포트폴리오 웹사이트",
    description:
      "Next.js와 Tailwind CSS를 사용하여 개발한 개인 포트폴리오 웹사이트입니다. 모던한 디자인과 반응형 레이아웃을 적용했습니다.",
    longDescription:
      "이 포트폴리오 사이트는 제 기술 스택과 프로젝트를 효과적으로 보여주기 위해 개발되었습니다. Next.js의 App Router 아키텍처를 활용하여 빠른 페이지 전환과 효율적인 코드 분할을 구현했습니다. 또한 Tailwind CSS를 사용하여 모던하고 반응형 UI를 제작했으며, 다크 모드를 기본으로 제공합니다.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    techStack: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion",
    features: [
      "반응형 디자인으로 모든 기기에서 최적화된 경험 제공",
      "Next.js App Router를 활용한 효율적인 페이지 관리",
      "Tailwind CSS로 구현한 모던한 UI 디자인",
      "프로젝트 상세 정보를 볼 수 있는 모달 시스템",
    ],
    links: {
      demo: "#",
      github: "https://github.com/username/portfolio",
      website: "#",
    },
  },
  {
    title: "쇼핑몰 웹 앱",
    description:
      "온라인 쇼핑몰 프로젝트입니다. 사용자 인증, 상품 검색, 장바구니 기능 등을 구현했습니다.",
    longDescription:
      "이 프로젝트는 현대적인 e커머스 플랫폼의 핵심 기능을 구현한 웹 애플리케이션입니다. React를 프론트엔드로, Node.js와 Express를 백엔드로 사용하여 개발했으며, MongoDB를 데이터베이스로 활용했습니다. 사용자는 계정을 만들고, 상품을 검색하고, 장바구니에 추가하며, 결제 과정을 진행할 수 있습니다.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    techStack: "React, Redux, Node.js, Express, MongoDB, JWT 인증, Stripe 결제",
    features: [
      "사용자 인증 및 계정 관리 시스템",
      "상품 카테고리별 필터링 및 검색 기능",
      "장바구니 및 위시리스트 관리",
      "안전한 결제 프로세스",
      "관리자 대시보드를 통한 상품 및 주문 관리",
    ],
    links: {
      demo: "#",
      github: "https://github.com/username/ecommerce",
    },
  },
  {
    title: "날씨 앱",
    description:
      "위치 기반 날씨 정보를 제공하는 모바일 앱입니다. OpenWeatherMap API를 활용했습니다.",
    longDescription:
      "이 날씨 앱은 React Native를 사용하여 개발된 크로스 플랫폼 모바일 애플리케이션입니다. 사용자의 현재 위치를 기반으로 실시간 날씨 정보와 5일 예보를 제공합니다. OpenWeatherMap API를 통해 정확한 날씨 데이터를 수집하며, 직관적인 UI로 정보를 시각화합니다.",
    image: "/projects/weather-app.jpg",
    tags: ["React Native", "JavaScript", "API Integration"],
    techStack:
      "React Native, JavaScript, Expo, OpenWeatherMap API, Geolocation",
    features: [
      "현재 위치 기반 실시간 날씨 정보",
      "5일 날씨 예보 제공",
      "다양한 날씨 지표(습도, 바람, 기압 등) 표시",
      "위치 검색 기능",
      "날씨에 따른 애니메이션 효과 제공",
    ],
    links: {
      github: "https://github.com/username/weather-app",
    },
  },
];

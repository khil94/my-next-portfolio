export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
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
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
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
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      demo: "#",
      github: "https://github.com/username/ecommerce",
    },
  },
  {
    title: "날씨 앱",
    description:
      "위치 기반 날씨 정보를 제공하는 모바일 앱입니다. OpenWeatherMap API를 활용했습니다.",
    image: "/projects/weather-app.jpg",
    tags: ["React Native", "JavaScript", "API Integration"],
    links: {
      github: "https://github.com/username/weather-app",
    },
  },
];

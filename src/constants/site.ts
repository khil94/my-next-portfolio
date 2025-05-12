export type SiteConfig = {
  title: string;
  description: string;
  author: string;
  keywords: string[];
  logoText: string;
  url: string;
  footer: {
    description: string;
    copyright: string;
  };
};

export const siteConfig: SiteConfig = {
  title: "개발자 포트폴리오 | 홍길동",
  description: "프론트엔드 개발자 홍길동의 포트폴리오 웹사이트입니다.",
  author: "홍길동",
  keywords: ["웹 개발자", "프론트엔드", "리액트", "넥스트JS", "포트폴리오"],
  url: "https://your-portfolio.com",
  logoText: "포트폴리오",
  footer: {
    description:
      "프론트엔드 개발에 열정을 가진 개발자의 작업물과 경험을 소개하는 포트폴리오 사이트입니다.",
    copyright: "포트폴리오. All rights reserved.",
  },
};

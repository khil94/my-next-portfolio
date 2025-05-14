export type HeroData = {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
};

export const heroData: HeroData = {
  name: "김효일",
  title: "프론트엔드 개발자",
  description:
    "프론트엔드 개발에 열정을 가진 개발자입니다. 사용자 경험을 개선하고 아름다운 웹 인터페이스를 구축하는 것을 좋아합니다.",
  profileImage: "/profile-placeholder.jpg",
  cta: {
    primary: {
      text: "연락하기",
      href: "#contact",
    },
    secondary: {
      text: "프로젝트 보기",
      href: "#projects",
    },
  },
};

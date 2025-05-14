export type CareerItem = {
  period: string;
  company: string;
  position: string;
  description: string;
  achievements: string[];
};

export const careerItems: CareerItem[] = [
  {
    period: "2021 - 2022",
    company: "인공지능연구원",
    position: "프론트엔드 엔지니어",
    description: "React를 기반으로 사내 FE 개발 및 유지보수를 담당하였습니다.",
    achievements: [
      "로보어드바이저 서비스 모니터링을 위한 어드민 페이지 개발",
      "사내 자산관리 시스템 FE 개발",
      "보험 추천 웹/앱 서비스 개발 및 유지보수",
    ],
  },
];

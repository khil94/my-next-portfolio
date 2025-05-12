export type CareerItem = {
  period: string;
  company: string;
  position: string;
  description: string;
  achievements: string[];
};

export const careerItems: CareerItem[] = [
  {
    period: "2022 - 현재",
    company: "ABC 테크놀로지",
    position: "시니어 프론트엔드 개발자",
    description:
      "기업용 대시보드 웹 애플리케이션 개발 및 유지보수를 담당했습니다.",
    achievements: [
      "React와 TypeScript를 사용하여 대시보드 재설계 및 성능 최적화",
      "팀 내 코드 리뷰 프로세스 개선으로 버그 30% 감소",
      "마이크로프론트엔드 아키텍처 도입으로 개발 생산성 향상",
    ],
  },
  {
    period: "2020 - 2022",
    company: "XYZ 솔루션즈",
    position: "프론트엔드 개발자",
    description: "e-커머스 웹사이트 개발 및 기능 추가를 담당했습니다.",
    achievements: [
      "Vue.js를 활용한 사용자 인터페이스 개발",
      "REST API 통합 및 상태 관리 구현",
      "모바일 반응형 웹 디자인 적용으로 모바일 트래픽 25% 증가",
    ],
  },
  {
    period: "2018 - 2020",
    company: "123 스타트업",
    position: "주니어 웹 개발자",
    description: "스타트업 환경에서 다양한 웹 프로젝트에 참여했습니다.",
    achievements: [
      "HTML, CSS, JavaScript를 활용한 웹사이트 프론트엔드 개발",
      "jQuery 및 Bootstrap을 사용한 UI 컴포넌트 구현",
      "웹 성능 최적화로 페이지 로딩 시간 50% 단축",
    ],
  },
];

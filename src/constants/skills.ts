export type Skill = {
  name: string;
  level: number; // 1-100
  icon?: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "프론트엔드",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "백엔드",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "SQL", level: 60 },
    ],
  },
  {
    title: "도구 & 기타",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 60 },
      { name: "Figma", level: 70 },
      { name: "AWS", level: 50 },
    ],
  },
];

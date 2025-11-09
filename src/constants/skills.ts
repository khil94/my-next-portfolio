export type Skill = {
  name: string;
  icon?: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Experienced",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "HTML/CSS" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Have Experienced",
    skills: [
      { name: "React Native" },
      { name: "AWS" },
      { name: "React-Query" },
      { name: "Styled-Components" },
      { name: "React-Redux" },
      { name: "Axios" },
      { name: "Zustand" },
    ],
  },
  {
    title: "Collaboration Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Jira" },
      { name: "Figma" },
      { name: "Notion" },
      { name: "Slack" },
    ],
  },
];

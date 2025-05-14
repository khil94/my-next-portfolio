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
    ],
  },
  {
    title: "Have Experienced",
    skills: [
      { name: "React Native" },
      { name: "AWS" },
      { name: "Sass" },
      { name: "Tailwind CSS" },
      { name: "React-Query" },
      { name: "Styled-Components" },
      { name: "React-Redux" },
      { name: "Axios" },
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

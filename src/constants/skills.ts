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
      { name: "Next.js" },
      { name: "HTML/CSS" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
    ],
  },
  {
    title: "Have Experienced",
    skills: [
      { name: "React Native" },
      { name: "Vue.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "SQL" },
      { name: "GraphQL" },
      { name: "AWS" },
      { name: "Docker" },
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

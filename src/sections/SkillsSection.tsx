import { skillCategories } from "@/constants/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">기술 스택</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="modern-card">
              <h3 className="text-2xl font-semibold mb-6 text-accent-primary">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-neutral-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-accent-primary to-accent-tertiary h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

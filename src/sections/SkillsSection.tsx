import { skillCategories } from "@/constants/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">기술 스택</span>
        </h2>

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent-primary border-b border-accent-primary/30 pb-2">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-2 bg-main-light-black rounded-lg border border-neutral-700 hover:border-accent-primary transition-colors"
                  >
                    <span className="text-neutral-200">{skill.name}</span>
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

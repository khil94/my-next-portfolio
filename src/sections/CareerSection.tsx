import { careerItems } from "@/constants/career";

const CareerSection = () => {
  return (
    <section id="career" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">커리어</span>
        </h2>

        <div className="relative border-l-2 border-accent-primary ml-6 md:ml-0 md:mx-auto md:max-w-3xl space-y-12">
          {careerItems.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent-primary"></div>

              {/* Period tag */}
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-accent-primary/10 text-accent-primary">
                {item.period}
              </div>

              {/* Company and position */}
              <h3 className="text-xl font-semibold">{item.company}</h3>
              <h4 className="text-lg text-accent-secondary mb-3">
                {item.position}
              </h4>

              {/* Description */}
              <p className="text-neutral-400 mb-4">{item.description}</p>

              {/* Achievements */}
              <div className="space-y-2">
                <h5 className="font-medium">주요 성과:</h5>
                <ul className="list-disc list-inside text-neutral-300 space-y-1">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;

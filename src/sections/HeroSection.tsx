import { heroData } from "@/constants/hero";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="py-20 flex flex-col md:flex-row items-center container mx-auto justify-center gap-10 mt-20 px-4"
    >
      <div className="w-full md:w-1/2 space-y-6 px-4">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          안녕하세요, <br />
          {heroData.title}{" "}
          <span className="text-accent-primary">{heroData.name}</span>입니다
        </h1>
        <p className="text-lg text-neutral-400">{heroData.description}</p>
        <div className="flex gap-4 pt-4">
          <a
            href={heroData.cta.primary.href}
            className="px-6 py-3 bg-accent-primary text-white rounded-full hover:bg-accent-secondary transition-all"
          >
            {heroData.cta.primary.text}
          </a>
          <a
            href={heroData.cta.secondary.href}
            className="px-6 py-3 border border-accent-primary text-accent-primary rounded-full hover:bg-accent-primary hover:text-white transition-all"
          >
            {heroData.cta.secondary.text}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { contactInfo } from "@/constants/contact";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-main-light-black">
      <div className="container mx-auto w-full px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">{contactInfo.sectionTitle}</span>
        </h2>

        <div className="space-y-6">
          <div className="space-y-4 flex flex-col md:flex-row justify-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-accent-primary/20 text-accent-primary">
                📧
              </div>
              <div>
                <p className="text-sm text-neutral-400">이메일</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-accent-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-accent-primary/20 text-accent-primary">
                📱
              </div>
              <div>
                <p className="text-sm text-neutral-400">전화번호</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-accent-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-accent-primary/20 text-accent-primary">
                📍
              </div>
              <div>
                <p className="text-sm text-neutral-400">위치</p>
                <p>{contactInfo.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-accent-primary/20 text-accent-primary">
                G
              </div>
              <div>
                <p className="text-sm text-neutral-400">Github</p>
                <p>{contactInfo.github}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

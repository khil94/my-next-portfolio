import { contactInfo, socialLinks } from "@/constants/contact";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-main-light-black">
      <div className="container mx-auto max-w-4xl px-4">
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
          </div>

          <div className="pt-6 flex flex-col items-center">
            <h4 className="text-lg font-medium mb-4">소셜 미디어</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-800 hover:bg-accent-primary transition-colors"
                >
                  {link.name[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

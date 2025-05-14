import { contactInfo } from "@/constants/contact";
import { navItems } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-main-black py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Short Description */}
          <div className="space-y-4">
            <Link href="/">
              <h3 className="text-2xl font-bold gradient-text">
                {siteConfig.logoText}
              </h3>
            </Link>
            <p className="text-neutral-400 max-w-xs">
              {siteConfig.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">바로가기</h4>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-accent-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-medium mb-4">연락처</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-neutral-400">
                <span>📧</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-accent-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-400">
                <span>📱</span>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-accent-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-400">
                <span>📍</span>
                <span>{contactInfo.location}</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-400">
                <span>G</span>
                <a
                  href={`${contactInfo.github}`}
                  className="hover:text-accent-primary transition-colors"
                >
                  {contactInfo.github}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} {siteConfig.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  location: string;
  sectionTitle: string;
};

export const contactInfo: ContactInfo = {
  email: "khilkhil@naver.com",
  phone: "+82-10-4156-7529",
  location: "서울특별시, 대한민국",
  sectionTitle: "Contact",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/username",
    icon: "github",
  },
  {
    name: "Blog",
    url: "https://blog.username.com",
    icon: "blog",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/username",
    icon: "twitter",
  },
];

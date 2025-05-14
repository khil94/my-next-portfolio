export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  techStack?: string;
  features?: string[];
  links: {
    github?: string;
    website?: string;
  };
};

export const projects: Project[] = [
  {
    title: "개인블로그",
    description:
      "Contentlayer를 사용하여 만든 개인적으로 개발관련 글을 정리하기 위해 만든 블로그입니다.",
    longDescription: `평소 개인적인 생각을 정리하거나 알게된 사실들을 정리할 때 Obisidian을 쓰면서 확장툴 중 git에 연동시켜 자동으로 커밋&푸시를 해주는 확장툴을 쓰고있었는데, 문득 이 툴을 이용하여 git에 푸쉬가 될때마다 자동으로 블로그에 글이 써지는 시스템을 구축하면 좋지 않을까? 하는 생각에 만들게 된 블로그입니다.
    
    Obisidan에서 사용하고 있던 마크다운 기법을 블로그에 그대로 적용시키기 위해 Contentlayer를 사용해서 내부에 자동으로 렌더링되게 제작하였고, 모바일 환경이나 다크모드의 구축을 위해서 처음부터 짠 프로젝트라는 의미가 있었습니다.
    
    다만, 실제로 블로그에 작성하기 위해서는 평소에 쓰는 것보다 훨씬 다듬어 써야 하기 때문에 당초 생각대로 운용하기 힘들었던 점과, Next에 styled-components를 적용시키는 과정에서 시행착오가 많아 아쉽기도 한 프로젝트였습니다.`,
    image: "/projects/blog/thumbnail.png",
    tags: [
      "Next",
      "Typescript",
      "Styled-components",
      "React",
      "Contentlayer",
      "React-redux",
    ],
    techStack: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion",
    features: [
      `개인적으로 개발관련 글을 정리하기 위해 만든 블로그`,
      `Next + Styled-components + contentlayer 기반으로 제작`,
      `다크모드 및 모바일 지원`,
      `모바일 환경에서 레이아웃이 깨지는 현상을 해결하기 위해 노력`,
    ],
    links: {
      github: "https://github.com/khil94/obsidian-blog/tree/master",
      website: "https://zidru-blog.vercel.app/",
    },
  },
  {
    title: "게임 전적 검색 사이트",
    description:
      "게임 전적 검색 사이트 프로젝트 입니다. 사용자 인증, 전적 검색, 듀오 찾기 기능 등을 구현했습니다.",
    longDescription: `게임 리그 오브 레전드의 전적 검색 사이트를 한 번 만들어보자 하는 생각에 시작한 프로젝트입니다. 아무래도 게임이 세계적으로 흥행하고 있는 게임이기도 하고, 관련 사이트들의 퀄리티가 굉장히 뛰어나 제공되는 api의 퀄리티가 좋을 것이라 생각해 시작한 프로젝트입니다.

  처음에는 단순히 한 달 정도의 기간을 생각하여 단순 전적검색과 관련된 기능만을 제공할 계획이었지만, 제작중 api의 사양이 예고없이 변하거나, 타 사이트들의 기능은 자체적으로 게임 데이터를 수집하여 만든 기능들이 다수 있다는 것을 알게 되어 추가적으로 듀오찾기 기능/사용자 관리 기능까지 추가된 케이스 입니다. 

  사용자 관리는 JWT로 하였으며 JWT를 통한 토큰관리의 중요성과 어려움을 실감하게 되기도 한 프로젝트였습니다. 특히 리프레시 토큰 관련된 로직을 짜며 시행착오를 겪은 부분이 생각나는 프로젝트였습니다.

  다만 Scss의 여러 기능들을 충분히 활용하지 못한것은 아쉬움으로 남기도 했습니다. 특히 mixin기능은 적극적으로 활용했으면 생산성을 크게 높일 수 있을 것이라 생각해 더욱 아쉬움이 남습니다.
`,
    image: "/projects/lolstat/record.png",
    tags: ["React", "Typescript", "SWR", "Axios", "Sass", "Vite"],
    techStack: "React, Redux, Node.js, Express, MongoDB, JWT 인증, Stripe 결제",
    features: [
      "게임 'League of Legends'의 간단한 전적 검색 사이트",
      "전적검색/상세전적/경기내용 등",
      "듀오찾기 기능",
      "JWT를 기반으로 사용자 관리",
    ],
    links: {
      github: "https://github.com/khil94/record-fe",
    },
  },
  {
    title: "보드게임 기록 관리 웹",
    description:
      "보드게임의 전적 및 통계를 관리해주는 웹입니다. Firebase를 사용했습니다.",
    longDescription: ` 친구들과 자주하는 마작의 결과를 기록하고 통계를 낼 서비스를 만들면 좋겠다는 생각이 들어 만들게 된 서비스입니다. 
    
 실시간으로 결과를 기록하고 통계를 확인할 필요가 있어 db를 직접 구축하여 배포하기보다 real-time firebase를 통해 구축하였습니다. 특히 간단한 수치만을 다루기 때문에 더 적합했습니다. Firebase를 통한 실시간 데이터 관리로 데이터 수정이 일어난 직후 바로 수정이 반영된 데이터를 사용할 수 있는 점이 큰 매력이었습니다. 

 또 TailwindCss를 처음사용하게 됐는데, CSS-in-JS방식에서 탈피할 수 있으면서 굉장히 간편한 사용방법에 크게 감탄했습니다. 특히 Next13으로 오며 React18의 Server component를 적극적으로 활용하게 되었는데, css-in-js방식은 이를 공식적으로 지원하지 않아 여러 꼼수를 썼어야 했었던 점을 tailwind를 이용하며 간편하게 해결할 수 있다는 점이 특히 큰 매력으로 다가왔습니다.

 또 이번 서비스도 모바일에서 활용할 일이 많아 모바일-데스크탑 순으로 작업을 하게 되었는데 많은 곳에서 말하는 모바일-데스크탑 순으로 작업을 하라는 말의 의미를 진정으로 알게된 프로젝트이기도 했습니다. 확실히 이전에 급하게 모바일 대응을 하려고 했을떄보다 훨씬 간편하게 데스크탑 대응이 가능했습니다.
    
    `,
    image: "/projects/mahjong/main.png",
    tags: [
      "Next",
      "Typescript",
      "Tailwind CSS",
      "React",
      "Firebase",
      "Axios",
      "ApexChart",
    ],
    techStack:
      "React Native, JavaScript, Expo, OpenWeatherMap API, Geolocation",
    features: [
      "Fireabse를 기반으로 한 실시간 데이터 관리 지원",
      "데이터를 기반으로한 다양한 통계 및 차트 제공",
      "모바일 및 다크모드 지원",
      "Next + vercel을 이용한 간단한 배포",
      "tailwind CSS를 이용한 반응형 대응",
    ],
    links: {
      website: "https://mahjong-record.vercel.app/",
      github: "https://github.com/khil94/mahjong-record/tree/master",
    },
  },
  {
    title: "포트폴리오",
    description: "나를 소개하기 위한 간단한 포트폴리오 사이트입니다.",
    longDescription: `보고계시는 본 포트폴리오 사이트입니다. 최근 주로 사용중인 기술들을 적용해 처음부터 만들고자 하였습니다.

    여러 섹션을 조립하는 것으로 만드는 간단한 형식으로 제작하였습니다. Tailwind CSS를 사용하여 반응형 대응을 하고있습니다.

    최근 회사 사이트의 외주를 받은 것에 영감을 받아 회사 소개 사이트 처럼 자신의 포트폴리오를 만들어 보는 것은 어떤가 하는 생각에 디자인하였습니다.
    `,
    image: "/projects/portfolio/main.png",
    tags: ["Next", "Typescript", "Tailwind CSS", "React"],
    techStack:
      "React Native, JavaScript, Expo, OpenWeatherMap API, Geolocation",
    features: [
      "모바일 및 다크모드 지원",
      "Next + vercel을 이용한 간단한 배포",
      "tailwind CSS를 이용한 반응형 대응",
    ],
    links: {},
  },
  {
    title: "유튜브 영상 요약",
    description:
      "유튜브의 영상을 요약해서 알려주고, 검색한 영상의 관련영상을 추천해주는 웹 사이트입니다. 바이브 코딩을 통해서 제작했습니다.",
    longDescription: `최근 핫한 cursor를 통해 바이브 코딩으로 만든 서비스입니다. cursor의 도움을 듬뿍받아 단기간에 서비스를 만드는 것이 가능할까 하는 호기심에 시작한 프로젝트 입니다.
    
    실제로 대부분의 기능과 디자인의 완성은 3~4시간여만에 끝났습니다만, 배포를 하기에 앞서 유튜브의 자막을 긁어오는 js 라이브러리인 youtube-transcript 가 배포환경에서는 차단되는 문제가 있어 배포에 이르지는 못하였습니다. 
    
    cursor의 기능을 충분히 활용했지만, 사용자가 직접 지적해줘야 하는 문제가 계속 발생하는 부분이나, 같은 문제를 빙글빙글 도는 문제가 발생하는 등 사용자가 실제 사용되는 기술에 대한 이해가 없으면 활용이 어려워 보였습니다.
    
    또 다른 문제로는 너무 cursor ai에 의존하면 코드의 흐름을 따라가기 힘들 수 있다는 점도 느껴졌습니다. 결국 도중에 코드를 직접 파악하는 과정을 거치지 않을 수 없었습니다.
    
    그러나 단기간 사용한 것 만드으로도 압도적인 개발 효율성의 향상을 체감할 수 있었습니다. 따라서 개발자가 실 환경에서 사용할 경우에는 직접 개발을 하던 도중 막히는 부분에 대해서 cursor를 쓰면 엄청난 효과를 보일 것으로 기대되는 기술이었다고 생각합니다.    
    
    사용기술은 Next + Ts + Tailwind 기반에 유튜브의 자막을 라이브러리를 이용하여 가져오고, 이를 ai를 통해서 요약, 타임라인, 키워드를 받아온 뒤 해당 키워드를 기반으로 관련 영상을 추천했습니다.
    `,
    image: "/projects/youtube-summary/detail.png",
    tags: ["Next", "Typescript", "Tailwind", "React", "Cursor"],
    techStack:
      "React Native, JavaScript, Expo, OpenWeatherMap API, Geolocation",
    features: [
      `유튜브 영상 내용을 요약하는 서비스`,
      `요약한 내용을 기반으로 영상을 추천하는 기능`,
      `cursor 를 통한 바이브 코딩의 시험작`,
      `라이브러리 문제로 배포는 하지 않음`,
    ],
    links: {},
  },
];

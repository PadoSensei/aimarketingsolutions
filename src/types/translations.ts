export type Investment = {
  tag: string;
  title: string;
  description: string;
  duration: string;
  cta: string;
  points: {
    [key: string]: {
      title: string;
      desc: string;
    };
  };
};

export type Translations = {
  brand: {
    name: string;
  };
  nav: {
    home: string;
    seeHowWeDoIt: string;
    about: string;
    services: string;
    aiCoaching: string;
    blog: string;
    privacy: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  coachingData: {
    investment: Investment;
  };

  // ⚠️ Add the rest gradually as needed
};

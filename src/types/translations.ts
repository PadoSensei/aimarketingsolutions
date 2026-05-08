export type Point = {
  title: string;
  desc: string;
};

export type CoachingWeek = {
  week: string;
  title: string;
  tag: string;
  description: string;
  points: Point[];
};

export type Investment = {
  week: string;
  title: string;
  tag: string;
  description: string;
  points: Point[];
};

export type Translations = {
  common: {
    brandName: string;
  };
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
  hero: {
    eyebrow: string;
    title: string;
    titleConnector: string;
    titleAccent: string;
    subtitle: string;
    growing: string;
    insteadOfGrinding: string;
    ctaCoaching: string;
    ctaContact: string;
    footerTitle: string;
  };
  servicesStump: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaCoaching: string;
  };
  aiCoachingHero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    framework: string;
    frameworkBold: string;
    transformation: string;
    ctaButton: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ludmila: {
      name: string;
      role: string;
      bio: string;
    };
    padraig: {
      name: string;
      role: string;
      bio: string;
    };
    philosophy: {
      title: string;
      content: string;
    };
    linkedinConnect: string;
    signUpCoaching: string;
    whoWeWorkWithTitle: string;
    whoWeWorkWithIntro: string;
    whoWeWorkWithItems: string[];
  };
  contact: {
    title: string;
    titleAccent: string;
    subtitle: string;
    success: {
      title: string;
      message: string;
    };
    labels: {
      email: string;
      subject: string;
      message: string;
    };
    placeholders: {
      email: string;
      subject: string;
      message: string;
    };
    submit: string;
    sending: string;
  };
  services: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    processEyebrow: string;
    howItWorks: string;
    howItWorksAccent: string;
    readyTitle: string;
    readySubtitle: string;
    startCta: string;
    signUp: string;
    process: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
  servicesData: {
    [slug: string]: {
      title: string;
      description: string;
    };
  };
  aiCoaching: {
    roadmapEyebrow: string;
    roadmapTitle: string;
    roadmapTitleAccent: string;
    roadmapSubtitle: string;
    bookingEyebrow: string;
    bookingTitle: string;
    bookingSubtitle: string;
    calendarTitle: string;
  };
  coachingData: {
    "week-1": CoachingWeek;
    "week-2": CoachingWeek;
    "week-3": CoachingWeek;
    "week-4": CoachingWeek;
    investment: Investment;
  };

  footer: {
    brandDescription: string;
    linkedinAria: string;
    company: string;
    support: string;
    readyToAutomate: string;
    bookCall: string;
    contactCta: string;
    allRightsReserved: string;
    madeWithLove: string;
  };
};

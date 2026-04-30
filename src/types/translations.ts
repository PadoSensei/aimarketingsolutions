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
    roleFounder: string;
    roleDeveloper: string;
    linkedinConnect: string;
    signUpCoaching: string;
    ludmilaBio1: string;
    ludmilaBio2: string;
    padraigBio1: string;
    padraigBio2: string;
    philosophyTitle: string;
    philosophyP1: string;
    philosophyP2: string;
    whoWeWorkWithTitle: string;
    whoWeWorkWithIntro: string;
    whoWeWorkWith: string[];
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
};

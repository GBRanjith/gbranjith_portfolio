export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

export interface Project {
  icon: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  url: string;
}

export interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
  date: string;
}

export interface ExperienceItem {
  icon: string;
  role: string;
  period: string;
  company: string;
  highlights: string[];
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  action?: "copy" | "call" | "link";
  href?: string;
}

export interface AppStoreStat {
  icon: string;
  count: number;
  label: string;
}

export interface AppBadge {
  icon: string;
  text: string;
}

export interface PersonalDetail {
  label: string;
  value: string;
}

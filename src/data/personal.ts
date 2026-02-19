import { PersonalDetail } from "@/types";

export const profile = {
  name: "Boopathy Ranjith",
  firstName: "Boopathy",
  lastName: "Ranjith",
  title: "Mobile App Developer",
  shortTitle: "Mobile App Developer (Flutter)",
  role: "Flutter Developer",
  location: "Chennai, India",
  address: "Chennai, India",
  email: "boopathyranjith0@gmail.com",
  phone: "+91 83447 34427",
  image: "https://res.cloudinary.com/dmjqemtqd/image/upload/v1748255391/profile_image_zyrpkx.jpg",
  resumeUrl: "/Boopathy-Ranjith-Resume.pdf",
  heroDescription:
    "Flutter Developer with 3+ years of experience building scalable Android and iOS applications. Strong in Flutter, Firebase, REST APIs, BLoC, and UPI integration. Experienced in delivering production-grade apps with clean architecture and performance optimization.",
  aboutParagraphs: [
    'I\'m a <highlight>Flutter Developer</highlight> with 3+ years of experience building scalable Android and iOS applications. Currently leading the global Flutter migration of Shell\'s Pipeline Manager project — a large-scale enterprise CRM app under development and rollout across multiple regions.',
    'My journey spans from enterprise CRM systems to e-commerce platforms, service management apps, and vehicle marketplace solutions. I excel at building complete applications from concept to deployment, working both as a full-time developer and freelancer.',
    'I specialize in <highlight>cross-platform development</highlight> with Flutter, Firebase, REST APIs, BLoC architecture, UPI integration, and delivering production-grade apps with clean architecture and performance optimization.',
  ],
};

export const social = {
  github: "https://github.com/GBRanjith",
  linkedin: "https://www.linkedin.com/in/gbranjith",
  portfolio: "https://portfolio-ac7f4.web.app",
};

export const personalDetails: PersonalDetail[] = [
  { label: "Date of Birth", value: "21st September, 1998" },
  { label: "Nationality", value: "Indian" },
  { label: "Languages", value: "English, Tamil" },
  { label: "Location", value: "Chennai, India" },
  { label: "Availability", value: "Open to Remote & On-site" },
];

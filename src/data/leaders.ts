export interface Leader {
  id: string;
  name: string;
  role: string;
  department: string;
  quote?: string;
  initials: string;
}

export const executiveBoard: Leader[] = [
  {
    id: "president",
    name: "Sera Sepion",
    role: "Club President",
    department: "Executive Bureau",
    quote: "Leading with grace, fostering empathy, and creating enduring opportunities for youth to serve.",
    initials: "SS"
  },
  {
    id: "vp1",
    name: "Vinuga Ranulge",
    role: "1st Vice President",
    department: "Administration & Operations",
    quote: "Harmonizing operational excellence with high-impact community outreach.",
    initials: "VR"
  },
  {
    id: "vp2",
    name: "Abidth Sharif",
    role: "2nd Vice President",
    department: "Service Projects & Outreach",
    quote: "Every community initiative begins with compassion and flourishes through dedication.",
    initials: "AS"
  },
  {
    id: "secretary",
    name: "Krishanthani Kumar",
    role: "Honorary Secretary",
    department: "Secretariat & Records",
    quote: "Precision, transparency, and timely communication guide our club's legacy.",
    initials: "KK"
  },
  {
    id: "ast-secretary",
    name: "Zakif Zuhri",
    role: "Assistant Secretary",
    department: "Secretariat Support",
    quote: "Ensuring administrative harmony, documentation excellence, and seamless reporting.",
    initials: "ZZ"
  },
  {
    id: "treasurer",
    name: "Safa Riyall",
    role: "Honorary Treasurer",
    department: "Finance & Stewardship",
    quote: "Stewarding our club resources with unwavering integrity and financial responsibility.",
    initials: "SR"
  },
  {
    id: "ast-treasurer",
    name: "Dinuli Rodrigo",
    role: "Assistant Treasurer",
    department: "Finance & Accounts",
    quote: "Maintaining accountability and assisting with financial administration.",
    initials: "DR"
  },
  {
    id: "advisor",
    name: "Lion Anthony Sepion",
    role: "Leo Club Advisor",
    department: "Lions Clubs International",
    quote: "Guiding the next generation of compassionate leaders to make their mark on the world.",
    initials: "AS"
  }
];

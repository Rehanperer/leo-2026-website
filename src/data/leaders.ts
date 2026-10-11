export interface Leader {
  id: string;
  name: string;
  role: string;
  department: string;
  quote?: string;
  initials: string;
}

// NOTE: Placeholder leadership board - swap easily when official 2026 executive portraits & roster are confirmed
export const executiveBoard: Leader[] = [
  {
    id: "president",
    name: "Leo President",
    role: "Club President",
    department: "Executive Bureau",
    quote: "Leading with grace, fostering empathy, and creating enduring opportunities for youth to serve.",
    initials: "LP"
  },
  {
    id: "vp1",
    name: "Leo 1st Vice President",
    role: "1st Vice President",
    department: "Administration & Operations",
    quote: "Turning shared visions into purposeful actions that uplift our community.",
    initials: "1VP"
  },
  {
    id: "vp2",
    name: "Leo 2nd Vice President",
    role: "2nd Vice President",
    department: "Service Projects & Outreach",
    quote: "Every community initiative begins with compassion and flourishes through dedication.",
    initials: "2VP"
  },
  {
    id: "secretary",
    name: "Leo Secretary",
    role: "Honorary Secretary",
    department: "Secretariat & Records",
    quote: "Precision, transparency, and timely communication guide our club's legacy.",
    initials: "LS"
  },
  {
    id: "treasurer",
    name: "Leo Treasurer",
    role: "Honorary Treasurer",
    department: "Finance & Stewardship",
    quote: "Stewarding our club resources with unwavering integrity and financial responsibility.",
    initials: "LT"
  },
  {
    id: "advisor",
    name: "Lion Advisor",
    role: "Leo Club Advisor",
    department: "Lions Clubs International",
    quote: "Guiding the next generation of compassionate leaders to make their mark on the world.",
    initials: "LA"
  }
];

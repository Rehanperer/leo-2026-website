export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  category: 'executive' | 'director' | 'advisor';
  image?: string;
  initials: string;
  quote: string;
  isPlaceholder?: boolean;
}

export const lionAdvisor: TeamMember = {
  id: "advisor-anthony-sepion",
  name: "Lion Anthony Sepion",
  role: "Leo Club Advisor",
  department: "Lions Club of Colombo West",
  category: "advisor",
  image: "/team/anthony_sepion.avif",
  initials: "AS",
  quote: "Mentoring passionate youth to lead with purpose, uphold the highest standards of integrity, and transform compassion into lasting community impact.",
  isPlaceholder: false
};

export const executiveOfficers: TeamMember[] = [
  {
    id: "exec-president",
    name: "Sera Sepion",
    role: "Club President",
    department: "Executive Bureau",
    category: "executive",
    initials: "SS",
    quote: "Leading with grace, fostering empathy, and creating enduring opportunities for youth to serve.",
    isPlaceholder: false
  },
  {
    id: "exec-vp1",
    name: "Vinuga Ranulge",
    role: "1st Vice President",
    department: "Administration & Strategy",
    category: "executive",
    initials: "VR",
    quote: "Harmonizing operational excellence with high-impact community outreach.",
    isPlaceholder: false
  },
  {
    id: "exec-vp2",
    name: "Abidth Sharif",
    role: "2nd Vice President",
    department: "Service Initiatives & Outreach",
    category: "executive",
    initials: "AS",
    quote: "Designing sustainable service projects that touch lives and spark hope.",
    isPlaceholder: false
  },
  {
    id: "exec-secretary",
    name: "Krishanthani Kumar",
    role: "Honorary Secretary",
    department: "Secretariat & Records",
    category: "executive",
    initials: "KK",
    quote: "Guiding club governance with meticulous record-keeping, transparency, and timely communication.",
    isPlaceholder: false
  },
  {
    id: "exec-ast-secretary",
    name: "Zakif Zuhri",
    role: "Assistant Secretary",
    department: "Secretariat Support",
    category: "executive",
    initials: "ZZ",
    quote: "Ensuring administrative harmony, documentation excellence, and seamless reporting.",
    isPlaceholder: false
  },
  {
    id: "exec-treasurer",
    name: "Safa Riyall",
    role: "Honorary Treasurer",
    department: "Finance & Stewardship",
    category: "executive",
    initials: "SR",
    quote: "Stewarding club resources with unwavering integrity, transparency, and fiscal rigor.",
    isPlaceholder: false
  },
  {
    id: "exec-ast-treasurer",
    name: "Dinuli Rodrigo",
    role: "Assistant Treasurer",
    department: "Finance & Accounts",
    category: "executive",
    initials: "DR",
    quote: "Upholding fiscal responsibility and accountability in every community investment.",
    isPlaceholder: false
  },
  lionAdvisor
];

export const boardDirectors: TeamMember[] = [
  {
    id: "dir-environment",
    name: "Desandi Hettiarachi",
    role: "Director of Environment",
    department: "Sustainability & Green Action",
    category: "director",
    initials: "DH",
    quote: "Championing reforestation, conservation drives, and eco-friendly community stewardship.",
    isPlaceholder: false
  },
  {
    id: "dir-media",
    name: "Lindsay Muya",
    role: "Director of Media",
    department: "Creative Studio & Brand Communications",
    category: "director",
    initials: "LM",
    quote: "Crafting cinematic narratives that broadcast the heartbeat of Leo service to the world.",
    isPlaceholder: false
  },
  {
    id: "dir-children-elders",
    name: "Dinara Weerasinghe",
    role: "Director of Children & Elders",
    department: "Humanitarian Welfare",
    category: "director",
    initials: "DW",
    quote: "Bringing warmth, dignity, and active care to our society's most cherished generations.",
    isPlaceholder: false
  },
  {
    id: "dir-sports",
    name: "Treasure Boco",
    role: "Director of Sports",
    department: "Youth Fitness & Fellowship",
    category: "director",
    initials: "TB",
    quote: "Fostering camaraderie, vitality, and healthy sportsmanship through dynamic events.",
    isPlaceholder: false
  },
  {
    id: "dir-learning",
    name: "Kenoli Fernando",
    role: "Director of Learning & Management",
    department: "Workshops & Skill Building",
    category: "director",
    initials: "KF",
    quote: "Empowering our members with modern vocational proficiencies and managerial insight.",
    isPlaceholder: false
  },
  {
    id: "dir-health",
    name: "Abhithi Amilthan",
    role: "Director of Health",
    department: "Community Healthcare",
    category: "director",
    initials: "AA",
    quote: "Organizing healthcare camps, wellness awareness, and preventative health outreach.",
    isPlaceholder: false
  },
  {
    id: "dir-technology",
    name: "Sachitha Rajapakshe",
    role: "Director of Technology",
    department: "Digital Innovation",
    category: "director",
    initials: "SR",
    quote: "Powering modern digital platforms and innovative tools to scale our humanitarian reach.",
    isPlaceholder: false
  },
  {
    id: "dir-animal-welfare",
    name: "Sanaya Liyanage",
    role: "Director of Animal Welfare",
    department: "Humane Care & Veterinary Aid",
    category: "director",
    initials: "SL",
    quote: "Advocating for shelter animals, vaccination drives, and compassionate treatment of strays.",
    isPlaceholder: false
  }
];

export const allTeamMembers: TeamMember[] = [
  ...executiveOfficers,
  ...boardDirectors
];

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
    name: "Leo President",
    role: "Club President",
    department: "Executive Bureau",
    category: "executive",
    initials: "LP",
    quote: "Leading with grace, igniting purposeful action, and empowering our members to serve fearlessly across our community.",
    isPlaceholder: true
  },
  {
    id: "exec-vp1",
    name: "Leo 1st Vice President",
    role: "1st Vice President",
    department: "Administration & Strategy",
    category: "executive",
    initials: "1VP",
    quote: "Harmonizing operational excellence with high-impact community outreach.",
    isPlaceholder: true
  },
  {
    id: "exec-vp2",
    name: "Leo 2nd Vice President",
    role: "2nd Vice President",
    department: "Service Initiatives & Outreach",
    category: "executive",
    initials: "2VP",
    quote: "Designing sustainable service projects that touch lives and spark hope.",
    isPlaceholder: true
  },
  {
    id: "exec-vp3",
    name: "Leo 3rd Vice President",
    role: "3rd Vice President",
    department: "Youth Leadership Development",
    category: "executive",
    initials: "3VP",
    quote: "Nurturing emerging talent and creating collaborative avenues for growth.",
    isPlaceholder: true
  },
  {
    id: "exec-secretary",
    name: "Leo Secretary",
    role: "Honorary Secretary",
    department: "Secretariat & Records",
    category: "executive",
    initials: "SEC",
    quote: "Guiding club governance with meticulous record-keeping and clear communication.",
    isPlaceholder: true
  },
  {
    id: "exec-ast-secretary-1",
    name: "Leo Assistant Secretary",
    role: "Assistant Secretary",
    department: "Secretariat Support",
    category: "executive",
    initials: "AS",
    quote: "Ensuring timely reporting, documentation, and administrative harmony.",
    isPlaceholder: true
  },
  {
    id: "exec-treasurer",
    name: "Leo Treasurer",
    role: "Honorary Treasurer",
    department: "Finance & Stewardship",
    category: "executive",
    initials: "TRS",
    quote: "Stewarding resources with transparency, responsibility, and fiscal rigor.",
    isPlaceholder: true
  },
  {
    id: "exec-ast-treasurer",
    name: "Leo Assistant Treasurer",
    role: "Assistant Treasurer",
    department: "Finance & Accounts",
    category: "executive",
    initials: "AT",
    quote: "Maintaining accountability and assisting with financial administration.",
    isPlaceholder: true
  },
  lionAdvisor
];

export const boardDirectors: TeamMember[] = [
  {
    id: "dir-environment",
    name: "Leo Director of Environment",
    role: "Director of Environment",
    department: "Sustainability & Green Action",
    category: "director",
    initials: "ENV",
    quote: "Championing reforestation, conservation drives, and eco-friendly community stewardship.",
    isPlaceholder: true
  },
  {
    id: "dir-media",
    name: "Leo Director of Media",
    role: "Director of Media & PR",
    department: "Creative Studio & Brand Communications",
    category: "director",
    initials: "MED",
    quote: "Crafting cinematic narratives that broadcast the heartbeat of Leo service to the world.",
    isPlaceholder: true
  },
  {
    id: "dir-children-elders",
    name: "Leo Director of Children & Elders",
    role: "Director of Children & Elders",
    department: "Humanitarian Welfare",
    category: "director",
    initials: "WEL",
    quote: "Bringing warmth, dignity, and active care to our society's most cherished generations.",
    isPlaceholder: true
  },
  {
    id: "dir-sports",
    name: "Leo Director of Sports",
    role: "Director of Sports & Recreation",
    department: "Youth Fitness & Fellowship",
    category: "director",
    initials: "SPT",
    quote: "Fostering camaraderie, vitality, and healthy sportsmanship through dynamic events.",
    isPlaceholder: true
  },
  {
    id: "dir-learning",
    name: "Leo Director of Learning",
    role: "Director of Learning & Management",
    department: "Workshops & Skill Building",
    category: "director",
    initials: "LRN",
    quote: "Empowering our members with modern vocational proficiencies and managerial insight.",
    isPlaceholder: true
  },
  {
    id: "dir-health",
    name: "Leo Director of Health",
    role: "Director of Health & Wellbeing",
    department: "Community Healthcare",
    category: "director",
    initials: "HLT",
    quote: "Organizing medical camps, wellness awareness, and preventative health outreach.",
    isPlaceholder: true
  },
  {
    id: "dir-animal-welfare",
    name: "Leo Director of Animal Welfare",
    role: "Director of Animal Welfare",
    department: "Humane Care & Veterinary Aid",
    category: "director",
    initials: "ANI",
    quote: "Advocating for shelter animals, vaccination drives, and compassionate treatment of strays.",
    isPlaceholder: true
  },
  {
    id: "dir-technology",
    name: "Leo Director of Technology",
    role: "Director of Technology & Systems",
    department: "Digital Innovation",
    category: "director",
    initials: "TEC",
    quote: "Powering modern digital platforms and innovative tools to scale our humanitarian reach.",
    isPlaceholder: true
  }
];

export const allTeamMembers: TeamMember[] = [
  ...executiveOfficers,
  ...boardDirectors
];

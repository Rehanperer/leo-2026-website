export interface Award {
  id: string;
  year: '2024/2025' | '2023/2024' | '2022/2023';
  category: 'club' | 'individual' | 'project' | 'appreciation';
  categoryLabel: string;
  title: string;
  recipient?: string;
  role?: string;
  description: string;
  icon: string;
  tier: 'crown' | 'gold' | 'laurel';
  badge?: string;
}

export const awardsArchive: Award[] = [
  // --- 2024/2025 Term ---
  {
    id: "2024-club-outstanding",
    year: "2024/2025",
    category: "club",
    categoryLabel: "Club Honor",
    title: "Most Outstanding School Leo Club",
    recipient: "Leo Club of Ethos International",
    description: "Awarded by Leo District 306 D2 in recognition of extraordinary institutional governance, impactful humanitarian service, and peer leadership.",
    icon: "🏆",
    tier: "crown",
    badge: "District Pinnacle Honor"
  },
  {
    id: "2024-club-membership",
    year: "2024/2025",
    category: "club",
    categoryLabel: "Club Honor",
    title: "Highest Net Membership Growth Award",
    recipient: "Leo Club of Ethos International",
    description: "Commending unmatched youth recruitment, member onboarding standards, and vibrant chapter expansion across the district.",
    icon: "🌟",
    tier: "gold"
  },
  {
    id: "2024-proj-steps-of-hope",
    year: "2024/2025",
    category: "project",
    categoryLabel: "Project Award",
    title: "Steps of Hope",
    recipient: "Most Outstanding Public Relations & Inter-District Project",
    description: "Pioneered cross-district collaboration and unified community outreach, setting benchmarks in service visibility and public engagement.",
    icon: "🤝",
    tier: "crown",
    badge: "Flagship PR Honor"
  },
  {
    id: "2024-proj-happy-tails",
    year: "2024/2025",
    category: "project",
    categoryLabel: "Project Award",
    title: "Happy Tails",
    recipient: "Most Outstanding Project Done with Outside Organization",
    description: "Animal welfare and shelter support campaign executed in partnership with registered civil organizations to care for abandoned animals.",
    icon: "🐾",
    tier: "gold"
  },
  {
    id: "2024-proj-echos-freedom",
    year: "2024/2025",
    category: "project",
    categoryLabel: "Project Award",
    title: "Echos of Freedom",
    recipient: "Most Outstanding Drug Prevention Project",
    description: "Multi-layered youth awareness seminars and behavioral empowerment initiatives combating substance abuse across local colleges.",
    icon: "🕊️",
    tier: "gold"
  },
  {
    id: "2024-ind-sanduni-top10",
    year: "2024/2025",
    category: "individual",
    categoryLabel: "Individual Honor",
    title: "Top 10 Leos of District 306 D2",
    recipient: "Leo Member (Placeholder)",
    role: "Immediate Past President",
    description: "Celebrated among the 10 most influential, devoted, and high-performing Leos across the entire multiple district jurisdiction.",
    icon: "🎖️",
    tier: "crown",
    badge: "District Top 10"
  },
  {
    id: "2024-ind-rehan-pres",
    year: "2024/2025",
    category: "individual",
    categoryLabel: "Individual Honor",
    title: "Outstanding School Club President",
    recipient: "Leo President (Placeholder)",
    role: "Club President (2024/25)",
    description: "Honored for visionary executive governance, innovative humanitarian programs, and inspiring leadership throughout the term.",
    icon: "👑",
    tier: "gold"
  },
  {
    id: "2024-ind-siron-vp",
    year: "2024/2025",
    category: "individual",
    categoryLabel: "Individual Honor",
    title: "Outstanding School Club Vice President",
    recipient: "Leo Vice President (Placeholder)",
    role: "Vice President",
    description: "Recognized for operational steadfastness, cabinet synergy, and flawless execution of club initiatives.",
    icon: "⭐",
    tier: "laurel"
  },
  {
    id: "2024-ind-tharindi-sec",
    year: "2024/2025",
    category: "individual",
    categoryLabel: "Individual Honor",
    title: "Outstanding School Club Secretary",
    recipient: "Leo Secretary (Placeholder)",
    role: "Club Secretary",
    description: "Celebrated for exemplary reporting accuracy, documentation rigor, and on-time compliance with District Secretariat.",
    icon: "📜",
    tier: "laurel"
  },
  {
    id: "2024-ind-skyler-treas",
    year: "2024/2025",
    category: "individual",
    categoryLabel: "Individual Honor",
    title: "Outstanding School Club Treasurer",
    recipient: "Leo Treasurer (Placeholder)",
    role: "Club Treasurer",
    description: "Acknowledged for spotless financial stewardship, transparent budget reporting, and diligent fundraising management.",
    icon: "💼",
    tier: "laurel"
  },
  {
    id: "2024-ind-ethan-emerging",
    year: "2024/2025",
    category: "individual",
    categoryLabel: "Individual Honor",
    title: "Most Outstanding Emerging Leader",
    recipient: "Leo Director (Placeholder)",
    role: "Director of Youth Initiatives",
    description: "Honoring outstanding initiative, proactive leadership, and promising commitment to the Leo movement.",
    icon: "✨",
    tier: "gold"
  },
  {
    id: "2024-app-lion-anthony",
    year: "2024/2025",
    category: "appreciation",
    categoryLabel: "DP Appreciation",
    title: "District President’s Appreciation Award",
    recipient: "Lion Anthony Sepion",
    role: "Leo Club Advisor (Lions Club of Colombo West)",
    description: "Special commendation for enduring mentorship, guidance, and fatherly support of youth empowerment.",
    icon: "🦁",
    tier: "crown",
    badge: "Patron Honor"
  },
  {
    id: "2024-app-rehan",
    year: "2024/2025",
    category: "appreciation",
    categoryLabel: "DP Appreciation",
    title: "District President’s Appreciation Award",
    recipient: "Leo President (Placeholder)",
    role: "Club President",
    description: "Commended by District President 306 D2 for dedicated partnership, service leadership, and district fellowship.",
    icon: "🏅",
    tier: "laurel"
  },
  {
    id: "2024-app-sanduni",
    year: "2024/2025",
    category: "appreciation",
    categoryLabel: "DP Appreciation",
    title: "District President’s Appreciation Award",
    recipient: "Leo Past President (Placeholder)",
    role: "Past President",
    description: "Recognized for continuous dedication, advice, and steadfast commitment to District projects.",
    icon: "🏅",
    tier: "laurel"
  },
  {
    id: "2024-app-siron",
    year: "2024/2025",
    category: "appreciation",
    categoryLabel: "DP Appreciation",
    title: "District President’s Appreciation Award",
    recipient: "Leo Vice President (Placeholder)",
    role: "Vice President",
    description: "Acknowledged for stellar assistance and logistical coordination during District events.",
    icon: "🏅",
    tier: "laurel"
  },
  {
    id: "2024-app-sandev",
    year: "2024/2025",
    category: "appreciation",
    categoryLabel: "DP Appreciation",
    title: "District President’s Appreciation Award",
    recipient: "Leo Executive (Placeholder)",
    role: "Executive Officer",
    description: "Commended for enthusiastic service, district rally participation, and vibrant teamwork.",
    icon: "🏅",
    tier: "laurel"
  },
  {
    id: "2024-app-ethan",
    year: "2024/2025",
    category: "appreciation",
    categoryLabel: "DP Appreciation",
    title: "District President’s Appreciation Award",
    recipient: "Leo Director (Placeholder)",
    role: "Youth Director",
    description: "Awarded by the District President for dynamic contributions and energetic service execution.",
    icon: "🏅",
    tier: "laurel"
  },

  // --- 2023/2024 Term ---
  {
    id: "2023-club-outstanding",
    year: "2023/2024",
    category: "club",
    categoryLabel: "Club Honor",
    title: "Most Outstanding School Leo Club",
    recipient: "Leo Club of Ethos International",
    description: "Bestowed upon the club for exemplary district engagement, groundbreaking youth community projects, and high-impact member development.",
    icon: "🏆",
    tier: "crown",
    badge: "Back-to-Back Victor"
  },
  {
    id: "2023-ind-sanduni-best-pres",
    year: "2023/2024",
    category: "individual",
    categoryLabel: "Individual Honor",
    title: "Best School Club President of District 306 D2",
    recipient: "Leo President (Placeholder)",
    role: "Club President (2023/24)",
    description: "Awarded to the premier school club president across all chapters in District 306 D2 for benchmark leadership and strategic vision.",
    icon: "👑",
    tier: "crown",
    badge: "District Best President"
  },
  {
    id: "2023-ind-sanduni-top10-pres",
    year: "2023/2024",
    category: "individual",
    categoryLabel: "Individual Honor",
    title: "Top 10 Presidents of District 306 D2",
    recipient: "Leo President (Placeholder)",
    role: "Club President (2023/24)",
    description: "Inducted into the elite roster of Top 10 Club Presidents spanning both Alpha and Omega clubs across the district.",
    icon: "🎖️",
    tier: "gold"
  },

  // --- 2022/2023 Charter Term ---
  {
    id: "2022-club-outstanding",
    year: "2022/2023",
    category: "club",
    categoryLabel: "Club Honor",
    title: "Most Outstanding School Leo Club",
    recipient: "Leo Club of Ethos International",
    description: "Historic charter victory recognizing the Leo Club of EIC as the paramount school Leo club in District 306 D2 during its inaugural year.",
    icon: "🏆",
    tier: "crown",
    badge: "Charter Year Triumph"
  },
  {
    id: "2022-club-new",
    year: "2022/2023",
    category: "club",
    categoryLabel: "Club Honor",
    title: "Most Outstanding New Leo Club",
    recipient: "Leo Club of Ethos International",
    description: "Honoring the fastest-rising, highest-achieving new charter club in District 306 D2 under the guidance of Lions Club of Colombo West.",
    icon: "🌱",
    tier: "gold",
    badge: "Inaugural Distinction"
  },
  {
    id: "2022-ind-charter-best-pres",
    year: "2022/2023",
    category: "individual",
    categoryLabel: "Individual Honor",
    title: "Best School Club President of District 306 D2",
    recipient: "Leo Charter President (Placeholder)",
    role: "Charter President (2022/23)",
    description: "Awarded to Founding Charter President for establishing a historic foundation of service, discipline, and fellowship.",
    icon: "👑",
    tier: "crown",
    badge: "Charter Best President"
  }
];

export const awardsStats = {
  totalHonors: awardsArchive.length,
  districtTrophies: awardsArchive.filter(a => a.tier === 'crown').length,
  termsCelebrated: 3
};

export interface HistoricalLeader {
  name: string;
  role: string;
  badge?: string;
}

export interface HistoricalYear {
  year: string;
  theme?: string;
  presidentialMotto?: string;
  president: string;
  isCharter?: boolean;
  leaders: HistoricalLeader[];
  highlights?: string[];
}

export const formerCabinets: HistoricalYear[] = [
  {
    year: "2025 – 2026",
    theme: "The Future Awaits",
    president: "Leo President (Placeholder)",
    leaders: [
      { name: "Leo President (Placeholder)", role: "Club President", badge: "Immediate Past President" },
      { name: "Leo 1st Vice President (Placeholder)", role: "1st Vice President" },
      { name: "Leo 2nd Vice President (Placeholder)", role: "2nd Vice President" },
      { name: "Leo 3rd Vice President (Placeholder)", role: "3rd Vice President" },
      { name: "Leo Secretary (Placeholder)", role: "Secretary" },
      { name: "Leo Treasurer (Placeholder)", role: "Treasurer" }
    ],
    highlights: [
      "Hosted the District 306 D2 Leo Orientation Summit",
      "Expanded community service portfolio to over 20+ completed initiatives",
      "Strengthened international youth fellowships and skill building workshops"
    ]
  },
  {
    year: "2024 – 2025",
    theme: "Expanding Horizons",
    president: "Leo President (Placeholder)",
    leaders: [
      { name: "Leo President (Placeholder)", role: "Club President", badge: "Past President" },
      { name: "Leo Vice President (Placeholder)", role: "Vice President" },
      { name: "Leo Secretary (Placeholder)", role: "Secretary" },
      { name: "Leo Treasurer (Placeholder)", role: "Treasurer" }
    ],
    highlights: [
      "Spearheaded flagship culinary charity project",
      "Over 110+ collective volunteer hours dedicated to local welfare drives",
      "Pioneered modern web and technology infrastructure for the club"
    ]
  },
  {
    year: "2023 – 2024",
    theme: "Growing Stronger",
    presidentialMotto: "Serve. Inspire. Grow",
    president: "Leo President (Placeholder)",
    leaders: [
      { name: "Leo President (Placeholder)", role: "Club President", badge: "Past President" },
      { name: "Leo Vice President (Placeholder)", role: "Vice President" },
      { name: "Leo Secretary (Placeholder)", role: "Secretary" },
      { name: "Leo Treasurer (Placeholder)", role: "Treasurer" }
    ],
    highlights: [
      "Rapid expansion in active youth membership across schools and universities",
      "Launched environmental conservation and tree planting drives",
      "Established recurring eldercare visits and youth leadership circles"
    ]
  },
  {
    year: "2022 – 2023",
    theme: "The Beginning",
    presidentialMotto: "Prevail through unity, Serve with passion",
    president: "Leo Charter President (Placeholder)",
    isCharter: true,
    leaders: [
      { name: "Leo Charter President (Placeholder)", role: "Charter President", badge: "Charter President" },
      { name: "Leo Vice President (Placeholder)", role: "Vice President" },
      { name: "Leo Secretary (Placeholder)", role: "Secretary" },
      { name: "Leo Treasurer (Placeholder)", role: "Treasurer" }
    ],
    highlights: [
      "Officially chartered under the Lions Club of Colombo West (District 306 D2)",
      "Established foundational club bylaws, traditions, and ceremonial crest",
      "Inaugural community empowerment and children's welfare projects"
    ]
  }
];

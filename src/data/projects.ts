export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  tag: string;
}

// NOTE: Signature projects - easily customizable in src/data/projects.ts
export const signatureProjects: Project[] = [
  {
    id: "bloom-initiative",
    title: "Project Blooming Hope",
    category: "Community Welfare & Health",
    date: "January 2026",
    summary: "A holistic medical camp and nutrition package distribution providing vital health screenings, medicines, and wholesome provisions to vulnerable elders and families.",
    impactMetrics: [
      { label: "Beneficiaries", value: "320+" },
      { label: "Volunteers", value: "24" },
      { label: "Hours", value: "48" }
    ],
    tag: "Flagship"
  },
  {
    id: "green-horizon",
    title: "EcoGrace Canopy Initiative",
    category: "Environmental Stewardship",
    date: "December 2025",
    summary: "An urban biodiversity tree planting drive and native flora revitalization across Colombo schools, instilling green practices and botanical conservation.",
    impactMetrics: [
      { label: "Saplings Planted", value: "150" },
      { label: "Youth Engaged", value: "85" },
      { label: "CO2 Offset", value: "Est. 3T" }
    ],
    tag: "Environment"
  },
  {
    id: "scholars-light",
    title: "Project Vidura (Beacon of Knowledge)",
    category: "Educational Empowerment",
    date: "November 2025",
    summary: "Renovation of rural classroom facilities, donation of essential school stationery, textbooks, and interactive STEM mentorship sessions for Grade 5 scholarship candidates.",
    impactMetrics: [
      { label: "Students Aided", value: "180" },
      { label: "Books Donated", value: "450" },
      { label: "Schools", value: "2" }
    ],
    tag: "Education"
  },
  {
    id: "youth-summit",
    title: "Grace & Integrity Leadership Academy",
    category: "Youth Empowerment",
    date: "October 2025",
    summary: "An immersive youth conference bringing together aspiring student leaders for keynote masterclasses in ethical communication, project governance, and social innovation.",
    impactMetrics: [
      { label: "Delegates", value: "95" },
      { label: "Guest Speakers", value: "6" },
      { label: "Workshops", value: "4" }
    ],
    tag: "Leadership"
  }
];

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
  storySlug: string;
}

export const signatureProjects: Project[] = [
  {
    id: "placeholder-project",
    title: "Placeholder Project Heading",
    category: "Upcoming Humanitarian Initiative",
    date: "2026 – 2027 Term",
    summary: "Placeholder text: Comprehensive project roadmap, beneficiary outreach metrics, and community partner allocations will be unveiled upon official 2026/2027 cabinet investiture.",
    impactMetrics: [
      { label: "Target Lives", value: "0" },
      { label: "Volunteers", value: "0" },
      { label: "Hours", value: "0" }
    ],
    tag: "Upcoming",
    storySlug: "story"
  }
];

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

export const impactStats: StatItem[] = [
  {
    id: "beneficiaries",
    value: 1850,
    suffix: "+",
    label: "Lives Enriched",
    detail: "Individuals directly supported through health clinics, meal drives, and educational donations."
  },
  {
    id: "projects",
    value: 28,
    suffix: "+",
    label: "Signature Initiatives",
    detail: "High-impact service and leadership projects successfully executed across Sri Lanka."
  },
  {
    id: "hours",
    value: 450,
    suffix: "+",
    label: "Volunteer Hours",
    detail: "Selfless hours invested by passionate youth leaders devoted to ethical community service."
  },
  {
    id: "members",
    value: 42,
    suffix: "",
    label: "Active Youth Leaders",
    detail: "Committed members united under our guiding charter of grace, integrity, and fellowship."
  }
];

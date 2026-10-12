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
    value: 0,
    suffix: "",
    label: "Lives Enriched",
    detail: "Incoming 2026/2027 humanitarian initiatives commencing upon official executive installation."
  },
  {
    id: "projects",
    value: 0,
    suffix: "",
    label: "Signature Initiatives",
    detail: "High-impact civic service, health camps, and ecological projects scheduled for the new term."
  },
  {
    id: "hours",
    value: 0,
    suffix: "",
    label: "Volunteer Hours",
    detail: "Selfless service hours invested by youth members embarking on our new administrative journey."
  },
  {
    id: "members",
    value: 0,
    suffix: "",
    label: "Active Youth Leaders",
    detail: "Incoming executive committee and general membership roll undergoing charter induction."
  }
];

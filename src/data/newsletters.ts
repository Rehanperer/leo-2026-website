export interface NewsletterIssue {
  id: string;
  year: string;              // "2026-2027", "2025-2026", "2024-2025", "2023-2024", "2022-2023"
  title: string;             // "Origins Issue 1"
  subtitle: string;          // "Official Edition"
  date: string;              // "Term 2025/2026"
  tag: string;               // "Origins Series" / "Legacy Series"
  badgeText?: string;        // "OUT NOW", "SPECIAL ARCHIVE"
  coverTheme: {
    gradient: string;        // CSS gradient string
    accentColor: string;     // Hex color
    glowColor: string;       // RGBA color
  };
  description: string;
  editorialPanel: string;
  embedUrl: string;          // AnyFlip URL
  slug: string;
  featured?: boolean;
}

export interface YearFilter {
  id: string;
  label: string;
  sublabel: string;
  badge?: string;
  isDefault?: boolean;
}

export const ACADEMIC_YEARS: YearFilter[] = [
  {
    id: "2026-2027",
    label: "2026 – 2027",
    sublabel: "Current Term",
    badge: "Upcoming",
    isDefault: true
  },
  {
    id: "2025-2026",
    label: "2025 – 2026",
    sublabel: "Origins Series",
    badge: "Origins"
  },
  {
    id: "2024-2025",
    label: "2024 – 2025",
    sublabel: "Legacy Series",
    badge: "Legacy"
  },
  {
    id: "2023-2024",
    label: "2023 – 2024",
    sublabel: "Growth & Impact",
    badge: "Archived"
  },
  {
    id: "2022-2023",
    label: "2022 – 2023",
    sublabel: "Charter Installation",
    badge: "Charter"
  }
];

export const NEWSLETTERS: NewsletterIssue[] = [
  // ==========================================
  // 2025-2026: ORIGINS SERIES (5 ISSUES)
  // ==========================================
  {
    id: "origins-issue-1",
    year: "2025-2026",
    title: "Origins Issue 1",
    subtitle: "Inaugural Edition • 2025/26",
    date: "July 2025",
    tag: "Origins Series",
    badgeText: "ISSUE 01",
    coverTheme: {
      gradient: "linear-gradient(135deg, #1A0D2E 0%, #2E1B4E 50%, #7A57B8 100%)",
      accentColor: "#E5CCA0",
      glowColor: "rgba(122, 87, 184, 0.45)"
    },
    description: "The premiere release of the Origins series, capturing our executive installations, charter renewals, and early humanitarian milestones.",
    editorialPanel: "Leo Club of EIC Editorial Directorate",
    embedUrl: "https://online.anyflip.com/mpvfm/dwwa/index.html",
    slug: "origins-issue-1",
    featured: true
  },
  {
    id: "origins-issue-2",
    year: "2025-2026",
    title: "Origins Issue 2",
    subtitle: "Second Edition • 2025/26",
    date: "September 2025",
    tag: "Origins Series",
    badgeText: "ISSUE 02",
    coverTheme: {
      gradient: "linear-gradient(135deg, #0D1B2A 0%, #1B263B 50%, #415A77 100%)",
      accentColor: "#D4AF37",
      glowColor: "rgba(65, 90, 119, 0.45)"
    },
    description: "Chronicles community health camps, coastal conservation drives, and youth fellowship gatherings.",
    editorialPanel: "Leo Club of EIC Editorial Directorate",
    embedUrl: "https://online.anyflip.com/mpvfm/sqpy/index.html",
    slug: "origins-issue-2"
  },
  {
    id: "origins-issue-3",
    year: "2025-2026",
    title: "Origins Issue 3",
    subtitle: "Third Edition • 2025/26",
    date: "November 2025",
    tag: "Origins Series",
    badgeText: "ISSUE 03",
    coverTheme: {
      gradient: "linear-gradient(135deg, #1F1128 0%, #351C47 50%, #683063 100%)",
      accentColor: "#F3E8D6",
      glowColor: "rgba(104, 48, 99, 0.4)"
    },
    description: "Spotlighting regional school book drives, animal shelter visits, and inter-district leadership roundtables.",
    editorialPanel: "Leo Club of EIC Editorial Directorate",
    embedUrl: "https://online.anyflip.com/mpvfm/eamj/index.html",
    slug: "origins-issue-3"
  },
  {
    id: "origins-issue-4",
    year: "2025-2026",
    title: "Origins Issue 4",
    subtitle: "Fourth Edition • 2025/26",
    date: "January 2026",
    tag: "Origins Series",
    badgeText: "ISSUE 04",
    coverTheme: {
      gradient: "linear-gradient(135deg, #141E30 0%, #243B55 50%, #4B6CB7 100%)",
      accentColor: "#C29B4D",
      glowColor: "rgba(75, 108, 183, 0.45)"
    },
    description: "Winter care distributions, vocational skill workshops, and inspiring member spotlights.",
    editorialPanel: "Leo Club of EIC Editorial Directorate",
    embedUrl: "https://online.anyflip.com/mpvfm/qwnx/index.html",
    slug: "origins-issue-4"
  },
  {
    id: "origins-issue-5",
    year: "2025-2026",
    title: "Origins Issue 5",
    subtitle: "Fifth Edition • 2025/26",
    date: "March 2026",
    tag: "Origins Series",
    badgeText: "ISSUE 05",
    coverTheme: {
      gradient: "linear-gradient(135deg, #1C0A35 0%, #3E165B 50%, #8E2DE2 100%)",
      accentColor: "#FFD700",
      glowColor: "rgba(142, 45, 226, 0.45)"
    },
    description: "Centennial year commemorations, annual gala highlights, and concluding reflections of the 2025/26 cabinet.",
    editorialPanel: "Leo Club of EIC Editorial Directorate",
    embedUrl: "https://online.anyflip.com/mpvfm/xnru/index.html",
    slug: "origins-issue-5"
  },

  // ==========================================
  // 2024-2025: LEGACY SERIES (5 ISSUES)
  // ==========================================
  {
    id: "legacy-issue-1",
    year: "2024-2025",
    title: "Legacy Issue 1",
    subtitle: "The Gazette Inaugural • 2024/25",
    date: "August 2024",
    tag: "Legacy Series",
    badgeText: "ISSUE 01",
    coverTheme: {
      gradient: "linear-gradient(135deg, #1E120A 0%, #3D2214 50%, #8B5A2B 100%)",
      accentColor: "#EED9B3",
      glowColor: "rgba(139, 90, 43, 0.45)"
    },
    description: "Kicking off the 2024/25 administration, celebrating charter expansion, community projects, and youth initiatives.",
    editorialPanel: "Leo Club of EIC Editorial Directorate",
    embedUrl: "https://online.anyflip.com/mpvfm/cgir/index.html",
    slug: "legacy-issue-1"
  },
  {
    id: "legacy-issue-2",
    year: "2024-2025",
    title: "Legacy Issue 2",
    subtitle: "Second Edition • 2024/25",
    date: "October 2024",
    tag: "Legacy Series",
    badgeText: "ISSUE 02",
    coverTheme: {
      gradient: "linear-gradient(135deg, #121A17 0%, #1E332B 50%, #2D5A46 100%)",
      accentColor: "#C9E4CA",
      glowColor: "rgba(45, 90, 70, 0.45)"
    },
    description: "Documenting environmental reforestation drives, tree planting campaigns, and eco-pledge activities.",
    editorialPanel: "Leo Club of EIC Editorial Directorate",
    embedUrl: "https://online.anyflip.com/mpvfm/iarr/index.html",
    slug: "legacy-issue-2"
  },
  {
    id: "legacy-issue-3",
    year: "2024-2025",
    title: "Legacy Issue 3",
    subtitle: "Third Edition • 2024/25",
    date: "December 2024",
    tag: "Legacy Series",
    badgeText: "ISSUE 03",
    coverTheme: {
      gradient: "linear-gradient(135deg, #2A1015 0%, #4A1A24 50%, #87253B 100%)",
      accentColor: "#FFC2D1",
      glowColor: "rgba(135, 37, 59, 0.45)"
    },
    description: "Holiday charity parcels, community kitchen distributions, and children's home painting workshops.",
    editorialPanel: "Leo Club of EIC Editorial Directorate",
    embedUrl: "https://online.anyflip.com/mpvfm/qgzz/index.html",
    slug: "legacy-issue-3"
  },
  {
    id: "legacy-issue-4",
    year: "2024-2025",
    title: "Legacy Issue 4",
    subtitle: "Fourth Edition • 2024/25",
    date: "February 2025",
    tag: "Legacy Series",
    badgeText: "ISSUE 04",
    coverTheme: {
      gradient: "linear-gradient(135deg, #1C1924 0%, #2C283E 50%, #4D466D 100%)",
      accentColor: "#DFD8F7",
      glowColor: "rgba(77, 70, 109, 0.45)"
    },
    description: "Youth debate forums, digital skills training for underprivileged youth, and sports vitality day.",
    editorialPanel: "Leo Club of EIC Editorial Directorate",
    embedUrl: "https://online.anyflip.com/mpvfm/jtuh/index.html",
    slug: "legacy-issue-4"
  },
  {
    id: "legacy-issue-5",
    year: "2024-2025",
    title: "Legacy Issue 5",
    subtitle: "Fifth Edition • 2024/25",
    date: "May 2025",
    tag: "Legacy Series",
    badgeText: "ISSUE 05",
    coverTheme: {
      gradient: "linear-gradient(135deg, #1F1706 0%, #3B2E0E 50%, #7A5F1C 100%)",
      accentColor: "#FFE082",
      glowColor: "rgba(122, 95, 28, 0.45)"
    },
    description: "Grand annual awards wrap-up, district convention honors, and transition ceremony to the new administrative year.",
    editorialPanel: "Leo Club of EIC Editorial Directorate",
    embedUrl: "https://online.anyflip.com/mpvfm/jnpd/index.html",
    slug: "legacy-issue-5"
  }
];

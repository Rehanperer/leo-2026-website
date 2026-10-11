export interface Pillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export const pillars: Pillar[] = [
  {
    id: "leadership",
    title: "Leadership Development",
    tagline: "Empowering tomorrow's visionaries",
    description: "Equipping young minds with strategic thinking, emotional intelligence, and ethical governance through hands-on directorship and mentorship.",
    icon: "compass",
    highlight: true
  },
  {
    id: "community",
    title: "Compassionate Service",
    tagline: "Heartfelt community outreach",
    description: "Designing impactful humanitarian initiatives addressing hunger alleviation, health wellness, and direct assistance for underserved families.",
    icon: "heart"
  },
  {
    id: "environmental",
    title: "Ecological Stewardship",
    tagline: "Nurturing our living earth",
    description: "Pioneering botanical conservation, urban reforestation, and sustainable ocean cleanups in alignment with our club's sacred environmental pledge.",
    icon: "globe",
    highlight: true
  },
  {
    id: "education",
    title: "Educational Empowerment",
    tagline: "Illuminating potential",
    description: "Supplying underprivileged schools with libraries, digital literacy workshops, stationery, and dedicated academic tutoring.",
    icon: "book"
  },
  {
    id: "arts",
    title: "Culture & Creative Expression",
    tagline: "Inspiring through artistry",
    description: "Celebrating youth expression through design, cultural fellowship, stage productions, and creative arts workshops across our community.",
    icon: "sparkles"
  },
  {
    id: "innovation",
    title: "Youth Innovation",
    tagline: "Modern solutions to modern challenges",
    description: "Leveraging technology, sustainable social enterprise models, and digital collaboration to scale humanitarian solutions globally.",
    icon: "cpu"
  }
];

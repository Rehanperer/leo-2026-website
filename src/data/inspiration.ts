export interface InspirationMilestone {
  period: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  highlight: string;
}

export interface ValueCard {
  numeral: string;
  title: string;
  lead: string;
  description: string;
  symbolism: string;
  icon: string;
  glowColor: string;
}

export interface HeraldicSymbol {
  glyph: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

export const inspirationData = {
  creed: "To serve selflessly, to lead fearlessly, to burn brightly in every act of kindness we do.",
  motto: "Leading with Grace, Serving with Integrity",
  torchQuote: "Just as torches never dim when they share their flame, we grow brighter by uplifting others.",
  foundingTribute: "Our club was chartered under the esteemed sponsorship of the Lions Club of Colombo West and the visionary stewardship of our inaugural Charter President. Founded with the conviction that young leaders possess the creative courage to transform society, our charter established an enduring sanctuary of fellowship, empathy, and servant leadership. Today, this living flame burns brighter than ever in every initiative we champion.",
  
  heraldry: [
    {
      glyph: "🌍",
      title: "The Living Globe",
      subtitle: "Universal Fellowship",
      description: "Serving the global community. Our humanitarian commitment transcends geographical borders, dedicating our volunteer spirit to uplift communities worldwide.",
      color: "#3E84C2"
    },
    {
      glyph: "🌸",
      title: "Bud to Blooming Iris",
      subtitle: "The Journey of Growth",
      description: "The transition from an unbloomed bud into a magnificent blossoming iris symbolises continuous personal growth, youth empowerment, and evolving potential.",
      color: "#7A57B8"
    },
    {
      glyph: "💜",
      title: "The Royal Purple",
      subtitle: "Dignity & Leadership",
      description: "The signature purple hue represents dignity, noble purpose, and ethical servant leadership guided by quiet grace and steadfast integrity.",
      color: "#54398A"
    },
    {
      glyph: "🌿",
      title: "The Living Leaves",
      subtitle: "Nurturing & Stewardship",
      description: "Cradling the globe with botanical grace, the leaves signify nurturing care, ecological sustainability, and profound civic responsibility.",
      color: "#2E7D32"
    }
  ] as HeraldicSymbol[],

  milestones: [
    {
      period: "2022 / 2023",
      title: "The Genesis of Grace",
      description: "Chartered under the Lions Club of Colombo West. Our inaugural leaders laid down the charter foundation of integrity, compassion, and camaraderie that continues to anchor our journey.",
      image: "/history/history-22-23.png",
      tag: "Charter Era",
      highlight: "Club Charter & Constitutional Foundation"
    },
    {
      period: "2023 / 2024",
      title: "Roots Deepen, Branches Ascend",
      description: "Building upon the charter cornerstone, this year marked exponential expansion, welcoming enthusiastic young volunteers and pioneering new health, educational, and environmental projects.",
      image: "/history/history-23-24.jpg",
      tag: "Expansion",
      highlight: "District Accolades & First Flagship Outreach"
    },
    {
      period: "2024 / 2025",
      title: "Horizons of Empathy",
      description: "With established traditions and a strong community presence, our club focused on impactful, large-scale projects like 'Service with Spice', blending creative youth culture with heartfelt charity.",
      image: "/history/history-24-25.png",
      tag: "Impact Scale",
      highlight: "Major Community & Humanitarian Milestones"
    },
    {
      period: "2025 / 2026",
      title: "The Enduring Torch",
      description: "Carrying forward our founding legacy with renewed vigor, innovative digital outreach, and an unshakeable commitment to ensuring every member has the platform to lead, serve, and inspire.",
      image: "/history/history-25-26.png",
      tag: "Excellence",
      highlight: "District Top Honors & Digital Innovation"
    }
  ] as InspirationMilestone[],

  values: [
    {
      numeral: "I",
      title: "Leadership",
      lead: "The Fire Within",
      description: "Leadership is neither a title nor a hierarchy—it is the moral courage to illuminate the path for others. We mentor youth to lead with quiet dignity, active listening, and fierce dedication to the common good.",
      symbolism: "Crowned with purpose, anchored in humility.",
      icon: "crown",
      glowColor: "rgba(194, 155, 77, 0.45)"
    },
    {
      numeral: "II",
      title: "Service",
      lead: "The Living Compassion",
      description: "To serve selflessly is our highest honor. Not for acclaim or outward applause, but to ignite hope where it has faded, providing tangible, measurable relief to vulnerable communities.",
      symbolism: "Hands that build, hearts that heal.",
      icon: "sparkles",
      glowColor: "rgba(122, 87, 184, 0.45)"
    },
    {
      numeral: "III",
      title: "Fellowship",
      lead: "The Sacred Geometry",
      description: "Echoing the concentric harmony of our iris and earth crest, we believe transformative change only flourishes in authentic fellowship, where diverse talents unite in singular purpose.",
      symbolism: "United as petals of a single blossom.",
      icon: "users",
      glowColor: "rgba(62, 132, 194, 0.45)"
    }
  ] as ValueCard[]
};

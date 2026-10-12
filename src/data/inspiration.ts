export interface InspirationMilestone {
  period: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface ValueCard {
  title: string;
  lead: string;
  description: string;
  icon: string;
  glowColor: string;
}

export const inspirationData = {
  creed: "To serve selflessly, to lead fearlessly, to burn brightly in every act of kindness we do.",
  torchQuote: "Just as torches never dim when they share their flame, we grow brighter by uplifting others.",
  foundingTribute: "The founders, under the guidance of inaugural President Rachel Desilva and chartered under the esteemed Lions Club of Colombo West, set out to create a sanctuary where youth could grow through service and leave an indelible mark on our community. Their enduring vision remains a living beacon for every Leo walking through our doors.",
  
  milestones: [
    {
      period: "2022 / 2023",
      title: "The Beginning",
      description: "Founded in 2022 with a bold vision of empowering youth driven by proactive service. Our inaugural leaders laid down the charter foundation of integrity, compassion, and camaraderie that continues to anchor our journey.",
      image: "/history/history-22-23.png",
      tag: "Founding Era"
    },
    {
      period: "2023 / 2024",
      title: "Growing Stronger",
      description: "Building upon the charter cornerstone, this year marked exponential expansion, welcoming enthusiastic young volunteers and pioneering new health, educational, and environmental projects.",
      image: "/history/history-23-24.jpg",
      tag: "Expansion"
    },
    {
      period: "2024 / 2025",
      title: "Expanding Horizons",
      description: "With established traditions and a strong community presence, we focused on impactful, large-scale projects like 'Service with Spice', blending creative youth culture with heartfelt charity.",
      image: "/history/history-24-25.png",
      tag: "Impact Scale"
    },
    {
      period: "2025 / 2026",
      title: "The Future Awaits",
      description: "Carrying forward our founding legacy with renewed vigor, innovative digital outreach, and a commitment to ensuring every single member has the platform to lead, serve, and inspire lasting social change.",
      image: "/history/history-25-26.png",
      tag: "Enduring Vision"
    }
  ] as InspirationMilestone[],

  values: [
    {
      title: "Leadership",
      lead: "The fire within us",
      description: "To inspire, guide, and illuminate the path for others. We believe in empowering every youth member to take initiative, shoulder responsibility, and lead with empathy.",
      icon: "crown",
      glowColor: "rgba(194, 155, 77, 0.4)"
    },
    {
      title: "Service",
      lead: "The light we carry",
      description: "Igniting hope and unconditional compassion across our community. We serve selflessly not for applause, but to make a tangible, lasting difference in the lives of those we reach.",
      icon: "sparkles",
      glowColor: "rgba(122, 87, 184, 0.4)"
    },
    {
      title: "Community",
      lead: "Connecting hearts & minds",
      description: "Echoing the sacred geometry of our iris emblem, we champion unity in diversity—fostering lifelong fellowships and working hand-in-hand toward shared humanitarian ideals.",
      icon: "users",
      glowColor: "rgba(62, 132, 194, 0.4)"
    }
  ] as ValueCard[]
};

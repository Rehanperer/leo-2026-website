export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  caption?: string;
  category: 'fellowship' | 'service' | 'projects' | 'leadership';
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/gallery/gallery-image-1.jpg",
    title: "Annual Installation Ceremony",
    caption: "Charter investiture & ceremonial oath of office for the incoming cabinet.",
    category: "leadership",
    alt: "Leo Club of EIC — Annual Installation Ceremony"
  },
  {
    id: 2,
    image: "/gallery/gallery-image-2.jpg",
    title: "Community Health Camp",
    caption: "Providing free diagnostics, vital checks, and medical wellness consultations.",
    category: "service",
    alt: "Leo Club of EIC — Community Health Camp"
  },
  {
    id: 3,
    image: "/gallery/gallery-image-3.jpg",
    title: "Beach Cleanup & Eco Drive",
    caption: "Coastal conservation drive removing plastic debris along the shoreline.",
    category: "projects",
    alt: "Leo Club of EIC — Beach Cleanup & Eco Drive"
  },
  {
    id: 4,
    image: "/gallery/gallery-image-4.jpg",
    title: "Youth Leadership Summit",
    caption: "Civic governance, ethical stewardship, and public speaking masterclasses.",
    category: "leadership",
    alt: "Leo Club of EIC — Youth Leadership Summit"
  },
  {
    id: 5,
    image: "/gallery/gallery-image-5.jpg",
    title: "Elderly Care Home Visit",
    caption: "Bringing warmth, acoustic melodies, and companionship to senior residents.",
    category: "service",
    alt: "Leo Club of EIC — Elderly Care Home Visit"
  },
  {
    id: 6,
    image: "/gallery/gallery-image-6.jpg",
    title: "Book Donation & Literacy Drive",
    caption: "Donating thousands of curated storybooks and stationery to rural school libraries.",
    category: "projects",
    alt: "Leo Club of EIC — Book Donation & Literacy Drive"
  },
  {
    id: 7,
    image: "/gallery/gallery-image-7.jpg",
    title: "Food Relief & Spice Kitchen",
    caption: "Preparing and delivering warm, nutritious dry food parcels to families in need.",
    category: "service",
    alt: "Leo Club of EIC — Food Relief & Spice Kitchen"
  },
  {
    id: 8,
    image: "/gallery/gallery-image-8.jpg",
    title: "Leo Orientation Gathering",
    caption: "Welcoming energetic new prospects into our Lions and Leos family.",
    category: "fellowship",
    alt: "Leo Club of EIC — Leo Orientation Gathering"
  },
  {
    id: 9,
    image: "/gallery/gallery-image-9.jpg",
    title: "Inter-District Fellowship Night",
    caption: "An evening of cross-club collaboration, shared visions, and youth bonding.",
    category: "fellowship",
    alt: "Leo Club of EIC — Inter-District Fellowship Night"
  },
  {
    id: 10,
    image: "/gallery/gallery-image-10.jpg",
    title: "Tree Planting Conservation",
    caption: "Restoring biodiversity by planting native saplings across urban school grounds.",
    category: "projects",
    alt: "Leo Club of EIC — Tree Planting Conservation"
  },
  {
    id: 11,
    image: "/gallery/gallery-image-11.jpg",
    title: "Fundraising Gala Dinner",
    caption: "An elegant charity banquet mobilizing community donors for sustainable outreach.",
    category: "leadership",
    alt: "Leo Club of EIC — Fundraising Gala Dinner"
  },
  {
    id: 12,
    image: "/gallery/gallery-image-12.jpg",
    title: "Skills Development Workshop",
    caption: "Hands-on vocational coaching and digital career readiness for youth.",
    category: "projects",
    alt: "Leo Club of EIC — Skills Development Workshop"
  },
  {
    id: 13,
    image: "/gallery/gallery-image-13.jpg",
    title: "Children's Home Art Fest",
    caption: "Spreading boundless joy with watercolor paints, murals, and craft games.",
    category: "service",
    alt: "Leo Club of EIC — Children's Home Art Fest"
  },
  {
    id: 14,
    image: "/gallery/gallery-image-14.jpg",
    title: "Animal Shelter Welfare Drive",
    caption: "Providing nutritious food supplies, care medication, and shelter rehabilitation.",
    category: "service",
    alt: "Leo Club of EIC — Animal Shelter Welfare Drive"
  },
  {
    id: 15,
    image: "/gallery/gallery-image-15.jpg",
    title: "Sports Meet & Vitality Day",
    caption: "Fostering athletic stamina, healthy living, and teamwork across districts.",
    category: "fellowship",
    alt: "Leo Club of EIC — Sports Meet & Vitality Day"
  },
  {
    id: 16,
    image: "/gallery/gallery-image-16.jpg",
    title: "Digital Literacy Training",
    caption: "Guiding students through computer basics, coding logic, and cyber wellness.",
    category: "projects",
    alt: "Leo Club of EIC — Digital Literacy Training"
  },
  {
    id: 17,
    image: "/gallery/gallery-image-17.jpg",
    title: "Charter Anniversary Banquet",
    caption: "Commemorating our founding charter milestone and honoring our mentors.",
    category: "fellowship",
    alt: "Leo Club of EIC — Charter Anniversary Banquet"
  },
  {
    id: 18,
    image: "/gallery/gallery-image-18.jpg",
    title: "Poverty Relief Distribution",
    caption: "Emergency ration packets and care hampers delivered to vulnerable homes.",
    category: "service",
    alt: "Leo Club of EIC — Poverty Relief Distribution"
  },
  {
    id: 19,
    image: "/gallery/gallery-image-19.jpg",
    title: "Youth Forum Debate",
    caption: "Stimulating dialogue on sustainability, youth leadership, and ethical service.",
    category: "leadership",
    alt: "Leo Club of EIC — Youth Forum Debate"
  },
  {
    id: 20,
    image: "/gallery/gallery-image-20.jpg",
    title: "Medical Supplies Handover",
    caption: "Delivering surgical supplies, wheelchairs, and test kits to rural clinics.",
    category: "service",
    alt: "Leo Club of EIC — Medical Supplies Handover"
  },
  {
    id: 21,
    image: "/gallery/gallery-image-21.jpg",
    title: "Community Park Renovation",
    caption: "Painting recreation benches, clearing walkways, and planting flowerbeds.",
    category: "projects",
    alt: "Leo Club of EIC — Community Park Renovation"
  },
  {
    id: 22,
    image: "/gallery/gallery-image-22.jpg",
    title: "Winter Care Pack Handover",
    caption: "Distributing warm blankets and cold-weather clothing during chilly spells.",
    category: "service",
    alt: "Leo Club of EIC — Winter Care Pack Handover"
  },
  {
    id: 23,
    image: "/gallery/gallery-image-23.jpg",
    title: "Leo Fellowship Campfire",
    caption: "An unforgettable night under the starry sky sharing stories and laughter.",
    category: "fellowship",
    alt: "Leo Club of EIC — Leo Fellowship Campfire"
  },
  {
    id: 24,
    image: "/gallery/gallery-image-24.jpg",
    title: "Vision & Eye Care Screening",
    caption: "Professional optometrist screenings and free prescription spectacles.",
    category: "service",
    alt: "Leo Club of EIC — Vision & Eye Care Screening"
  }
];

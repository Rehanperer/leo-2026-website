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
    title: "Cleanup Sri Lanka Delegation",
    caption: "Lions Club of Colombo West & Leo Club of Ethos International joint coastal conservation campaign.",
    category: "service",
    alt: "Leo Club of Ethos International — Cleanup Sri Lanka Community Project"
  },
  {
    id: 2,
    image: "/gallery/gallery-image-2.jpg",
    title: "Executive Cabinet Investiture",
    caption: "Incoming student leadership board presiding at the annual installation table.",
    category: "leadership",
    alt: "Leo Club of Ethos International — Executive Cabinet Investiture"
  },
  {
    id: 3,
    image: "/gallery/gallery-image-3.jpg",
    title: "Ceremonial Oil Lamp Lighting",
    caption: "Leo Club Advisor Lion Anthony Sepion kindles the ceremonial flame alongside incoming officers.",
    category: "leadership",
    alt: "Lion Advisor Anthony Sepion lighting the ceremonial oil lamp with Leo cabinet"
  },
  {
    id: 4,
    image: "/gallery/gallery-image-4.jpg",
    title: "Coastal Shoreline Restoration",
    caption: "Dedicated Leo volunteers collecting waste along Sri Lanka's oceanfront.",
    category: "service",
    alt: "Leo Club of Ethos International — Beach Cleanup Volunteers on Shoreline"
  },
  {
    id: 5,
    image: "/gallery/gallery-image-5.jpg",
    title: "Solemn Oath of Office",
    caption: "Students solemnly taking the official Leo membership affirmation and pledge of service.",
    category: "leadership",
    alt: "Leo Club of Ethos International — Student Members Taking Oath of Office"
  },
  {
    id: 6,
    image: "/gallery/gallery-image-6.jpg",
    title: "Floral Monogram Display",
    caption: "Members proudly showcasing handcrafted floral 'L E O' letters celebrating unity.",
    category: "fellowship",
    alt: "Leo Club of Ethos International — Members with Floral LEO Letter Props"
  },
  {
    id: 7,
    image: "/gallery/gallery-image-7.jpg",
    title: "Advisor Recognition & Honor",
    caption: "Lion Anthony Sepion recognizing high-achieving student leaders in front of the club banner.",
    category: "leadership",
    alt: "Lion Advisor Anthony Sepion presenting honor to student member"
  },
  {
    id: 8,
    image: "/gallery/gallery-image-8.jpg",
    title: "Beach Plastic Remediation",
    caption: "Clearing macro and microplastics from the shoreline for marine ecosystem preservation.",
    category: "service",
    alt: "Leo volunteer collecting plastic waste on the beach"
  },
  {
    id: 9,
    image: "/gallery/gallery-image-9.jpg",
    title: "Lions & Leos Joint Action",
    caption: "Senior Lions and youth Leos working shoulder-to-shoulder in community environmental stewardship.",
    category: "service",
    alt: "Lions and Leos volunteers carrying collected waste bags during cleanup"
  },
  {
    id: 10,
    image: "/gallery/gallery-image-10.jpg",
    title: "Environmental Action Brigade",
    caption: "Volunteers in safety gear transporting collected recyclable debris off the coast.",
    category: "service",
    alt: "Volunteers carrying debris bags during Cleanup Sri Lanka"
  },
  {
    id: 11,
    image: "/gallery/gallery-image-11.jpg",
    title: "Charter Banner Ceremony",
    caption: "Student speaker addressing the assembly beside the official Colombo 7 charter banner.",
    category: "leadership",
    alt: "Leo member delivering opening address beside official club banner"
  },
  {
    id: 12,
    image: "/gallery/gallery-image-12.jpg",
    title: "District Dignitary Address",
    caption: "Distinguished Leo leader speaking from the ceremonial velvet lectern.",
    category: "leadership",
    alt: "Leo leader delivering speech at the installation podium"
  },
  {
    id: 13,
    image: "/gallery/gallery-image-13.jpg",
    title: "Installation Head Table",
    caption: "Advisor Lion Anthony Sepion and district dignitaries reviewing official installation minutes.",
    category: "leadership",
    alt: "Installation head table with Lion Advisor Anthony Sepion and student leaders"
  },
  {
    id: 14,
    image: "/gallery/gallery-image-14.jpg",
    title: "Inaugural Presidential Address",
    caption: "Incoming Club President delivering the presidential vision and charter roadmap.",
    category: "leadership",
    alt: "Leo Club President addressing the installation assembly at the podium"
  },
  {
    id: 15,
    image: "/gallery/gallery-image-15.jpg",
    title: "Executive Line of Honor",
    caption: "Ethos International College student officers assembled before the presidential rostrum.",
    category: "leadership",
    alt: "Student officers assembled before the podium during installation"
  },
  {
    id: 16,
    image: "/gallery/gallery-image-16.jpg",
    title: "United in Purpose Summit",
    caption: "District 306 D2 orientation leaders with Ethos International College students.",
    category: "projects",
    alt: "United in Purpose District 306 D2 orientation with student leaders"
  },
  {
    id: 17,
    image: "/gallery/gallery-image-17.jpg",
    title: "Presidential Placecard",
    caption: "Ceremonial placecard of the Club President, Leo Club of Ethos International College.",
    category: "leadership",
    alt: "Official Club President placecard on ceremonial desk"
  },
  {
    id: 18,
    image: "/gallery/gallery-image-18.jpg",
    title: "Orientation Masterclass",
    caption: "Interactive workshop covering self-development, networking, and executive management.",
    category: "projects",
    alt: "District orientation presenter leading leadership masterclass"
  },
  {
    id: 19,
    image: "/gallery/gallery-image-19.jpg",
    title: "Student Civic Seminar",
    caption: "Students attentively absorbing foundational Leo principles and service ethics.",
    category: "projects",
    alt: "Ethos International College students attending leadership seminar"
  },
  {
    id: 20,
    image: "/gallery/gallery-image-20.jpg",
    title: "General Assembly Gathering",
    caption: "A vibrant room of young Leos engaging with district representatives.",
    category: "projects",
    alt: "Assembly of students listening to orientation presentation"
  },
  {
    id: 21,
    image: "/gallery/gallery-image-21.jpg",
    title: "Youth Interactive Session",
    caption: "Students participating in dynamic group discussions and collaborative planning.",
    category: "fellowship",
    alt: "Students participating in interactive workshop discussion"
  },
  {
    id: 22,
    image: "/gallery/gallery-image-22.jpg",
    title: "Fellowship Icebreaker",
    caption: "Student leaders sharing laughter and camaraderie during orientation icebreakers.",
    category: "fellowship",
    alt: "Students enjoying leadership fellowship and icebreakers"
  }
];

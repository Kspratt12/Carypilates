export interface Instructor {
  slug: string;
  name: string;
  credentials: string;
  role: string;
  image: string;
  heroImage: string;
  shortBio: string;
  fullBio: string[];
  specialties: string[];
  certifications: string[];
  personal: string;
  instagram?: string;
}

export const instructors: Instructor[] = [
  {
    slug: "lora",
    name: "Lora Guerra",
    credentials: "MPT, NCPT",
    role: "Studio Owner, Physical Therapist & Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Lora-SQ.jpg?w=800&q=95&ssl=1",
    heroImage:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/CaryPilates-151-SQ.jpg?w=1200&q=95&ssl=1",
    shortBio:
      "Lora founded Cary Pilates with a simple vision: to create a space where every person feels welcomed, challenged, and empowered through movement.",
    fullBio: [
      "Lora brings over 20 years of experience as a Physical Therapist with deep expertise in movement and healing. She earned her Master's degree in Physical Therapy and completed specialized Pilates training at The Pilates Center in Boulder, Colorado, as well as InsideOut Body Therapies in Durham, NC.",
      "Her teaching philosophy focuses on making movement accessible and empowering, creating welcoming spaces where clients develop strength, balance, and confidence. Her approach combines mobility and fascial release techniques to ease pain and tension.",
      "As both a licensed Physical Therapist and nationally certified Pilates instructor, Lora brings a rare combination of clinical expertise and movement mastery to every session. Her teaching philosophy centers on meeting each person where they are - whether recovering from injury or chasing new fitness goals.",
    ],
    specialties: [
      "Low back pain",
      "Postural conditions",
      "Sports-related injuries and prevention",
      "Pregnancy and post-partum care",
      "Neurological disorders",
      "Dysautonomia",
    ],
    certifications: [
      "Master of Physical Therapy (MPT)",
      "Nationally Certified Pilates Teacher (NCPT)",
      "The Pilates Center, Boulder, CO",
      "InsideOut Body Therapies, Durham, NC",
    ],
    personal:
      "Lora has lived internationally in Puerto Rico and Switzerland with her husband and two daughters. She enjoys tennis, running, skiing, and reading.",
  },
  {
    slug: "jessica",
    name: "Jessica Satterlee",
    credentials: "NCPT",
    role: "Pilates Instructor & Nutrition Coach",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Jessica-SQ-1.jpg?w=800&q=95&ssl=1",
    heroImage:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/10/Jessica-SQ-1.jpg?w=1200&q=95&ssl=1",
    shortBio:
      "Jessica brings energy, precision, and nutrition expertise to every class.",
    fullBio: [
      "Jessica has been teaching Pilates since 2008. Her prior career as a financial analyst informs her keen eye for detail in instruction, ensuring every movement is precise and purposeful.",
      "She graduated from the Advanced Teacher Training Program at The Pilates Center at InsideOut Body Therapies, completing over 950 hours of comprehensive training. She also holds specialized certifications in Rehabilitative Pilates and Pilates for Scoliosis.",
      "Jessica helps clients with diverse objectives including strength building, flexibility improvement, chronic pain management, and pre/post-surgical recovery, working with all ages and fitness levels.",
    ],
    specialties: [
      "Rehabilitative Pilates",
      "Pilates for Scoliosis",
      "Strength building",
      "Chronic pain management",
      "Pre/post-surgical recovery",
      "Nutrition coaching",
    ],
    certifications: [
      "Nationally Certified Pilates Teacher (NCPT)",
      "Precision Nutrition Level 1 Certified",
      "Advanced Teacher Training - InsideOut Body Therapies (950+ hours)",
      "Rehabilitative Pilates Specialist",
      "Pilates for Scoliosis Specialist",
    ],
    personal:
      "Jessica enjoys cooking, baking, hiking, and traveling with her partner Eduardo, particularly to their residence in Croatia.",
    instagram: "@fitfoodienc",
  },
  {
    slug: "grace",
    name: "Grace Wilson",
    credentials: "",
    role: "Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/08/GraceW_sq.jpg?w=800&q=95&ssl=1",
    heroImage:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/08/GraceW_sq.jpg?w=1200&q=95&ssl=1",
    shortBio:
      "Grace specializes in mindful movement, creating a calm and focused atmosphere.",
    fullBio: [
      "Grace has been teaching movement since 2013 with a background in dance, Zumba, and fitness. She discovered Pilates through her own personal healing journey from chronic hip and knee pain.",
      "Through that experience she developed a deep passion for intelligent, mindful movement as a remedy for pain. She brings a balance of thoughtful instruction and lighthearted humor to every session.",
      "Grace helps clients connect more deeply with their bodies and rediscover strength, mobility, and ease through precise, mindful instruction.",
    ],
    specialties: [
      "Mindful movement",
      "Pain management through movement",
      "Flexibility and mobility",
      "Dance-informed Pilates",
    ],
    certifications: [
      "Comprehensive Pilates Certification - Balanced Body",
      "Currently pursuing Fletcher Pilates specialty certification",
    ],
    personal:
      "Grace homeschools her five children and has a golden doodle.",
  },
  {
    slug: "breanna",
    name: "Breanna McLane",
    credentials: "",
    role: "Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/Breanna-SQ.jpg?w=800&q=95&ssl=1",
    heroImage:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2025/11/Breanna-SQ.jpg?w=1200&q=95&ssl=1",
    shortBio:
      "Breanna's dynamic teaching style makes challenging workouts feel accessible and fun.",
    fullBio: [
      "Breanna brings an infectious energy to every class she teaches. Her dynamic teaching style has a way of making even the most challenging exercises feel accessible and achievable.",
      "With a background in fitness and a passion for helping people move better, Breanna creates classes that are both effective and enjoyable. She believes Pilates should push you while still being something you look forward to.",
      "Whether you are a seasoned practitioner or stepping onto a reformer for the first time, Breanna meets you where you are and helps you discover what your body is capable of.",
    ],
    specialties: [
      "Dynamic reformer classes",
      "Beginner-friendly instruction",
      "Full-body conditioning",
      "Building confidence through movement",
    ],
    certifications: [
      "Comprehensive Pilates Certification",
    ],
    personal:
      "Breanna is passionate about fitness, community, and making Pilates accessible to everyone.",
  },
  {
    slug: "sophia",
    name: "Sophia Saylor",
    credentials: "",
    role: "Pilates Instructor",
    image:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2026/01/Sophia.jpg?w=800&q=95&ssl=1",
    heroImage:
      "https://i0.wp.com/carypilates.com/wp-content/uploads/2026/01/Sophia.jpg?w=1200&q=95&ssl=1",
    shortBio:
      "Sophia combines classical technique with modern approaches for a well-rounded practice.",
    fullBio: [
      "Sophia brings a unique blend of classical Pilates technique and modern movement science to her teaching. Her approach honors the traditional foundations of Pilates while incorporating contemporary understanding of biomechanics.",
      "She has a gift for breaking down complex movements into approachable steps, making her classes perfect for clients at any level. Sophia pays close attention to alignment and form, ensuring every client gets the most out of their session.",
      "Her calm, encouraging teaching style creates a space where clients feel supported to explore their movement potential and build lasting strength.",
    ],
    specialties: [
      "Classical Pilates technique",
      "Alignment and form correction",
      "Progressive skill building",
      "Modern movement approaches",
    ],
    certifications: [
      "Comprehensive Pilates Certification",
    ],
    personal:
      "Sophia is dedicated to helping every client find joy and confidence in their movement practice.",
  },
];

export function getInstructorBySlug(slug: string): Instructor | undefined {
  return instructors.find((i) => i.slug === slug);
}

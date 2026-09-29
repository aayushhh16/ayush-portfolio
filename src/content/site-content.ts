/**
 * Portfolio content configuration.
 * Fill in each field with your copy, images, and project data.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  tags: string[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export const siteContent = {
meta: {
  title: "Ayush Suman — Graphic Designer at Fab Media Tech",
  description:
    "Ayush Suman is a Graphic Designer at Fab Media Tech specializing in brand identity, social media design, marketing creatives and digital campaigns.",
  url: "https://ayush-portfolio-psi-lac.vercel.app",
  ogImage: "",
},

  nav: {
    logo: "Ayush Suman",
    links: [
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ] satisfies NavLink[],
  },

hero: {
  lines: ["Ayush Suman"],
  subtitle:
    "Graphic Designer at Fab Media Tech creating clean, engaging and purposeful visual experiences for brands, marketing campaigns and digital platforms.",
  cta: {
    label: "View My Work",
    href: "#work",
  },
},

  projects: [
 {
  id: "fab-media-tech",
  title: "Fab Media Tech",
  category: "B2B Marketing & Digital Creatives",
  description:
    "Professional marketing creatives, social media campaigns and visual communication created for Fab Media Tech.",
  year: "2026",
  image: {
    src: "/images/fab-media-tech.jpg",
    alt: "Fab Media Tech",
  },
  href: "#contact",
  tags: ["Marketing", "Social Media", "B2B"],
},
{
    id: "brew-nest",
    title: "Brew Nest",
    category: "Brand Identity",
    description:
      "Premium coffee branding with modern identity, packaging and visual storytelling.",
    year: "2026",
    image: {
      src: "/images/brew-nest.jpg",
      alt: "Brew Nest",
    },
    href: "https://www.behance.net/aayushsuman",
    tags: ["Branding", "Packaging", "Logo"],
  },
  {
    id: "misthi",
    title: "Misthi",
    category: "Brand Identity",
    description:
      "Luxury Indian sweets branding with elegant typography and premium packaging.",
    year: "2026",
    image: {
      src: "/images/misthi.jpg",
      alt: "Misthi",
    },
    href: "https://www.behance.net/aayushsuman",
    tags: ["Identity", "Logo", "Print"],
  },
{
  id: "lumera-skincare",
  title: "Lumera Skincare",
  category: "Brand Identity",
  description:
    "Premium skincare brand identity featuring minimalist packaging, elegant typography and a modern visual system.",
  year: "2026",
  image: {
    src: "/images/lumera-skincare.jpg",
    alt: "Lumera Skincare",
  },
  href: "https://www.behance.net/aayushsuman",
  tags: ["Branding", "Packaging", "Skincare"],
},
 {
  id: "megha-cargo",
  title: "MEGHA SUPER CARGO",
  category: "Brand Identity",
  description:
    "Complete branding and visual identity system for a modern logistics company.",
  year: "2026",
  image: {
    src: "/images/megha-cargo.jpg",
    alt: "MEGHA SUPER CARGO",
  },
  href: "https://www.behance.net/aayushsuman",
  tags: ["Branding", "Logistics", "Identity"],
},
] satisfies Project[],

about: {
  eyebrow: "About",
  title: "Designing visuals that communicate and connect.",
  paragraphs: [
    "I'm Ayush Suman, a Graphic Designer currently working at Fab Media Tech, where I create visual content for digital marketing, brand communication and B2B campaigns.",
    "My work focuses on social media creatives, marketing campaigns, brand communication, promotional graphics and digital content. I combine strong design fundamentals with modern creative tools to create visuals that are clean, engaging and commercially relevant.",
  ],
stats: [
  { value: "30+", label: "Projects" },
  { value: "1+", label: "Years Experience" },
  { value: "100%", label: "Creative" },
],
  image: {
    src: "/images/portrait.jpg",
    alt: "Ayush Suman",
  },
},

services: [
  {
    id: "branding",
    title: "Brand Identity",
    description: "Creating consistent and memorable visual identities for businesses.",
    icon: "Palette",
  },
  {
    id: "social",
    title: "Social Media Design",
    description: "Creating engaging social media creatives and campaign visuals.",
    icon: "LayoutGrid",
  },
  {
    id: "marketing",
    title: "Marketing Creatives",
    description: "Designing promotional visuals focused on clear communication and audience engagement.",
    icon: "Megaphone",
  },
  {
    id: "campaign",
    title: "Campaign Design",
    description: "Building cohesive visual campaigns across digital marketing platforms.",
    icon: "Layers",
  },
  {
    id: "print",
    title: "Print Design",
    description: "Designing professional banners, flyers, brochures and promotional materials.",
    icon: "Printer",
  },
  {
    id: "motion",
    title: "Motion Graphics",
    description: "Creating animated visuals, promotional videos and motion-based content.",
    icon: "Sparkles",
  },
] satisfies Service[],

contact: {
  eyebrow: "Contact",
  title: "Let's Work Together",
  description:
  "Have a project, campaign or creative requirement? Let's connect and create something clear, engaging and visually impactful.",

  email: "aayushsuman18@gmail.com",

  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/aayush.graphix/",
    },
    {
      label: "Behance",
      href: "https://www.behance.net/aayushsuman",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-suman-b90b953a2/",
    },
  ] satisfies SocialLink[],

  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitLabel: "Send Message",
  },
},

  footer: {
  tagline:
  "Graphic Designer creating brand communication, marketing creatives and digital experiences.",

  copyright: `© ${new Date().getFullYear()} Ayush Suman. All Rights Reserved.`,

  links: [
    {
      label: "Behance",
      href: "https://www.behance.net/aayushsuman",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/aayush.graphix/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-suman-b90b953a2/",
    },
  ] satisfies NavLink[],
},
} as const;

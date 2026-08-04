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
    title: "Ayush Suman — Graphic Designer",
    description: "",
    url: "",
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
    "Graphic Designer creating clean, impactful brand identities and premium visual experiences.",
  cta: {
    label: "View My Work",
    href: "#work",
  },
},

  projects: [
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
  title: "Designing brands that people remember.",
  paragraphs: [
    "I'm Ayush Suman, a graphic designer passionate about creating clean, impactful and memorable visual identities.",
    "I specialize in branding, logo design and marketing creatives that help businesses stand out.",
  ],
  stats: [
    { value: "30+", label: "Projects" },
    { value: "2+", label: "Years Learning" },
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
    description: "Creating memorable and premium brand identities.",
    icon: "Palette",
  },
  {
    id: "logo",
    title: "Logo Design",
    description: "Unique, modern and timeless logo design.",
    icon: "PenTool",
  },
  {
    id: "social",
    title: "Social Media Design",
    description: "Creative social media posts and campaign visuals.",
    icon: "LayoutGrid",
  },
  {
    id: "packaging",
    title: "Packaging Design",
    description: "Luxury packaging that enhances product value.",
    icon: "Package",
  },
  {
  id: "ui-ux",
  title: "UI/UX Design",
  description: "Modern, responsive and user-friendly website and app interface design.",
  icon: "Layers",
},
{
  id: "motion",
  title: "Motion Graphics",
  description: "Eye-catching logo animations, reels and promotional motion graphics.",
  icon: "Sparkles",
},
] satisfies Service[],

contact: {
  eyebrow: "Contact",
  title: "Let's Work Together",
  description:
    "Have a branding project or need a designer? Feel free to reach out. I'd love to hear from you.",

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
  tagline: "Graphic Designer crafting premium brand identities and visual experiences.",

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
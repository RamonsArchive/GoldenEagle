import { ServiceDescriptionsType } from "@/lib/globalTypes";
import { AnyARecord } from "dns";

export const navLinks = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "services", title: "Services" },
  { id: "testimonials", title: "Testimonials" },
  { id: "careers", title: "Careers" },
  { id: "contact", title: "Contact" },
];
export const heroImages = {
  backdrops: ["backdrops/1752873842088-mountain3.jpg"],
  gallery: [
    "gallery/1752877201437-homeImage4.jpg",
    "gallery/1752877202295-homeImage3.jpg",
    "gallery/1752877211008-homeImage11.jpg",
    "gallery/1752874302743-homeRemodelImage1.jpg",
  ],
};

export const aboutImages = {
  // 1753080898353-516346817_1105110334827784_7592258741190857465_n
  backdrops: ["backdrops/1752873840601-paint2.jpg"],
  gallery: [
    "gallery/1753080898353-516346817_1105110334827784_7592258741190857465_n.jpg",
    "gallery/1753150006314-concreteImage6.jpg",
    "gallery/1753149996676-concreteImage8.jpg",
  ],
};

export const servicesImages = {
  backdrops: ["backdrops/1752873847269-concrete.jpg"],
  projectTypes: [
    "CUSTOM_HOME",
    "BATHROOM_REMODEL",
    "KITCHEN_REMODEL",
    "FENCES",
    "PATIO",
    "FLOORING",
    "CONCRETE",
    "PAINTING",
    "WINDOWS",
    "ROOFING",
  ],
};

export const serviceDescriptions = new Map<string, ServiceDescriptionsType>([
  [
    "CUSTOM_HOME",
    {
      title: "Custom Home",
      description: "Where dreams take shape. Your sanctuary, built to last.",
      subDescription:
        "From concept to keys, we craft homes that tell your story with every detail.",
      icon: "🏠",
    },
  ],
  [
    "BATHROOM_REMODEL",
    {
      title: "Bathroom Remodel",
      description: "“Your personal retreat. Luxury in every detail.”",
      subDescription:
        "Create a spa-like sanctuary where relaxation and style come together perfectly.",
      icon: "🛁",
    },
  ],
  [
    "KITCHEN_REMODEL",
    {
      title: "Kitchen Remodel",
      description: "“The heart of your home. Where memories are made.”",
      subDescription:
        "Transform your kitchen into a culinary haven where function meets beautiful design.",
      icon: "🍳",
    },
  ],
  [
    "FENCES",
    {
      title: "Fences",
      description: "“The guard against all foes. The outer parameter.”",
      subDescription: "Define your space. Protect your peace.",
      icon: "🚧",
    },
  ],
  [
    "PATIO",
    {
      title: "Patio & Decks",
      description: "“Extend your living space. Embrace the outdoors.”",
      subDescription:
        "Create outdoor havens where comfort meets fresh air and endless possibilities.",
      icon: "🌿",
    },
  ],
  [
    "CONCRETE",
    {
      title: "Concrete",
      description: "“Solid foundations. Lasting impressions.”",
      subDescription:
        "Durable concrete solutions that form the backbone of your project's success.",
      icon: "🔨",
    },
  ],
  [
    "PAINTING",
    {
      title: "Painting",
      description: "“A fresh coat of paint. A new beginning.”",
      subDescription:
        "Professional finishes that breathe new life into every space, inside and out.",
      icon: "🎨",
    },
  ],
  [
    "ROOFING",
    {
      title: "Roofing",
      description: "“Protecting what matters most. Above and beyond.”",
      subDescription:
        "Strong, reliable roofing solutions that stand the test of time and weather.",
      icon: "🏠",
    },
  ],
  [
    "WINDOWS",
    {
      title: "Windows",
      description: "“Let the light in. Let the world in.”",
      subDescription:
        "High-performance, energy-smart windows that flood your home with natural light, optimize climate control year-round, and enhance every view.",
      icon: "🪟",
    },
  ],
]);

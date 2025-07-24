export const Project_Type = {
    CUSTOM_HOME: "CUSTOM_HOME",
    BATHROOM_REMODEL: "BATHROOM_REMODEL",
    KITCHEN_REMODEL: "KITCHEN_REMODEL",
    FENCES: "FENCES",
    PATIO: "PATIO",
    FLOORING: "FLOORING",
    PAINTING: "PAINTING",
    ROOFING: "ROOFING",
    CONCRETE: "CONCRETE",
    WINDOWS: "WINDOWS",
    OTHER: "OTHER",
  } as const;

export const Services_Type = {
  CUSTOM_HOME: "CUSTOM_HOME",
  BATHROOM_REMODEL: "BATHROOM_REMODEL",
  KITCHEN_REMODEL: "KITCHEN_REMODEL",
  FENCES: "FENCES",
  PATIO: "PATIO",
  FLOORING: "FLOORING",
  CONCRETE: "CONCRETE",
  PAINTING: "PAINTING",
  ROOFING: "ROOFING",
  WINDOWS: "WINDOWS",
} as const;


export type NavLinkType = {
  id: string;
  title: string;
}

export type HeroImage = {
  id: number;
  url: string;
}

export type AboutData = {
  aboutGallery: {
    id: number;
    url: string;
    alt: string;
    s3Key: string;
    isBackdrop: boolean;
    category: string;
  }[];
  aboutBackdrop: {
    id: number;
    url: string;
    alt: string;
    s3Key: string;
    isBackdrop: boolean;
    category: string;
  };
}

export type ServicesData = {
  servicesBackdrop: {
    id: number;
    url: string;
    alt: string;
    s3Key: string;
    isBackdrop: boolean;
    category: string;
  };
  awsServicesImages: Record<string, string[]>;
}

export type ServiceImageType = {
  url: string;
  alt: string | null;
  s3Key: string;
  isBackdrop: boolean;
  category: string;
}


export type ServiceDescriptionsType = {
  title: string;
  description: React.ReactNode;
  subDescription: React.ReactNode;
}

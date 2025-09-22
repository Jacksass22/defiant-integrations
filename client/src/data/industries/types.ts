export interface IndustryData {
  // Basic identifiers
  slug: string;

  // SEO data
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  // Visual theme
  theme: {
    primaryColor: string;
    accentColor: string;
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
    iconColor: string;
    backgroundEffect?: 'lightning' | 'tech-pattern' | 'none';
  };

  // Hero section
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };

  // Problem statement section
  problem: {
    title: string;
    description: string;
    statistics: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    summary: {
      title: string;
      points: string[];
    };
  };

  // Solutions section
  solutions: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      iconBgColor: string;
      iconColor: string;
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      results: string;
      image?: string;
    }>;
    winsSection: {
      title: string;
      backgroundColor: string;
      textColor: string;
      stats: Array<{
        number: string;
        label: string;
      }>;
    };
  };

  // Implementation timeline
  timeline: {
    title: string;
    phases: Array<{
      month: string;
      title: string;
      color: string;
      tasks: string[];
    }>;
  };

  // Why this works section
  benefits: {
    title: string;
    subtitle: string;
    description: string;
    points: string[];
    highlightText: string;
  };

  // CTA section
  cta: {
    title: string;
    paragraphs: string[];
    question: string;
    buttonText: string;
  };

  // Lead capture modal
  modal: {
    title: string;
    subtitle: string;
  };

  // Footer links (industry-specific if needed)
  footerLinks?: Array<{
    label: string;
    href: string;
  }>;
}

export interface IndustryRegistry {
  [slug: string]: IndustryData;
}
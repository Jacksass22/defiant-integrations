import { useEffect } from 'react';
import { IndustryData } from '@/data/industries';

interface SEOHeadProps {
  data: IndustryData;
}

export function SEOHead({ data }: SEOHeadProps) {
  const { seo, slug } = data;

  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo.keywords.join(', '));

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${window.location.origin}/${slug}`);

    // Update Open Graph tags
    const updateOrCreateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    updateOrCreateOGTag('og:title', seo.title);
    updateOrCreateOGTag('og:description', seo.description);
    updateOrCreateOGTag('og:url', `${window.location.origin}/${slug}`);
    updateOrCreateOGTag('og:type', 'website');

    // Update Twitter Card tags
    const updateOrCreateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };

    updateOrCreateTwitterTag('twitter:card', 'summary_large_image');
    updateOrCreateTwitterTag('twitter:title', seo.title);
    updateOrCreateTwitterTag('twitter:description', seo.description);

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": `Defiant Integrations - ${data.hero.title.split(':')[0]} Solutions`,
      "description": seo.description,
      "url": `${window.location.origin}/${slug}`,
      "serviceType": data.hero.title.split(':')[0],
      "provider": {
        "@type": "Organization",
        "name": "Defiant Integrations",
        "url": window.location.origin
      }
    };

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Cleanup function to restore original meta tags when component unmounts
    return () => {
      document.title = 'Defiant Integrations';
    };
  }, [data, slug, seo]);

  return null; // This component doesn't render anything
}
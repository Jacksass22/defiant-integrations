import { useParams } from 'wouter';
import { getIndustryBySlug, isValidIndustrySlug } from '@/data/industries';
import IndustryPage from './IndustryPage';
import { useEffect } from 'react';

interface IndustryPageContainerProps {
  industrySlug?: string; // Optional prop to override URL param
}

export default function IndustryPageContainer({ industrySlug }: IndustryPageContainerProps) {
  const params = useParams();
  const slug = industrySlug || params.industry || '';

  // Validate the industry slug
  if (!isValidIndustrySlug(slug)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The industry "{slug}" is not available or doesn't exist.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  // Get industry data
  const industryData = getIndustryBySlug(slug);

  // Update page title and meta description
  useEffect(() => {
    document.title = industryData.seo.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', industryData.seo.description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = industryData.seo.description;
      document.head.appendChild(newMeta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', industryData.seo.keywords.join(', '));
    } else {
      const newKeywords = document.createElement('meta');
      newKeywords.name = 'keywords';
      newKeywords.content = industryData.seo.keywords.join(', ');
      document.head.appendChild(newKeywords);
    }

    return () => {
      // Reset title on cleanup
      document.title = 'Defiant Integrations';
    };
  }, [industryData.seo]);

  return <IndustryPage data={industryData} />;
}
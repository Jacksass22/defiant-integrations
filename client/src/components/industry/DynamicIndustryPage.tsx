import { useState, useEffect } from 'react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { getIndustryBySlug, IndustryData } from '@/data/industries';
import { HeroSection } from './HeroSection';
import { ProblemSection } from './ProblemSection';
import { SolutionsSection } from './SolutionsSection';
import { TimelineSection } from './TimelineSection';
import { BenefitsSection } from './BenefitsSection';
import { CTASection } from './CTASection';
import { IndustryFooter } from './IndustryFooter';
import { SEOHead } from './SEOHead';
import { LeadCaptureModal } from '@/components/lead-capture-modal';

interface DynamicIndustryPageProps {
  slug: string;
}

export default function DynamicIndustryPage({ slug }: DynamicIndustryPageProps) {
  useScrollToTop();
  const [industryData, setIndustryData] = useState<IndustryData | null>(null);
  const [showLeadCaptureModal, setShowLeadCaptureModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const data = getIndustryBySlug(slug);
      setIndustryData(data);
      setError(null);
    } catch (err) {
      setError(`Industry page not found: ${slug}`);
      console.error(`Failed to load industry data for slug: ${slug}`, err);
    }
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!industryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-charcoal font-sans">
      <SEOHead data={industryData} />

      <HeroSection
        data={industryData}
        onCTAClick={() => setShowLeadCaptureModal(true)}
      />

      <ProblemSection data={industryData} />

      <SolutionsSection data={industryData} />

      <TimelineSection data={industryData} />

      <BenefitsSection data={industryData} />

      <CTASection
        data={industryData}
        onCTAClick={() => setShowLeadCaptureModal(true)}
      />

      <IndustryFooter />

      <LeadCaptureModal
        open={showLeadCaptureModal}
        onOpenChange={setShowLeadCaptureModal}
        title={industryData.modal.title}
        subtitle={industryData.modal.subtitle}
      />
    </div>
  );
}
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Navigation } from "@/components/navigation";
import ChatWidget from "@/components/ChatWidget";
import Home from "@/pages/home";
import StrategyArticle from "@/pages/strategy-article";
import AIAdoptionArticle from "@/pages/ai-adoption-article";
import Books from "@/pages/books";
import Industries from "@/pages/industries";
import { IndustryPageContainer } from "@/components/industry";
import AIStrategyDevelopment from "@/pages/ai-strategy-development";
import DigitalTransformation from "@/pages/digital-transformation";
import TechnologyRoadmapping from "@/pages/technology-roadmapping";
import ROIAssessment from "@/pages/roi-assessment";
import ChangeManagement from "@/pages/change-management";
import TeamTraining from "@/pages/team-training";
import VoiceAgentsDemo from "@/pages/voice-agents-demo";
import GovernanceFrameworks from "@/pages/governance-frameworks";
import ContinuousImprovement from "@/pages/continuous-improvement";
import SystemIntegration from "@/pages/system-integration";
import ProcessAutomation from "@/pages/process-automation";
import DataArchitecture from "@/pages/data-architecture";
import PerformanceOptimization from "@/pages/performance-optimization";
import ProofOfConcepts from "@/pages/proof-of-concepts";
import PilotPrograms from "@/pages/pilot-programs";
import TechnologyEvaluation from "@/pages/technology-evaluation";
import OurStory from "@/pages/our-story";
import CompanyValues from "@/pages/company-values";
import MissionVision from "@/pages/mission-vision";
import AIRoboticsArticle from "@/pages/ai-robotics-article";
import AI2025Article from "@/pages/ai-2025-article";
import Services from "@/pages/services";
import Careers from "@/pages/careers";
import NotFound from "@/pages/not-found";




function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/strategy-article" component={StrategyArticle} />
      <Route path="/ai-adoption-article" component={AIAdoptionArticle} />
      <Route path="/books" component={Books} />
      <Route path="/industries" component={Industries} />
      <Route path="/hvac">{() => <IndustryPageContainer industrySlug="hvac" />}</Route>
      <Route path="/plumbing">{() => <IndustryPageContainer industrySlug="plumbing" />}</Route>
      <Route path="/electrical">{() => <IndustryPageContainer industrySlug="electrical" />}</Route>
      <Route path="/landscaping">{() => <IndustryPageContainer industrySlug="landscaping" />}</Route>
      <Route path="/roofing">{() => <IndustryPageContainer industrySlug="roofing" />}</Route>
      <Route path="/painting">{() => <IndustryPageContainer industrySlug="painting" />}</Route>
      <Route path="/general-contracting">{() => <IndustryPageContainer industrySlug="general-contracting" />}</Route>
      <Route path="/cleaning-services">{() => <IndustryPageContainer industrySlug="cleaning-services" />}</Route>
      <Route path="/restaurants-cafes">{() => <IndustryPageContainer industrySlug="restaurants-cafes" />}</Route>
      <Route path="/beauty-salons-spas">{() => <IndustryPageContainer industrySlug="beauty-salons-spas" />}</Route>
      <Route path="/barbershops">{() => <IndustryPageContainer industrySlug="barbershops" />}</Route>
      <Route path="/gyms-personal-trainers">{() => <IndustryPageContainer industrySlug="gyms-personal-trainers" />}</Route>
      <Route path="/wellness-life-coaches">{() => <IndustryPageContainer industrySlug="wellness-life-coaches" />}</Route>
      <Route path="/pet-grooming-boarding">{() => <IndustryPageContainer industrySlug="pet-grooming-boarding" />}</Route>
      <Route path="/remodeling-renovation">{() => <IndustryPageContainer industrySlug="remodeling-renovation" />}</Route>
      <Route path="/brick-mortar-retail">{() => <IndustryPageContainer industrySlug="brick-mortar-retail" />}</Route>
      <Route path="/ecommerce-brands">{() => <IndustryPageContainer industrySlug="ecommerce-brands" />}</Route>
      <Route path="/cannabis-retail">{() => <IndustryPageContainer industrySlug="cannabis-retail" />}</Route>
      <Route path="/specialty-food-makers">{() => <IndustryPageContainer industrySlug="specialty-food-makers" />}</Route>
      <Route path="/local-boutiques">{() => <IndustryPageContainer industrySlug="local-boutiques" />}</Route>
      <Route path="/real-estate-agencies">{() => <IndustryPageContainer industrySlug="real-estate-agencies" />}</Route>
      <Route path="/law-firms">{() => <IndustryPageContainer industrySlug="law-firms" />}</Route>
      <Route path="/accounting-tax-firms">{() => <IndustryPageContainer industrySlug="accounting-tax-firms" />}</Route>
      <Route path="/insurance-brokers">{() => <IndustryPageContainer industrySlug="insurance-brokers" />}</Route>
      <Route path="/hr-recruiting-firms">{() => <IndustryPageContainer industrySlug="hr-recruiting-firms" />}</Route>
      <Route path="/business-consultants">{() => <IndustryPageContainer industrySlug="business-consultants" />}</Route>
      <Route path="/golf-courses">{() => <IndustryPageContainer industrySlug="golf-courses" />}</Route>
      <Route path="/storage-companies">{() => <IndustryPageContainer industrySlug="storage-companies" />}</Route>
      <Route path="/ai-strategy-development" component={AIStrategyDevelopment} />
      <Route path="/digital-transformation" component={DigitalTransformation} />
      <Route path="/technology-roadmapping" component={TechnologyRoadmapping} />
      <Route path="/roi-assessment" component={ROIAssessment} />
      <Route path="/change-management" component={ChangeManagement} />
      <Route path="/team-training" component={TeamTraining} />
      <Route path="/voice-agents-demo" component={VoiceAgentsDemo} />
      <Route path="/governance-frameworks" component={GovernanceFrameworks} />
      <Route path="/continuous-improvement" component={ContinuousImprovement} />
      <Route path="/system-integration" component={SystemIntegration} />
      <Route path="/process-automation" component={ProcessAutomation} />
      <Route path="/data-architecture" component={DataArchitecture} />
      <Route path="/performance-optimization" component={PerformanceOptimization} />
      <Route path="/proof-of-concepts" component={ProofOfConcepts} />
      <Route path="/pilot-programs" component={PilotPrograms} />
      <Route path="/technology-evaluation" component={TechnologyEvaluation} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/company-values" component={CompanyValues} />
      <Route path="/mission-vision" component={MissionVision} />
      <Route path="/ai-robotics-article" component={AIRoboticsArticle} />
      <Route path="/ai-2025-article" component={AI2025Article} />
      <Route path="/services" component={Services} />
      <Route path="/careers" component={Careers} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Navigation />
        <Router />
        <ChatWidget 
          n8nWebhookUrl="https://adk.defiantintegration.com/webhook/03f9b6f3-07c9-48ca-88dc-af90d374c164"
          primaryColor="#2563eb"
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

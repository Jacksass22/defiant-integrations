import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "@/pages/home";
import StrategyArticle from "@/pages/strategy-article";
import AIAdoptionArticle from "@/pages/ai-adoption-article";
import Books from "@/pages/books";
import HVAC from "@/pages/hvac";
import Plumbing from "@/pages/plumbing";
import Electrical from "@/pages/electrical";
import Landscaping from "@/pages/landscaping";
import Roofing from "@/pages/roofing";
import Painting from "@/pages/painting";
import GeneralContracting from "@/pages/general-contracting";
import CleaningServices from "@/pages/cleaning-services";
import RestaurantsCafes from "@/pages/restaurants-cafes";
import BeautySalonsSpas from "@/pages/beauty-salons-spas";
import Barbershops from "@/pages/barbershops";
import GymsPersonalTrainers from "@/pages/gyms-personal-trainers";
import WellnessLifeCoaches from "@/pages/wellness-life-coaches";
import PetGroomingBoarding from "@/pages/pet-grooming-boarding";
import RemodelingRenovation from "@/pages/remodeling-renovation";
import BrickMortarRetail from "@/pages/brick-mortar-retail";
import EcommerceBrands from "@/pages/ecommerce-brands";
import CannabisRetail from "@/pages/cannabis-retail";
import SpecialtyFoodMakers from "@/pages/specialty-food-makers";
import LocalBoutiques from "@/pages/local-boutiques";
import RealEstateAgencies from "@/pages/real-estate-agencies";
import LawFirms from "@/pages/law-firms";
import AccountingTaxFirms from "@/pages/accounting-tax-firms";
import InsuranceBrokers from "@/pages/insurance-brokers";
import HRRecruitingFirms from "@/pages/hr-recruiting-firms";
import BusinessConsultants from "@/pages/business-consultants";
import GolfCourses from "@/pages/golf-courses";
import AIStrategyDevelopment from "@/pages/ai-strategy-development";
import DigitalTransformation from "@/pages/digital-transformation";
import TechnologyRoadmapping from "@/pages/technology-roadmapping";
import ROIAssessment from "@/pages/roi-assessment";
import ChangeManagement from "@/pages/change-management";
import TeamTraining from "@/pages/team-training";
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
      <Route path="/hvac" component={HVAC} />
      <Route path="/plumbing" component={Plumbing} />
      <Route path="/electrical" component={Electrical} />
      <Route path="/landscaping" component={Landscaping} />
      <Route path="/roofing" component={Roofing} />
      <Route path="/painting" component={Painting} />
      <Route path="/general-contracting" component={GeneralContracting} />
      <Route path="/cleaning-services" component={CleaningServices} />
      <Route path="/restaurants-cafes" component={RestaurantsCafes} />
      <Route path="/beauty-salons-spas" component={BeautySalonsSpas} />
      <Route path="/barbershops" component={Barbershops} />
      <Route path="/gyms-personal-trainers" component={GymsPersonalTrainers} />
      <Route path="/wellness-life-coaches" component={WellnessLifeCoaches} />
      <Route path="/pet-grooming-boarding" component={PetGroomingBoarding} />
      <Route path="/remodeling-renovation" component={RemodelingRenovation} />
      <Route path="/brick-mortar-retail" component={BrickMortarRetail} />
      <Route path="/ecommerce-brands" component={EcommerceBrands} />
      <Route path="/cannabis-retail" component={CannabisRetail} />
      <Route path="/specialty-food-makers" component={SpecialtyFoodMakers} />
      <Route path="/local-boutiques" component={LocalBoutiques} />
      <Route path="/real-estate-agencies" component={RealEstateAgencies} />
      <Route path="/law-firms" component={LawFirms} />
      <Route path="/accounting-tax-firms" component={AccountingTaxFirms} />
      <Route path="/insurance-brokers" component={InsuranceBrokers} />
      <Route path="/hr-recruiting-firms" component={HRRecruitingFirms} />
      <Route path="/business-consultants" component={BusinessConsultants} />
      <Route path="/golf-courses" component={GolfCourses} />
      <Route path="/ai-strategy-development" component={AIStrategyDevelopment} />
      <Route path="/digital-transformation" component={DigitalTransformation} />
      <Route path="/technology-roadmapping" component={TechnologyRoadmapping} />
      <Route path="/roi-assessment" component={ROIAssessment} />
      <Route path="/change-management" component={ChangeManagement} />
      <Route path="/team-training" component={TeamTraining} />
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
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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
import NotFound from "@/pages/not-found";


function Router() {
  return (
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
      <Route component={NotFound} />
    </Switch>
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

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

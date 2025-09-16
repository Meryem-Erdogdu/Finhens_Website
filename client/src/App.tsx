import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Get the base path for GitHub Pages
const getBasePath = () => {
  const pathname = window.location.pathname;
  // If we're on GitHub Pages (pathname starts with /repo-name), extract the base
  const match = pathname.match(/^\/([^\/]+)/);
  if (match && match[1] && !match[1].includes('.')) {
    return `/${match[1]}`;
  }
  return '';
};

function AppRouter() {
  const basePath = getBasePath();
  
  return (
    <WouterRouter base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

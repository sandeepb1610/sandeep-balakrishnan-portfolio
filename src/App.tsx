import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index.tsx";
import Projects from "./pages/Projects.tsx";
import TechnicalToolkit from "./pages/TechnicalToolkit.tsx";
import Leadership from "./pages/Leadership.tsx";
import NbnDeepDive from "./pages/NbnDeepDive.tsx";
import NavisDeepDive from "./pages/NavisDeepDive.tsx";
import QuadrupedDeepDive from "./pages/QuadrupedDeepDive.tsx";
import OtherProjects from "./pages/OtherProjects.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technical-toolkit" element={<TechnicalToolkit />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/projects/nbn-fttp-mandurah" element={<NbnDeepDive />} />
          <Route path="/projects/navis-autonomous" element={<NavisDeepDive />} />
          <Route path="/projects/quadruped-robot" element={<QuadrupedDeepDive />} />
          <Route path="/projects/other" element={<OtherProjects />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

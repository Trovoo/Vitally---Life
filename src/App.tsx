import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StartIModern from "./pages/products/StartIModern";
import StartII from "./pages/products/StartII";
import StartIIIModern from "./pages/products/StartIIIModern";
import StartIV from "./pages/products/StartIV";
import StartV from "./pages/products/StartV";
import CrossingLimits from "./pages/products/CrossingLimits";
import PesoLivre from "./pages/products/PesoLivre";
import Cardio from "./pages/products/Cardio";
import Acessorios from "./pages/products/Acessorios";
import Basquete from "./pages/products/Basquete";
import Imports from "./pages/products/Imports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produtos/start-i-modern" element={<StartIModern />} />
          <Route path="/produtos/start-ii" element={<StartII />} />
          <Route path="/produtos/start-iii-modern" element={<StartIIIModern />} />
          <Route path="/produtos/start-iv" element={<StartIV />} />
          <Route path="/produtos/start-v" element={<StartV />} />
          <Route path="/produtos/crossing-limits" element={<CrossingLimits />} />
          <Route path="/produtos/peso-livre" element={<PesoLivre />} />
          <Route path="/produtos/cardio" element={<Cardio />} />
          <Route path="/produtos/acessorios" element={<Acessorios />} />
          <Route path="/produtos/basquete" element={<Basquete />} />
          <Route path="/produtos/imports" element={<Imports />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

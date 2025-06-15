
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import BusinessRegistration from "./pages/BusinessRegistration";
import Registrations from "./pages/Registrations";
import Consultation from "./pages/Consultation";
import Proprietorship from "./pages/Proprietorship";
import Partnership from "./pages/Partnership";
import OnePersonCompany from "./pages/OnePersonCompany";
import LLP from "./pages/LLP";
import PrivateLimitedCompany from "./pages/PrivateLimitedCompany";
import PublicLimitedCompany from "./pages/PublicLimitedCompany";
import Section8Company from "./pages/Section8Company";
import TrustRegistration from "./pages/TrustRegistration";
import ProducerCompany from "./pages/ProducerCompany";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/business-registration" element={<BusinessRegistration />} />
          <Route path="/registrations" element={<Registrations />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/proprietorship" element={<Proprietorship />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/one-person-company" element={<OnePersonCompany />} />
          <Route path="/limited-liability-partnership" element={<LLP />} />
          <Route path="/private-limited-company" element={<PrivateLimitedCompany />} />
          <Route path="/public-limited-company" element={<PublicLimitedCompany />} />
          <Route path="/section-8-company" element={<Section8Company />} />
          <Route path="/trust-registration" element={<TrustRegistration />} />
          <Route path="/producer-company" element={<ProducerCompany />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

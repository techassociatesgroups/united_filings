
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";

// Startup Pages
import PrivateLimitedCompany from "./pages/PrivateLimitedCompany";
import PublicLimitedCompany from "./pages/PublicLimitedCompany";
import LimitedLiabilityPartnership from "./pages/LimitedLiabilityPartnership";
import OnePersonCompany from "./pages/OnePersonCompany";
import PartnershipFirm from "./pages/PartnershipFirm";
import SoleProprietorship from "./pages/SoleProprietorship";

// Service Pages
import TrademarkRegistration from "./pages/TrademarkRegistration";
import GSTRegistration from "./pages/GSTRegistration";
import IncomeTextEFiling from "./pages/IncomeTextEFiling";
import Consultation from "./pages/Consultation";
import Guide from "./pages/Guide";
import About from "./pages/About";
import AllUpdates from "./pages/AllUpdates";
import BecomePartner from "./pages/BecomePartner";
import SearchResultsPage from "./pages/SearchResults";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/search" element={<SearchResultsPage />} />
              
              {/* Startup Routes */}
              <Route path="/private-limited-company" element={<PrivateLimitedCompany />} />
              <Route path="/public-limited-company" element={<PublicLimitedCompany />} />
              <Route path="/limited-liability-partnership" element={<LimitedLiabilityPartnership />} />
              <Route path="/one-person-company" element={<OnePersonCompany />} />
              <Route path="/partnership-firm" element={<PartnershipFirm />} />
              <Route path="/sole-proprietorship" element={<SoleProprietorship />} />
              
              {/* Service Routes */}
              <Route path="/trademark-registration" element={<TrademarkRegistration />} />
              <Route path="/gst-registration" element={<GSTRegistration />} />
              <Route path="/income-tax-e-filing" element={<IncomeTextEFiling />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/about" element={<About />} />
              <Route path="/all-updates" element={<AllUpdates />} />
              <Route path="/become-partner" element={<BecomePartner />} />
              
              {/* Fallback routes for missing pages - redirect to consultation */}
              <Route path="/producer-company" element={<Consultation />} />
              <Route path="/section-8-company" element={<Consultation />} />
              <Route path="/trust-registration" element={<Consultation />} />
              <Route path="/indian-subsidiary" element={<Consultation />} />
              <Route path="/copyright-registration" element={<Consultation />} />
              <Route path="/patent-registration" element={<Consultation />} />
              <Route path="/fssai-registration" element={<Consultation />} />
              <Route path="/fssai-license" element={<Consultation />} />
              <Route path="/import-export-code" element={<Consultation />} />
              <Route path="/startup-india-registration" element={<Consultation />} />
              <Route path="/digital-signature" element={<Consultation />} />
              <Route path="/msme-registration" element={<Consultation />} />
              <Route path="/professional-tax-registration" element={<Consultation />} />
              <Route path="/shop-and-establishment-act" element={<Consultation />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;

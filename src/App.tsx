
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
import ProducerCompany from "./pages/ProducerCompany";
import Section8Company from "./pages/Section8Company";
import TrustRegistration from "./pages/TrustRegistration";
import IndianSubsidiary from "./pages/IndianSubsidiary";

// Service Pages
import TrademarkRegistration from "./pages/TrademarkRegistration";
import GstRegistration from "./pages/GstRegistration";
import IncomeTextEFiling from "./pages/IncomeTextEFiling";
import Consultation from "./pages/Consultation";
import Guide from "./pages/Guide";
import About from "./pages/About";
import AllUpdates from "./pages/AllUpdates";
import BecomePartner from "./pages/BecomePartner";
import SearchResultsPage from "./pages/SearchResults";
import CopyrightRegistration from "./pages/CopyrightRegistration";
import PatentRegistration from "./pages/PatentRegistration";

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
              <Route path="/producer-company" element={<ProducerCompany />} />
              <Route path="/section-8-company" element={<Section8Company />} />
              <Route path="/trust-registration" element={<TrustRegistration />} />
              <Route path="/indian-subsidiary" element={<IndianSubsidiary />} />
              
              {/* Service Routes */}
              <Route path="/trademark-registration" element={<TrademarkRegistration />} />
              <Route path="/copyright-registration" element={<CopyrightRegistration />} />
              <Route path="/patent-registration" element={<PatentRegistration />} />
              <Route path="/gst-registration" element={<GstRegistration />} />
              <Route path="/income-tax-e-filing" element={<IncomeTextEFiling />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/about" element={<About />} />
              <Route path="/all-updates" element={<AllUpdates />} />
              <Route path="/become-partner" element={<BecomePartner />} />
              
              {/* Fallback routes for missing pages - redirect to consultation */}
              <Route path="/fssai-registration" element={<Consultation />} />
              <Route path="/fssai-license" element={<Consultation />} />
              <Route path="/import-export-code" element={<Consultation />} />
              <Route path="/startup-india-registration" element={<Consultation />} />
              <Route path="/digital-signature" element={<Consultation />} />
              <Route path="/msme-registration" element={<Consultation />} />
              <Route path="/professional-tax-registration" element={<Consultation />} />
              <Route path="/shop-and-establishment-act" element={<Consultation />} />
              <Route path="/company-compliance" element={<Consultation />} />
              <Route path="/llp-compliance" element={<Consultation />} />
              <Route path="/opc-compliance" element={<Consultation />} />
              <Route path="/name-change-company" element={<Consultation />} />
              <Route path="/registered-office-change-company" element={<Consultation />} />
              <Route path="/din-ekyc-filing" element={<Consultation />} />
              <Route path="/certificate-of-incumbency" element={<Consultation />} />
              <Route path="/legal-entity-identifier-code" element={<Consultation />} />
              <Route path="/fdi-filing-rbi" element={<Consultation />} />
              <Route path="/gst-return-filing" element={<Consultation />} />
              <Route path="/gst-annual-return-filing-gstr9" element={<Consultation />} />
              <Route path="/gst-registration-cancellation" element={<Consultation />} />
              <Route path="/gst-lut-form" element={<Consultation />} />
              <Route path="/gst-registration-amendment" element={<Consultation />} />
              <Route path="/gst-registration-for-foreigners" element={<Consultation />} />
              <Route path="/gst-revocation" element={<Consultation />} />
              <Route path="/gst-notice" element={<Consultation />} />
              <Route path="/gstr-10-return-filing" element={<Consultation />} />
              <Route path="/itr-1-filing" element={<Consultation />} />
              <Route path="/itr-2-filing" element={<Consultation />} />
              <Route path="/itr-3-filing" element={<Consultation />} />
              <Route path="/itr-4-filing" element={<Consultation />} />
              <Route path="/itr-5-filing" element={<Consultation />} />
              <Route path="/itr-6-filing" element={<Consultation />} />
              <Route path="/itr-7-filing" element={<Consultation />} />
              <Route path="/business-income-tax" element={<Consultation />} />
              <Route path="/pf-registration" element={<Consultation />} />
              <Route path="/esi-registration" element={<Consultation />} />
              <Route path="/trade-license" element={<Consultation />} />
              <Route path="/drug-license" element={<Consultation />} />
              <Route path="/fire-license" element={<Consultation />} />
              <Route path="/rera-registration-agents" element={<Consultation />} />
              <Route path="/rcmc-registration" element={<Consultation />} />
              <Route path="/icegate-registration" element={<Consultation />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from '@/contexts/CartContext';
import Index from '@/pages/Index';
import Proprietorship from '@/pages/Proprietorship';
import Partnership from '@/pages/Partnership'; 
import OnePersonCompany from '@/pages/OnePersonCompany';
import LimitedLiabilityPartnership from '@/pages/LimitedLiabilityPartnership';
import PrivateLimitedCompany from '@/pages/PrivateLimitedCompany';
import PublicLimitedCompany from '@/pages/PublicLimitedCompany';
import Section8Company from '@/pages/Section8Company';
import TrustRegistration from '@/pages/TrustRegistration';
import ProducerCompany from '@/pages/ProducerCompany';
import IndianSubsidiary from '@/pages/IndianSubsidiary';
import StartupIndia from '@/pages/StartupIndia';
import TradeLicense from '@/pages/TradeLicense';
import FSSAIRegistration from '@/pages/FSSAIRegistration';
import FSSAILicense from '@/pages/FSSAILicense';
import HalalCertification from '@/pages/HalalCertification';
import ICEGATERegistration from '@/pages/ICEGATERegistration';
import ImportExportCode from '@/pages/ImportExportCode';
import GSTRegistration from '@/pages/GSTRegistration';
import GSTReturnFiling from '@/pages/GSTReturnFiling';
import IncomeTaxEFilingNew from '@/pages/IncomeTaxEFilingNew';
import TrademarkRegistration from '@/pages/TrademarkRegistration';
import CopyrightRegistration from '@/pages/CopyrightRegistration';
import PatentRegistration from '@/pages/PatentRegistration';
import DigitalSignature from '@/pages/DigitalSignature';
import PFRegistration from '@/pages/PFRegistration';
import ESIRegistration from '@/pages/ESIRegistration';
import BusinessRegistration from '@/pages/BusinessRegistration';
import CompanyCompliance from '@/pages/CompanyCompliance';
import DINEKYCFiling from '@/pages/DINEKYCFiling';
import Consultation from '@/pages/Consultation';
import AllUpdates from '@/pages/AllUpdates';
import StartYourBusiness from '@/pages/StartYourBusiness';
import UdyamRegistration from '@/pages/UdyamRegistration';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/proprietorship" element={<Proprietorship />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/one-person-company" element={<OnePersonCompany />} />
              <Route path="/limited-liability-partnership" element={<LimitedLiabilityPartnership />} />
              <Route path="/private-limited-company" element={<PrivateLimitedCompany />} />
              <Route path="/public-limited-company" element={<PublicLimitedCompany />} />
              <Route path="/section-8-company" element={<Section8Company />} />
              <Route path="/trust-registration" element={<TrustRegistration />} />
              <Route path="/producer-company" element={<ProducerCompany />} />
              <Route path="/indian-subsidiary" element={<IndianSubsidiary />} />
              <Route path="/startup-india" element={<StartupIndia />} />
              <Route path="/trade-license" element={<TradeLicense />} />
              <Route path="/fssai-registration" element={<FSSAIRegistration />} />
              <Route path="/fssai-license" element={<FSSAILicense />} />
              <Route path="/halal-certification" element={<HalalCertification />} />
              <Route path="/icegate-registration" element={<ICEGATERegistration />} />
              <Route path="/import-export-code" element={<ImportExportCode />} />
              <Route path="/gst-registration" element={<GSTRegistration />} />
              <Route path="/gst-return-filing" element={<GSTReturnFiling />} />
              <Route path="/income-tax-e-filing-new" element={<IncomeTaxEFilingNew />} />
              <Route path="/trademark-registration" element={<TrademarkRegistration />} />
              <Route path="/copyright-registration" element={<CopyrightRegistration />} />
              <Route path="/patent-registration" element={<PatentRegistration />} />
              <Route path="/digital-signature" element={<DigitalSignature />} />
              <Route path="/pf-registration" element={<PFRegistration />} />
              <Route path="/esi-registration" element={<ESIRegistration />} />
              <Route path="/business-registration" element={<BusinessRegistration />} />
              <Route path="/company-compliance" element={<CompanyCompliance />} />
              <Route path="/din-ekyc-filing" element={<DINEKYCFiling />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/all-updates" element={<AllUpdates />} />
              <Route path="/start-your-business" element={<StartYourBusiness />} />
              <Route path="/udyam-registration" element={<UdyamRegistration />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;

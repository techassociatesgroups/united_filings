import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from '@/contexts/CartContext';
import { Toaster } from '@/components/ui/toaster';
import Index from '@/pages/Index';
import Proprietorship from '@/pages/Proprietorship';
import Partnership from '@/pages/Partnership'; 
import OnePersonCompany from '@/pages/OnePersonCompany';
import LLP from '@/pages/LLP';
import PrivateLimitedCompany from '@/pages/PrivateLimitedCompany';
import PublicLimitedCompany from '@/pages/PublicLimitedCompany';
import Section8Company from '@/pages/Section8Company';
import TrustRegistration from '@/pages/TrustRegistration';
import ProducerCompany from '@/pages/ProducerCompany';
import IndianSubsidiary from '@/pages/IndianSubsidiary';
import StartupIndia from '@/pages/StartupIndia';
import TradeLicense from '@/pages/TradeLicense';
import FSSAIRegistration from '@/pages/FSSAIRegistration';
import FSSAiLicense from '@/pages/FSSAiLicense';
import HalalCertification from '@/pages/HalalCertification';
import IcegateRegistration from '@/pages/IcegateRegistration';
import ImportExportCode from '@/pages/ImportExportCode';
import GstRegistration from '@/pages/GstRegistration';
import GstReturnFiling from '@/pages/GstReturnFiling';
import IncomeTaxEFilingNew from '@/pages/IncomeTaxEFilingNew';
import TrademarkRegistration from '@/pages/TrademarkRegistration';
import CopyrightRegistration from '@/pages/CopyrightRegistration';
import PatentRegistration from '@/pages/PatentRegistration';
import DigitalSignature from '@/pages/DigitalSignature';
import PFRegistration from '@/pages/PFRegistration';
import ESIRegistration from '@/pages/ESIRegistration';
import BusinessRegistration from '@/pages/BusinessRegistration';
import CompanyCompliance from '@/pages/CompanyCompliance';
import DINEkycFiling from '@/pages/DINEkycFiling';
import Consultation from '@/pages/Consultation';
import AllUpdates from '@/pages/AllUpdates';
import StartYourBusiness from '@/pages/StartYourBusiness';
import UdyamRegistration from '@/pages/UdyamRegistration';
import DINReactivation from '@/pages/DINReactivation';
import DirectorChange from '@/pages/DirectorChange';
import RemoveDirector from '@/pages/RemoveDirector';
import ADT1Filing from '@/pages/ADT1Filing';
import DPT3Filing from '@/pages/DPT3Filing';
import LLPForm11Filing from '@/pages/LLPForm11Filing';
import DormantStatusFiling from '@/pages/DormantStatusFiling';
import MOAAmendment from '@/pages/MOAAmendment';
import AOAAmendment from '@/pages/AOAAmendment';
import AuthorizedCapitalIncrease from '@/pages/AuthorizedCapitalIncrease';
import ShareTransfer from '@/pages/ShareTransfer';
import DematOfShares from '@/pages/DematOfShares';
import WindingUpLLP from '@/pages/WindingUpLLP';
import WindingUpCompany from '@/pages/WindingUpCompany';
import Auth from '@/pages/Auth';
import Profile from '@/pages/Profile';
import Orders from '@/pages/Orders';

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
              <Route path="/limited-liability-partnership" element={<LLP />} />
              <Route path="/private-limited-company" element={<PrivateLimitedCompany />} />
              <Route path="/public-limited-company" element={<PublicLimitedCompany />} />
              <Route path="/section-8-company" element={<Section8Company />} />
              <Route path="/trust-registration" element={<TrustRegistration />} />
              <Route path="/producer-company" element={<ProducerCompany />} />
              <Route path="/indian-subsidiary" element={<IndianSubsidiary />} />
              <Route path="/startup-india" element={<StartupIndia />} />
              <Route path="/trade-license" element={<TradeLicense />} />
              <Route path="/fssai-registration" element={<FSSAIRegistration />} />
              <Route path="/fssai-license" element={<FSSAiLicense />} />
              <Route path="/halal-certification" element={<HalalCertification />} />
              <Route path="/icegate-registration" element={<IcegateRegistration />} />
              <Route path="/import-export-code" element={<ImportExportCode />} />
              <Route path="/gst-registration" element={<GstRegistration />} />
              <Route path="/gst-return-filing" element={<GstReturnFiling />} />
              <Route path="/income-tax-e-filing-new" element={<IncomeTaxEFilingNew />} />
              <Route path="/trademark-registration" element={<TrademarkRegistration />} />
              <Route path="/copyright-registration" element={<CopyrightRegistration />} />
              <Route path="/patent-registration" element={<PatentRegistration />} />
              <Route path="/digital-signature" element={<DigitalSignature />} />
              <Route path="/pf-registration" element={<PFRegistration />} />
              <Route path="/esi-registration" element={<ESIRegistration />} />
              <Route path="/business-registration" element={<BusinessRegistration />} />
              <Route path="/company-compliance" element={<CompanyCompliance />} />
              <Route path="/din-ekyc-filing" element={<DINEkycFiling />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/all-updates" element={<AllUpdates />} />
              <Route path="/start-your-business" element={<StartYourBusiness />} />
              <Route path="/udyam-registration" element={<UdyamRegistration />} />
              
              {/* New MCA Service Routes */}
              <Route path="/din-reactivation" element={<DINReactivation />} />
              <Route path="/director-change" element={<DirectorChange />} />
              <Route path="/remove-director" element={<RemoveDirector />} />
              <Route path="/adt-1-filing" element={<ADT1Filing />} />
              <Route path="/dpt-3-filing" element={<DPT3Filing />} />
              <Route path="/llp-form-11-filing" element={<LLPForm11Filing />} />
              <Route path="/dormant-status-filing" element={<DormantStatusFiling />} />
              <Route path="/moa-amendment" element={<MOAAmendment />} />
              <Route path="/aoa-amendment" element={<AOAAmendment />} />
              <Route path="/authorized-capital-increase" element={<AuthorizedCapitalIncrease />} />
              <Route path="/share-transfer" element={<ShareTransfer />} />
              <Route path="/demat-of-shares" element={<DematOfShares />} />
              <Route path="/winding-up-llp" element={<WindingUpLLP />} />
              <Route path="/winding-up-company" element={<WindingUpCompany />} />
              
              {/* New Auth Routes */}
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </Router>
        <Toaster />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;

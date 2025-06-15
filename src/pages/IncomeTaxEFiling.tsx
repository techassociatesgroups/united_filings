
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/income-tax-e-filing/Breadcrumb";
import HeroSection from "@/components/income-tax-e-filing/HeroSection";
import OffersSection from "@/components/income-tax-e-filing/OffersSection";
import AboutSection from "@/components/income-tax-e-filing/AboutSection";
import WhoMustFileSection from "@/components/income-tax-e-filing/WhoMustFileSection";
import EligibilitySection from "@/components/income-tax-e-filing/EligibilitySection";
import FormsAndDatesSection from "@/components/income-tax-e-filing/FormsAndDatesSection";
import DocumentsAndProcedureSection from "@/components/income-tax-e-filing/DocumentsAndProcedureSection";
import AfterFilingSection from "@/components/income-tax-e-filing/AfterFilingSection";
import IndiaFilingsServicesSection from "@/components/income-tax-e-filing/IndiaFilingsServicesSection";
import Sidebar from "@/components/income-tax-e-filing/Sidebar";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const IncomeTaxEFiling = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-12">
            <HeroSection />
            <OffersSection />
            <AboutSection />
            <WhoMustFileSection />
            <EligibilitySection />
            <FormsAndDatesSection />
            <DocumentsAndProcedureSection />
            <AfterFilingSection />
            <IndiaFilingsServicesSection />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
      <Button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg h-16 w-auto px-6 text-lg z-50">
        <MessageSquare className="mr-3 h-6 w-6" />
        Live Chat with Experts
      </Button>
    </div>
  );
};

export default IncomeTaxEFiling;

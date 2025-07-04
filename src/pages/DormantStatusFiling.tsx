
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/dormant-status-filing/Breadcrumb";
import HeroSection from "@/components/dormant-status-filing/HeroSection";
import DetailsSection from "@/components/dormant-status-filing/DetailsSection";
import DocumentsSection from "@/components/dormant-status-filing/DocumentsSection";
import OffersSection from "@/components/dormant-status-filing/OffersSection";

const DormantStatusFiling = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb />
      </div>
      <HeroSection />
      <DetailsSection />
      <DocumentsSection />
      <OffersSection />
      <Footer />
    </div>
  );
};

export default DormantStatusFiling;

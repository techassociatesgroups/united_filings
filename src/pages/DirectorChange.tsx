
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/director-change/Breadcrumb";
import HeroSection from "@/components/director-change/HeroSection";
import DetailsSection from "@/components/director-change/DetailsSection";
import DocumentsSection from "@/components/director-change/DocumentsSection";
import OffersSection from "@/components/director-change/OffersSection";

const DirectorChange = () => {
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

export default DirectorChange;

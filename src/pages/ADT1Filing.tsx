
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/adt-1-filing/Breadcrumb";
import HeroSection from "@/components/adt-1-filing/HeroSection";
import DetailsSection from "@/components/adt-1-filing/DetailsSection";
import DocumentsSection from "@/components/adt-1-filing/DocumentsSection";
import OffersSection from "@/components/adt-1-filing/OffersSection";

const ADT1Filing = () => {
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

export default ADT1Filing;

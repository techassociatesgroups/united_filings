
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/itr-1-filing/Breadcrumb";
import DetailsSection from "@/components/itr-1-filing/DetailsSection";
import HeroSection from "@/components/itr-1-filing/HeroSection";
import OffersSection from "@/components/itr-1-filing/OffersSection";
import Sidebar from "@/components/itr-1-filing/Sidebar";

const Itr1Filing = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-12">
            <HeroSection />
            <OffersSection />
            <DetailsSection />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Itr1Filing;

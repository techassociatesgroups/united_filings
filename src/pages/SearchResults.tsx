
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchResults from '@/components/SearchResults';

const SearchResultsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <SearchResults />
      </div>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;

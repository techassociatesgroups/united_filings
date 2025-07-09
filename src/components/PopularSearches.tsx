
import { Link } from 'react-router-dom';

const PopularSearches = () => {
  const searchItems = [
    { name: "Partnership", url: "/partnership" },
    { name: "Limited Liability Partnership", url: "/limited-liability-partnership" },
    { name: "Digital Signature", url: "/digital-signature" },
    { name: "Copyright Registration", url: "/copyright-registration" },
    { name: "PAN Card Download", url: "#" },
    { name: "Trademark Registration", url: "/trademark-registration" },
    { name: "Flipkart Seller", url: "#" },
    { name: "Caste Certificate", url: "#" },
    { name: "IAY", url: "#" },
    { name: "EPFO Passbook", url: "#" },
    { name: "Domicile Certificate", url: "#" },
    { name: "Udyog Aadhaar", url: "/udyam-registration" },
    { name: "PF Withdrawal", url: "/pf-registration" },
    { name: "Karnataka One", url: "#" },
    { name: "Encumbrance Certificate", url: "#" },
    { name: "Bonafide Certificate", url: "#" },
    { name: "Instant PAN Card", url: "#" },
    { name: "E-PAN Card", url: "#" },
    { name: "Income Certificate", url: "#" },
    { name: "Marriage Certificate", url: "#" },
    { name: "Passport Renewal", url: "#" },
    { name: "Nivesh Mitra", url: "#" },
    { name: "MSME Registration", url: "/udyam-registration" },
    { name: "Experience Certificate", url: "#" },
    { name: "Trademark Status", url: "/trademark-registration" },
    { name: "Trade License", url: "/trade-license" },
    { name: "Domicile", url: "#" },
    { name: "eMitra", url: "#" },
    { name: "UAN", url: "#" },
    { name: "PICME", url: "#" },
    { name: "Resignation Letter Format", url: "#" },
    { name: "Ration Card", url: "#" },
    { name: "TNREGINET", url: "#" },
    { name: "RAJSSP", url: "#" },
    { name: "LLP Compliance", url: "/llp-compliance" },
    { name: "Form 15", url: "#" },
    { name: "Police Clearance Certificate", url: "#" },
    { name: "OBC Certificate", url: "#" },
    { name: "Janabandhu", url: "#" },
    { name: "Mee Bhoomi", url: "#" },
    { name: "Sc Certificate", url: "#" },
    { name: "UAN Login", url: "#" },
    { name: "eAadhaar Download", url: "#" },
    { name: "Linking Aadhaar To Bank Accounts", url: "#" },
    { name: "mAadhaar", url: "#" },
    { name: "Aadhaar Enrolment Centre", url: "#" },
    { name: "UAN Passbook", url: "#" },
    { name: "Amazon How to Sell", url: "#" },
    { name: "PAN Card Apply", url: "#" },
    { name: "EPFO Unified Portal", url: "#" }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Popular Searches</h3>
        <div className="flex flex-wrap gap-3">
          {searchItems.map((item, index) => (
            <Link 
              key={index}
              to={item.url}
              className="bg-white hover:bg-green-50 text-green-600 px-4 py-2 rounded border border-gray-200 hover:border-green-300 transition-colors text-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;

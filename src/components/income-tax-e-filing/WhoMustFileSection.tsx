
import { Check } from "lucide-react";

const WhoMustFileSection = () => {
    const whoMustFile = [
        { title: "Salaried Individuals", description: "If your total annual income exceeds the basic exemption limit, you are required to file IT returns online." },
        { title: "Self-Employed Professionals", description: "Freelancers, consultants, doctors, lawyers, designers, and other independent professionals with income above the exemption threshold must e-file. Business-related expenses can also be claimed as deductions." },
        { title: "Business Owners (including SMEs & MSMEs)", description: "All business entities—including sole proprietorships, partnerships, LLPs, and private limited companies—must file IT returns online annually, irrespective of profit or loss." },
        { title: "Directors and Partners", description: "Individuals who serve as directors in private limited companies or partners in LLPs are mandated to file ITRs reflecting their share of income and financial involvement in the entity." },
        { title: "Dividend, Interest, and Capital Gains Earners", description: "If you receive income from: Dividends (mutual funds, equities, etc.), Interest (from FDs, bonds, etc.), Capital gains (from stocks, crypto, F&O, mutual funds)…then it’s mandatory to report and pay applicable taxes through ITR." },
        { title: "NRIs and RNORs", description: "NRIs (Non-Resident Indians) with income arising in India exceeding the exemption limit must file IT returns online. RNORs (Resident Not Ordinarily Residents) with foreign income or assets may also be required to file based on disclosure obligations." },
        { title: "Foreign Asset or Income Holders", description: "Indian residents holding foreign assets (like overseas bank accounts, shares, or property) or earning foreign income are required to file ITR, even if their taxable income is below the exemption limit." },
        { title: "High-Value Transaction Individuals", description: "Even if your income is below the basic exemption limit, you must file ITR if you have: Deposited Rs. 1 crore or more in a bank account, Spent over Rs. 2 lakh on foreign travel, Paid more than Rs. 1 lakh in electricity bills in a year." },
        { title: "Claiming Tax Refunds", description: "If you've paid excess tax (through TDS, advance tax, etc.), you must file an ITR to claim your tax refund." },
        { title: "Charitable and Religious Trusts", description: "Organisations that manage charity funds, religious institutions, or voluntary contributions must file ITRs annually to maintain financial transparency and tax compliance." },
    ];

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Who Needs to e File an ITR Income Tax Return?</h2>
            <p className="text-gray-600 mb-6">
                Income tax filing is not just a legal obligation, but also a financial responsibility. It applies to individuals and entities across various categories and income levels. Below is a clear overview of who must e-file their ITR income tax return in India:
            </p>
            <h3 className="text-xl font-bold mb-4">Who must file Income Tax Return</h3>
            <ul className="space-y-4 text-gray-600">
                {whoMustFile.map(item => (
                    <li key={item.title} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-gray-800">{item.title}:</span> {item.description}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default WhoMustFileSection;

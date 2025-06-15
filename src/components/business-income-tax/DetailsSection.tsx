
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check } from "lucide-react";

const DetailsSection = () => {
  const advantages = [
    "Refund Claims: Accurate and timely business tax return filing can lead to potential refunds, which can be beneficial for improving cash flow within the business.",
    "Carry-forward of Losses: Losses incurred in one financial year can be carried forward and adjusted against future profits, reducing tax liabilities.",
    "Loan Applications: Having proper and up-to-date income tax returns can serve as evidence of financial stability, increasing the chances of obtaining loans or credit from financial institutions.",
    "Evidence for Transactions: Filed ITR for business income can provide solid proof of the business's financial transactions and activities, which can be helpful for legal or contractual purposes.",
    "Compliance with Law: Business tax filing ensures compliance with tax regulations, helping businesses avoid penalties or legal issues.",
    "Transparency: Transparent financial records through tax returns can enhance the business's credibility, fostering trust among customers, partners, and stakeholders.",
    "Audit Preparedness: Filed ITR for business income provide a basis for accurate financial statements, preparing the business for potential tax audits.",
    "Business Growth: Accurate financial reporting through tax returns can assist in making informed business decisions, aiding in growth and expansion strategies.",
    "Avoiding Notices: Timely and accurate filing reduces the likelihood of receiving notices or queries from tax authorities.",
    "Availing Tax Benefits: Filing returns on or before income tax return filing last date for business enables businesses to avail themselves of various tax benefits and deductions legally, optimizing their tax liabilities.",
  ];
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Business Income Tax Return (ITR) Filing Online</h2>
        <p className="text-gray-600 mb-4">
          Setting up a business and understanding the complexities of filing returns is essential to running a business. A business tax filing is an income tax return filing applicable to companies. It serves as a comprehensive record of the business's earnings and expenses.
        </p>
        <p className="text-gray-600 mb-4">
          Business Income Tax return filings in India just got more straightforward with IndiaFilings. We are here to help businesses easily file their tax returns and offer LEDGERS small business tax filing software. Our expert team makes the process less stressful, so you don't miss business tax return filing deadlines or break any rules. It doesn't matter if your business is starting or already big – we are here to help.
        </p>
        <p className="text-gray-600">
          Ready to simplify your business taxes? Reach out to us today and discover smoother and stress-free Business Tax return Filings!
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">What is a business tax return?</h3>
        <p className="text-gray-600">
          A business tax return refers to an income tax return for businesses. A business income tax return is a comprehensive report that outlines a business's income, expenses, and pertinent tax details, all presented in a designated form. It entails the submission of income tax returns for businesses, with the added requirement of reporting Tax Deducted at Source (TDS). This process must be carried out annually.
        </p>
        <p className="text-gray-600 mt-4">
          This return serves as a financial statement detailing earnings. It outlays and is a documentation of additional financial components like fixed assets, loans obtained, loans extended, debtors, and creditors within the business. It is important to meet the income tax return filing last date for business.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Income Tax Return Filing in India</h3>
        <p className="text-gray-600 mb-4">
          Both Indian citizens and companies are required to file income tax returns if their Gross Total Income (GTI) exceeds Rs. 3 lakhs (amounts below three lakhs are exempted). These ITR for business income must be submitted annually within the specified business tax return filing deadline. Various business income ITR forms are available, tailored to different criteria applicable to multiple groups of individuals and businesses. It is essential to identify the appropriate arrangements and submit them to the Income Tax Department of India for processing before income tax return filing last date for business. Ensure to follow the right process on how to file taxes for small business owners.
        </p>
        <p className="text-gray-600 mb-4">
          Filing ITR for business income offers several advantages, some of which are outlined below:
        </p>
        <ul className="space-y-3 text-gray-600">
          {advantages.map((advantage, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>{advantage}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Who should file a Business Income Tax Return?</h3>
        <p className="text-gray-600 mb-4">
          Filing a business income tax return is mandatory for all eligible businesses operating within the framework of Indian tax regulations. The need to do a business tax return filing is contingent upon the structure of the business:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Sole Proprietorship</li>
          <li>Partnership Firm</li>
          <li>Limited Liability Partnership (LLP)</li>
          <li>Companies – Private Limited Company, One Person Company</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Types of Business Income Tax Return Filing</h3>
        <p className="text-gray-600 mb-4">
          The different categories for filing business income tax returns are determined based on the types of business entities allowed to submit them. These categories correspond to other business structures and their respective designations. Ensure to follow the guidelines designed for how to file taxes for small business owners.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 font-semibold">
          <li>Partnership Firm Tax Return Filing</li>
          <li>Proprietorship Tax Return Filing</li>
          <li>Limited Liability Partnership Tax Return Filing</li>
          <li>Company Tax Return Filing</li>
        </ul>
      </div>

      {/* Proprietorship Section */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold">Proprietorship Tax Return Filing</h4>
        <p className="text-gray-600">Any individual with business income is said to be operating a proprietorship firm. Proprietorships operating in India are required to file income tax returns each year. Since proprietorships are considered the same as proprietors, a proprietorship's income tax return filing procedure is similar to individual income tax return filing.</p>
        <h5 className="font-semibold">Requirement for Filing Proprietorship Tax Return</h5>
        <p className="text-gray-600">All proprietors below 60 years are required to file income tax returns if total income exceeds Rs. 2.5 lakhs. For proprietors over 60 years but below 80 years, income tax filing is mandatory if total income exceeds Rs.3 lakhs. Proprietors over 80 years and above must file income tax returns if the total income exceeds Rs.5 lakhs.</p>
        <h5 className="font-semibold">Income Tax Rate for Proprietorship</h5>
        <p className="text-gray-600">The income tax rate for proprietorship is the same as the income tax rate for individuals. Unlike the income tax rate for LLP or Company, which are flat rates, proprietorships are taxed on slab rates. The following is the income tax rate applicable for proprietorships for the assessment year 2023-24, wherein the Proprietor's age is less than 60.</p>
        
        <h6 className="font-medium">Proprietorship Tax Rate AY 2024-25| FY 2023-24 under Normal Tax Regime</h6>
        <p className="text-sm text-gray-500">Proprietorship Tax Rate AY 2023-24| FY 2022-23– Proprietor's age is less than 60 years</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Net Income Range</TableHead>
              <TableHead>Rate of income-tax (%)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>Up to Rs.2,50,000</TableCell><TableCell>-</TableCell></TableRow>
            <TableRow><TableCell>Rs.2,50,001 to Rs. 5,00,000</TableCell><TableCell>5</TableCell></TableRow>
            <TableRow><TableCell>Rs. 5,00,001 to Rs. 10,00,000</TableCell><TableCell>20</TableCell></TableRow>
            <TableRow><TableCell>Above Rs. 10,00,000</TableCell><TableCell>30</TableCell></TableRow>
          </TableBody>
        </Table>

        <h6 className="font-medium">Proprietorship Tax Rate AY 2023-24| FY 2022-23–The Proprietor's age is between 60 and 80 years</h6>
        <p className="text-sm text-gray-500">The following tax rate applies to a Proprietor who turns 60 during the previous year but is younger than 80 on the last day of the previous year:</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Net Income Range</TableHead>
              <TableHead>Rate of income-tax (%)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>Up to Rs. 3,00,000</TableCell><TableCell>-</TableCell></TableRow>
            <TableRow><TableCell>Rs. 3,00,001 to Rs. 5,00,000</TableCell><TableCell>5</TableCell></TableRow>
            <TableRow><TableCell>Rs. 5,00,001 to Rs. 10,00,000</TableCell><TableCell>20</TableCell></TableRow>
            <TableRow><TableCell>Above Rs. 10,00,000</TableCell><TableCell>30</TableCell></TableRow>
          </TableBody>
        </Table>
        
        <h6 className="font-medium">Proprietorship Tax Rate AY 2023-24| FY 2022-23–Proprietor's age is above 80 years</h6>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Net Income Range</TableHead>
              <TableHead>Rate of income-tax (%)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>up to Rs. 5,00,000</TableCell><TableCell>-</TableCell></TableRow>
            <TableRow><TableCell>Rs. 5,00,001 to Rs. 10,00,000</TableCell><TableCell>20</TableCell></TableRow>
            <TableRow><TableCell>Above Rs. 10,00,000</TableCell><TableCell>30</TableCell></TableRow>
          </TableBody>
        </Table>

        <h5 className="font-semibold">Rates of surcharge</h5>
        <p className="text-gray-600">In respect of a Proprietor, the rate of surcharge for the Assessment Year 2023-24 is tabulated here:</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Range of Income</TableHead>
              <TableHead>Surcharge Rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>Rs. 50 Lakhs to Rs. 1 Crore</TableCell><TableCell>10%</TableCell></TableRow>
            <TableRow><TableCell>Rs. 1 Crore to Rs. 2 Crores</TableCell><TableCell>15%</TableCell></TableRow>
            <TableRow><TableCell>Rs. 2 Crores to Rs. 5 Crores</TableCell><TableCell>25%</TableCell></TableRow>
            <TableRow><TableCell>Above Rs. 5 Crore</TableCell><TableCell>37%</TableCell></TableRow>
          </TableBody>
        </Table>
        <h6 className="font-medium">Rates of surcharge – For Assessment Year 2023-24 under alternate tax regime</h6>
        <p className="text-gray-600">The rate of surcharge in case of the Proprietor opting for an alternate tax regime as per section 115BAC will be 25% instead of 37% for AY 2023-24</p>
        
        <h5 className="font-semibold">Tax Audit for Proprietorship</h5>
        <p className="text-gray-600">A proprietorship firm would require an audit if the total sales turnover is over Rs.1 crore during the financial year. In the case of a professional, an audit would be required if total gross receipts are more than Rs.50 lakhs during the financial year under assessment.</p>
        
        <h5 className="font-semibold">Due Date for Filing Proprietorship Tax Return</h5>
        <p className="text-gray-600">The income tax return of a proprietorship that doesn't require audit is due on July 31. If the return needs to be audited as per the Income Tax Act, it is due on September 30. Ideally, it is important to file on or before income tax return filing last date for business.</p>
        
        <h5 className="font-semibold">ITR Form for Proprietorships Return Filings</h5>
        <p className="text-gray-600">Proprietorship firms would be required to file Form ITR-3 or Form ITR-4-Sugam. Form ITR-3 can be filed by a proprietor or a Hindu Undivided Family carrying out a proprietary business or profession. Form ITR-4-Sugam can be filed by a proprietor who wants to pay income tax under the presumptive taxation scheme.</p>
      </div>
      
      {/* Partnership Firm Section */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold">Partnership Firm Tax Return Filing</h4>
        <p className="text-gray-600">All partnership firms must file ITR for business income, regardless of income or loss. Partnership firms are taxed as a separate legal entity under the Income Tax Act. Hence, the income tax rate applicable for partnership firms is similar to that of LLPs and companies registered in India.</p>
        <h5 className="font-semibold">Requirement for Filing Partnership Firm Tax Return</h5>
        <p className="text-gray-600">All partnership firms are required to file income tax returns each year, irrespective of income or loss. If there was no business activity, a NIL income tax return must be filed before the due date for a partnership firm.</p>
        <h5 className="font-semibold">Income Tax Rate for Partnership Firms</h5>
        <p className="text-gray-600">Partnership firms must pay income tax at 30% of total income. In addition to the income tax, a partnership firm is liable to pay an income tax surcharge on the amount of income tax at the rate of 12% when total income exceeds Rs.1 crores. In addition to the income tax and taxation, a partnership firm must pay a Health and education cess. Health & Education Cess is applicable on the amount of income tax and the appropriate surcharge at 4%.</p>
        <h5 className="font-semibold">Minimum Alternate Tax for Partnership Firms</h5>
        <p className="text-gray-600">Similar to income tax applicable for a company, partnership firms are subject to minimum alternate Tax. A minimum alternate tax of 18.5% of adjusted total income is applicable. Hence, income tax payable by a partnership firm's profits cannot be less than 18.5 percent (increased by income tax surcharge, education cess, and secondary and higher education cess).</p>
        <h5 className="font-semibold">Tax Audit for Partnership Firm</h5>
        <p className="text-gray-600">Partnership firms carrying on business with total sales of over Rs.1 crore are required to obtain tax audits. Similarly, partnership firms carrying on a profession wherein gross receipts exceed Rs.50 lakhs in the previous year are required to obtain tax audits. In addition, other applicable conditions could make an audit mandatory for a partnership firm.</p>
        <h5 className="font-semibold">Due Date for Filing Partnership Firm Tax Return</h5>
        <p className="text-gray-600">Most partnership firms' income tax return due date is July 31 of the assessment year. Partnership firms required to get their accounts audited under the Income Tax Act must file the income tax return before the September 30 business tax return filing deadline.</p>
        <h5 className="font-semibold">Business Income ITR Form For Partnership Firm Return Filing</h5>
        <p className="text-gray-600">Partnership firms are required to file income tax returns in form ITR 5. Like all other income tax forms, ITR 5 is an attachment-less form, and there is no requirement for submitting any documents or statements along with a partnership firm tax return. However, the taxpayer must save all records about the business and produce the same before tax authorities when requested.</p>
      </div>

      {/* LLP Section */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold">LLP Tax Return Filing</h4>
        <p className="text-gray-600">All LLPs are required to file an income tax return, irrespective of the amount of income or loss. LLPs are a separate legal entity and are taxed separately from the Partners of the LLP. The income tax rate applicable for LLPs is similar to companies registered in India.</p>
        <p className="text-gray-600">...</p>
        <p className="text-gray-600">LLPs must file income tax returns using Form ITR 5. Form ITR 5 must be filed online using the digital signature of one of the designated partners of the LLP.</p>
      </div>

      {/* Company Section */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold">Company Tax Return Filing</h4>
        <p className="text-gray-600">All companies registered in India are required to file income tax returns each year. Under the Income Tax Act, company tax return filing falls under two categories, namely domestic company or foreign company. Companies registered with the Ministry of Corporate Affairs, like Private Limited, Personal, or Limited Companies, are classified as domestic companies.</p>
        <p className="text-gray-600">...</p>
        <p className="text-gray-600">Companies registered in India and operating a business for profit must file Form ITR 6. Hence, private limited companies, limited companies, and one-person companies would be required to file Form ITR6.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Key Points to Consider for Business Tax Filing</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Total Income Assessment: Every business must compute its total income regardless of profit or loss. If the total income surpasses the basic taxable threshold before deductions, filing an income tax return is mandatory.</li>
          <li>Gross Total Income Criteria: Gross Total Income exceeding Rs. 2.5 lakhs signifies surpassing the basic taxable threshold. For business tax return filing, income before deductions exceeding Rs. 3 lakhs is considered.</li>
          <li>Uniform Taxation for LLPs, Companies, and Firms: LLPs, companies, and firms are all subject to a tax rate of 30%, obligating them to file tax returns regardless of financial outcomes or undertaken operations.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">How IndiaFilings Can Assist with Business Tax Return Filings</h3>
        <p className="text-gray-600">
          Navigating the intricate world of business tax filing is made effortless with IndiaFilings. Our dedicated services offer comprehensive support to ensure your tax obligations are met seamlessly. Our platform provides a user-friendly interface that guides you on how to file taxes for small business owners and file on or before income tax return filing last date for business. Our experienced professionals are well-versed in the nuances of tax regulations, ensuring accurate and timely submissions. We're here to help businesses of all types effortlessly file their tax returns. Our LEDGERS small business tax filing software helps to satisfy your ITR and accounting needs.
        </p>
        <p className="text-gray-600 mt-4">
          With our user-friendly platform and seasoned team, the process becomes less daunting, ensuring business tax return filing deadlines and rules are followed. We will keep you well-informed about crucial deadlines, assist in selecting the appropriate business income ITR form, and guide you through a meticulous, error-free filing process. With IndiaFilings, you can confidently handle your business tax filing, saving time and minimizing the complexities involved.
        </p>
        <p className="text-gray-600 mt-4">
          Ready to simplify your business tax returns? Reach out to us today for seamless and stress-free filing.
        </p>
      </div>
    </section>
  );
};
export default DetailsSection;

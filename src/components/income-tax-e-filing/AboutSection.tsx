
import React from 'react';
import { LogIn, Database, FileText, Calculator, CheckSquare } from 'lucide-react';

const AboutSection = () => {
  const steps = [
    { title: "Quick Login/Signup", description: "Log in or create your account effortlessly.", icon: LogIn },
    { title: "Pick Income Source", description: "Salary, business, capital gains & more.", icon: Database },
    { title: "Auto-Filled Data", description: "Details auto-fetched from IT Dept for ITR filing", icon: FileText },
    { title: "Compare Tax Computation", description: "Select between old & new tax regimes", icon: Calculator },
    { title: "File ITR & Confirm", description: "File return & receive confirmation from IT Dept", icon: CheckSquare },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Income Tax e Filing</h2>
      <p className="text-gray-600 mb-6">
        Filing ITR (income tax return) is a crucial duty of every taxpayer in India, ensuring adherence to the nation's tax regulations. Income tax filing involves detailing all sources of income, deductions, and tax liabilities for a comprehensive report to the Income Tax Department. Early ITR e-filing helps avoid errors and last-minute technical glitches, ensuring a smoother submission process.
      </p>
      <p className="text-gray-600 mb-6">
        IndiaFilings simplifies the entire Income Tax e Filing process, making it quick, easy, and hassle-free. Our platform guides you step-by-step, from auto-fetching your pre-filled data to assisting you in choosing the right tax regime. Whether you're an individual or a business owner, our user-friendly ITR efiling system ensures your taxes are filed accurately and on time.
      </p>
      <p className="text-gray-600 mb-8">
        Experience a seamless ITR filing process online with IndiaFilings and say goodbye to tax season stress!
      </p>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-center mb-6">5 Quick Steps to File your ITR Online</h3>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center max-w-[180px]">
                <div className="bg-blue-100 rounded-full p-3 mb-2">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <p className="font-semibold">{step.title}</p>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="hidden md:block border-t-2 border-dashed border-gray-300 flex-grow mt-8"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Income Tax Return (ITR)</h3>
        <p className="text-gray-600">
          An ITR Income Tax Return is a form that taxpayers use to report their income details and tax payments to the Income Tax Department. There are seven different ITR forms available for ITR e filing: ITR 1 through ITR 7. The appropriate form for a taxpayer depends on various factors, including their sources of income, the total amount earned, and the type of taxpayer they are (such as individuals, Hindu Undivided Families (HUFs), companies, etc.). Each taxpayer must accurately complete their income tax filing within the specified deadline to comply with the Income Tax Law.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

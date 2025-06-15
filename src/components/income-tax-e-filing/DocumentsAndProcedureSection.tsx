
const DocumentsAndProcedureSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Documents Required for Income Tax e Filing</h2>
      <p className="text-gray-600 mb-6">
        When preparing for your e Filing of Income Tax Return in India, it's important to have all necessary documents handy to ensure a smooth and accurate submission process. Here’s a comprehensive list of the documents you may require for Income tax e filing:
      </p>
      <h3 className="text-xl font-bold mb-4">General Documents for Income Tax Filing</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
        <li>PAN (Permanent Account Number): Essential for every kind of financial transaction and tax-related activity.</li>
        <li>Aadhaar (Linked to PAN): Required for verification and linking to your tax records.</li>
        <li>Bank Account Details: We need to process any potential refunds or verify financial details.</li>
      </ul>
      <img src="/lovable-uploads/b82916f3-a462-4bfc-ac5e-a5da577d3e2a.png" alt="Documents for ITR" className="w-full rounded-lg mb-8" />
      
      <h3 className="text-xl font-bold mb-4">Procedure for eFiling of ITR in India</h3>
      <p className="text-gray-600 mb-6">
        Income tax e filing in India can be accomplished through two primary methods: offline to online and entirely online. Here’s a step-by-step guide on income tax filing online and offline to online:
      </p>
      <div className="space-y-6 text-gray-600">
        <div>
          <h4 className="font-semibold text-lg text-gray-800">eFiling ITR Offline to Online Method:</h4>
          <p>Here is the method of how to file for IT return offline to online.</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Download the Appropriate ITR Form: Visit the official Income Tax Department website. Based on your income sources and category, download the correct ITR form using the Excel Utility or Java Utility available on the portal.</li>
            <li>Fill Out the Form Offline: After downloading, fill out the form on your computer. This allows you to work through your tax details at your own pace without needing an internet connection.</li>
            <li>Save the Form in XML Format: Once completed, save the form in XML format, as this is the required format for uploading to the e-filing portal.</li>
            <li>Upload the XML File to the e-Filing Portal: Log into your account on the e-filing portal. Navigate to the appropriate section to upload the XML file and submit your ITR.</li>
          </ol>
        </div>
        <div>
          <h4 className="font-semibold text-lg text-gray-800">Income Tax eFiling in India Online</h4>
          <p>E-filing your Income Tax Returns (ITR) is a straightforward process once you've registered at the Income Tax e filing portal and gathered all necessary documents. Follow these steps for successfully complete the ITR online filing:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Log in to the Portal: Visit the official Income Tax Department e-filing website and click on “Login” at the top right corner.</li>
            <li>Enter Login Credentials: Input your registered username (usually your PAN) and password in the designated fields. Be mindful of case sensitivity in the password. Click “Continue” to proceed.</li>
            <li>Access E Filing Services: After logging in, follow this process to access e filing services: Navigate to the “e-File” tab on the dashboard and select “File Income Tax Return” from the dropdown menu to start e file income tax return.</li>
            <li>Choose the Assessment Year and Filing Mode: On the “File Income Tax Return” page, specify the Assessment Year (AY) for the return you are filing. For example, AY 2025-26 corresponds to income earned from April 1st, 2024, to March 31st, 2025.</li>
            <li>Select Taxpayer Category: Indicate whether you are filing as an Individual, Hindu Undivided Family (HUF), or other entity types. Click “Continue” after making your selection.</li>
            <li>Choose the Right ITR Form: Based on your taxpayer category and income details, the portal will suggest appropriate ITR forms. Choose the one that matches your income sources.</li>
            <li>Reason for ITR Filing: Select your reason for income tax e filing, which might include regular assessment, claiming a refund, or filing a revised return.</li>
            <li>Review and Edit Pre-filled Information: The portal may pre-fill certain sections based on data from employers, banks, etc. Verify each entry for accuracy and edit any incorrect information before proceeding.</li>
            <li>Review and Confirm ITR Return Details: Review a detailed display of your ITR, including income, deductions, and tax liability. Ensure all data is correct before moving forward.</li>
            <li>Make Tax Payment: If applicable, settle any tax dues via the e-payment gateway. Select your bank and preferred payment method, such as net banking or debit/credit card.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default DocumentsAndProcedureSection;

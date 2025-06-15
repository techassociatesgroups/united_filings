
const AfterFilingSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Completed Your ITR e-Filing? Here's What to Do Next</h2>
      
      <h3 className="text-xl font-bold mt-6 mb-4">e-verify your return</h3>
      <p className="text-gray-600 mb-4">
        After you have done your the ITR e filing, the next crucial step is to e-verify your return. This is an essential part of the ITR e filing process, as it confirms the authenticity of your submission to the Income Tax Department. You can e-verify your ITR in several ways:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
        <li><span className="font-semibold">Electronic Verification Code (EVC):</span> Generated through your bank account, Demat account, or registered mobile number and email.</li>
        <li><span className="font-semibold">Aadhar OTP:</span> A one-time password sent to the mobile number linked to your Aadhaar, used for verification.</li>
        <li><span className="font-semibold">Sending a Signed ITR-V:</span> If electronic verification isn’t possible, you can mail a signed copy of ITR-V (Income Tax Return Verification) form through normal or speed post to the Centralized Processing Center, Income Tax Department in Bengaluru within 120 days from the date of filing.</li>
      </ul>

      <h3 className="text-xl font-bold mt-6 mb-4">Steps to Track e-Filing Status</h3>
      <p className="text-gray-600 mb-4">
        After completing the income tax filing, it's important to track the status to ensure it has been processed successfully. Here’s how you can do it:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
        <li><span className="font-semibold">Step 1:</span> Visit the Income Tax e-Filing Portal: Go to the Income Tax Official Portal and click on the ‘Login’ button at the top-right corner.</li>
        <li><span className="font-semibold">Step 2:</span> Log in with Your Credentials: Enter your PAN (as username), password, and the captcha code, then click ‘Continue’.</li>
        <li><span className="font-semibold">Step 3:</span> Navigate to ‘e-File’ Section: After logging in, click on the ‘e-File’ tab in the dashboard, then select ‘Income Tax Returns’ {'>'} ‘View Filed Returns’.</li>
        <li><span className="font-semibold">Step 4:</span> View Status: A list of your filed returns will appear. You can see the status of each return (e.g., "Successfully e-verified", "Processed", "Under Processing", etc.) in the "Status" column.</li>
      </ol>

      <h3 className="text-xl font-bold mt-6 mb-4">Revised Return Filings</h3>
      <p className="text-gray-600 mb-4">
        If you've already filed your original or belated return under Section 139(1) or 139(4) of the Income Tax Act, 1961, and later realise there was an error or omission — you’re eligible to file a Revised Return. Common reasons include correction of income details, missed tax deductions, forgotten disclosures, or updates to personal information. Filing a revised return is simple: just choose the 'Revised Return' option while e-filing your ITR and update the necessary details. The deadline to file a revised return is December 31 of the relevant assessment year, and the sooner you make the correction, the better, to avoid complications or notices from the tax department.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-4">Belated Return Filings</h3>
      <p className="text-gray-600 mb-4">
        If you miss the original deadline of 31st July for filing your income tax return, you can still file a Belated Return under Section 139(4) of the Income Tax Act. This can be done on or before 31st December of the relevant assessment year. While belated filing allows you to claim a refund, it may attract certain penalties. A late fee under Section 234F applies — Rs. 5,000 for those with income above Rs. 5 lakhs, and Rs. 1,000 for income below Rs. 5 lakhs.
      </p>
      <p className="text-gray-600 mb-4">
        However, if your income is below the basic exemption limit, no late fee is charged. Also, if there's any unpaid tax, an interest of 1% per month under Section 234A will be levied. To receive any refund due, make sure your bank account is pre-validated on the income tax e-filing portal.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-4">Updated Return (ITR-U) Filing</h3>
      <p className="text-gray-600">
        If you’ve missed both the original and belated return filing deadlines, you still have a chance to file your taxes through an Updated Return (ITR-U) under Section 139(8A) of the Income Tax Act. This allows taxpayers to declare any missed income or correct errors within four years (as per Budget 2025) from the end of the relevant assessment year. However, additional tax and interest may apply, and this option cannot be used to claim refunds or reduce tax liability.
      </p>
    </section>
  );
};

export default AfterFilingSection;

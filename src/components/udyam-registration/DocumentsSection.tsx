
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const DocumentsSection = () => {
  const documents = [
    { title: "PAN Card Number:", text: "The Permanent Account Number (PAN) of the business or the proprietor." },
    { title: "Aadhaar Number:", text: "The Aadhaar card number is required as follows:", list: ["Proprietorship Firms: Aadhaar card of the proprietor.", "Partnership Firms: Aadhaar card of the managing partner.", "LLPs, Companies, Cooperative Societies, or Trusts: Aadhaar card of the authorized signatory."] },
    { title: "GST Number (if applicable):", text: "The GST number is mandatory only for enterprises that require GST registration." }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required for Udyam Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 text-sm">When it comes to the documents required for the Online Udyam Aadhar Registration process, it is worth noting that the application is primarily based on self-declaration. As such, uploading any additional documents during the MSME registration online procedure is unnecessary. Applicants must only provide their 12-digit Aadhaar Number, PAN (Permanent Account Number), and Bank Account details of the business to complete the registration process efficiently.</p>
        <ul className="space-y-4 text-gray-700 text-sm">
          {documents.map((doc, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">{doc.title}</span> {doc.text}
                {doc.list && (
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {doc.list.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-gray-600 text-sm">Ensure you have the listed documents before proceeding to the registration and Udyam certificate download process. Get IndiaFilings expert support to streamline the registration process with reasonable MSME registration charges.</p>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;

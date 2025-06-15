
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const DocumentsSection = () => {
    const docs = [
        "Import-Export Code (IEC) issued by the Directorate General of Foreign Trade (DGFT)",
        "Bank Certificate for APEDA registration or Cancelled Cheque",
        "Bank Account Statement for the last two months",
        "GST Registration Certificate",
        "Duly Signed APEDA RCMC Registration Form"
    ];

    const manufacturerDocs = [
        "Central FSSAI Registration (Food Safety and Standards Authority of India)",
        "DIS/SIA Certificate issued by the Department of Horticulture for food products listed under the APEDA Act",
        "Certificate of Incorporation of the firm (including partnership deed if applicable)",
        "No Objection Certificate (NOC) from the Pollution Control Board",
        "MSME Certificate (if applicable)",
        "Halal Certificate (if required)"
    ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required for APEDA Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p>Exporters must submit the following documents when applying for APEDA license Registration:</p>
            <h4 className="font-semibold mt-4 mb-2">For All Exporters</h4>
            <ul className="space-y-3 mt-4">
                {docs.map((doc, index) => (
                    <li key={index} className="flex items-start">
                        <FileText className="h-5 w-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                        <span>{doc}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h4 className="font-semibold mt-4 mb-2">Additional Documents for Manufacturer Exporters</h4>
            <ul className="space-y-3 mt-4">
                {manufacturerDocs.map((doc, index) => (
                    <li key={index} className="flex items-start">
                        <FileText className="h-5 w-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                        <span>{doc}</span>
                    </li>
                ))}
            </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;

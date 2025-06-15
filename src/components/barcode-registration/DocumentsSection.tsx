
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const DocumentsSection = () => {
    const docs = [
        "A letter requesting the allotment of a barcode",
        "PAN card of the entity",
        "Copy of audited balance sheet",
        "GST/VAT registration certificate",
        "Certificate of incorporation/partnership deed",
        "Memorandum of Association/Articles of Association",
        "Copy of canceled cheque or bank statement",
    ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required to Register Barcode</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="mb-4">The following documents are typically required for barcode registration :</p>
            <ul className="space-y-3">
                {docs.map((doc, index) => (
                    <li key={index} className="flex items-start">
                        <FileText className="h-5 w-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                        <span>{doc}</span>
                    </li>
                ))}
            </ul>
            <p className="mt-4 text-sm text-gray-600">Please note that the requirements may vary depending on the specific registration authority.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;


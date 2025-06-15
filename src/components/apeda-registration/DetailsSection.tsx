
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About APEDA Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-gray-700">
        <p>APEDA Registration is an essential certificate for Indian importers and exporters seeking to access international markets in the agricultural and processed food sectors. APEDA, which stands for the Agricultural and Processed Food Products Export Development Authority, signifies regulatory compliance and provides access to an array of incentives and opportunities designed to propel exports and catalyse growth. In a world increasingly valuing organic, authentic, and diverse food products, APEDA Registration has become an indispensable asset for Indian exporters.</p>
        <p>IndiaFilings can help you obtain your APEDA Registration smoothly and efficiently, ensuring you meet all requirements with ease.</p>
        <p className="font-semibold">Ready to Expand Your Export Business? Get Your APEDA Registration with IndiaFilings Today!</p>

        <div>
          <h3 className="text-xl font-semibold mb-2">What is APEDA?</h3>
          <p>APEDA, established under the APEDA Act of 1985, is a government authority tasked with regulating and promoting the export of agricultural and processed food products from India. APEDA Registration, also known as APEDA RCMC Registration, is a mandatory requirement for exporters dealing with scheduled products. This certification ensures that exporters comply with export regulations and provides access to various benefits, including financial assistance, training programs, and quality improvement guidelines.</p>
        </div>

        <div>
            <h3 className="text-xl font-semibold mb-2">What is APEDA Registration?</h3>
            <p>APEDA Registration, also referred to as APEDA RCMC Registration (Registration-Cum-Membership Certificate (RCMC)), is issued by the APEDA authorities to exporters of scheduled food products under the APEDA Act of 1985. This registration is a compulsory requirement for any exporter intending to engage in the export of listed agricultural and processed food products. Without an RCMC membership, exporters cannot legally commence their business activities related to these products as per regulatory guidelines. The APEDA RCMC registration form must be accurately filled out and submitted as part of the APEDA online registration procedure. Ensure to get an RCMC APEDA certificate.</p>
        </div>
        
        {/* ... More sections will be added here from the user prompt ... */}

      </CardContent>
    </Card>
  );
};

export default DetailsSection;

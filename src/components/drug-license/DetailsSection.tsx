
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="text-gray-600 space-y-3 text-sm">{children}</div>
    </section>
);

const DetailsSection = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Drug License Details</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="mb-6 text-sm text-gray-600">
                Securing a drug licence is a fundamental step for entities wishing to engage in the pharmaceutical industry within India, encompassing activities from manufacturing to selling drugs and cosmetics. This license is a safeguard, ensuring that all pharmaceutical practices adhere to the rigorous quality and safety standards set forth by the Drugs and Cosmetics Act. Given the complexity of the application process and the importance of adherence to these regulations, navigating the intricacies of obtaining a drug license can be daunting.
            </p>
            <p className="mb-6 text-sm text-gray-600">
                IndiaFilings offers expert guidance and support for the Drug License registration Process and obtaining the licence. With our deep understanding of the regulatory landscape and a comprehensive approach to handling applications, IndiaFilings helps demystify the process, ensuring that businesses and individuals can secure their pharma licence efficiently while fully complying with the legal mandates.
            </p>

            <Section title="What is a Drug Licence?">
                <p>In India, businesses must have the right licenses for their operations, including those dealing drugs and cosmetics. A drug licence issued by the government requires firms to legally manufacture, distribute, or sell pharmaceutical and cosmetic products. These licenses are specific to each region, meaning a separate permit is needed for operations in different states. Moreover, a distinct pharma license is required for each location if a business operates in multiple locations within a single state. Selling pharmaceutical products which do not have proper drug licenses leads to the cancellation of a pharmacy license. Drug licence verification can be done by the officials to ensure the safety. However, there's an exception for mobile vendors.</p>
            </Section>

            <Section title="Meaning of Drugs">
                <p>A drug licence is an authorisation issued by regulatory bodies that allows a business to engage in drug-related activities. Obtaining a drug licence is a prerequisite for initiating any drug-related business operations. The definition of a "drug" is provided in section 3(b) of The Drugs And Cosmetics Act, 1940, and encompasses.</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>All medications and treatments used for diagnosing, preventing, treating, or alleviating diseases or disorders in humans or animals. This also covers substances applied to the human body to deter insects such as mosquitoes.</li>
                    <li>Every component constitutes a drug, including empty gelatin capsules.</li>
                    <li>Various medical devices.</li>
                </ul>
                <p>Therefore, the term "drug" encompasses all forms of medicines, including Allopathic, Homeopathic, Ayurvedic, Siddha, and Unani. For licensing purposes for pharma licence, these medicines can be categorised into two main groups.</p>
            </Section>

            <Section title="The objective of Obtaining a Drug Licence">
                <p>The issuance of a drug licence serves as a regulatory measure to control and restrict access to medicines and drugs, ensuring they are not subjected to misuse or abuse. Drug licence verification done for the same purpose to ensure compliance and safety.</p>
            </Section>

            <Section title="Importance of Drug Licence">
                <p>The drug license is a prerequisite for businesses or individuals to legally operate in India's trading, manufacturing, or distribution of drugs and cosmetics. It ensures that all entities adhere to the stringent guidelines and standards outlined in the Drugs and Cosmetics Act 1940 to maintain the safety, efficacy, and quality of pharmaceutical and cosmetic products.</p>
                <p>Additionally, obtaining a license and drug licence renewal is just one part of regulatory compliance; entities must secure a trade license and register under the Shop and Establishment Act to fully comply with the legal requirements for operating a business in this sector.</p>
            </Section>

            <Section title="Entities Required to Obtain a Drug License Registration">
                <p>The following groups are typically required to secure a drug licence to operate legally within the pharmaceutical and healthcare sectors:</p>
                 <ul className="list-disc pl-5 space-y-1">
                    <li>Pharmacists: Professionals authorised to prepare, dispense, and advise on pharmaceutical drugs, ensuring their safe and effective use by having pharma license.</li>
                    <li>Wholesale Distributors: Businesses involved in bulk purchasing and distributing drugs to various retail outlets or other organisations.</li>
                    <li>Retailers: Businesses that sell drugs directly to consumers, providing the final link in the supply chain between the manufacturer and the end-user. These entities must obtain drug license along with medical store licence.</li>
                    <li>Manufacturers: Companies or individuals producing pharmaceuticals and cosmetics, including formulation, compounding, packaging, and labelling.</li>
                    <li>Drug Sellers and Dealers: Individuals or entities engaged in the commercial trading of pharmaceuticals and cosmetic products. They must have both drug and pharmacy license to carry out the operations legally. </li>
                    <li>Importers: Companies or individuals who import drugs, cosmetics, and traditional medicines from abroad, ensuring these imported items comply with the local regulatory requirements.</li>
                    <li>Ayurvedic, Siddha, and Unani Drug Providers: Entities dealing in traditional Indian medicinal products, also regulated under the Drugs and Cosmetics Act need to have pharma licence.</li>
                </ul>
            </Section>

            <Section title="Types of Drug Licenses">
                <p>In India, the kind of drug licence required varies based on the specific activities of the drug business.</p>
                 <ul className="list-disc pl-5 space-y-1">
                    <li>Manufacturing License: For businesses that produce drugs, including allopathic and homoeopathic medicines. This manufacturing pharma licence is mandatory for any entity creating and producing pharmaceutical products.</li>
                    <li>Sale License: This is required to sell drugs and has two main categories: Wholesale Drug Licence and Retail Drug Licence.</li>
                    <li>Loan License: This type of pharma licence For businesses that don't own a manufacturing facility but utilise the manufacturing premises of another licensed manufacturer to produce drugs.</li>
                    <li>Import License: Required for businesses importing drugs into India.</li>
                    <li>Multi-Drug Licence: For businesses operating pharmacies under the same name across multiple states.</li>
                </ul>
            </Section>

            <Section title="Validity of Drug License">
                <p>A drug license, upon issuance, remains valid for five years, subject to its continued compliance with regulations. It can, however, be suspended or cancelled by the Drug Department if it fails to adhere to the required standards and regulations within this timeframe.</p>
            </Section>

            <Section title="How to Apply for Drug Licence?">
                 <p>The Procedure to obtain a Drug License involves several key steps, each critical to ensuring compliance with regulatory standards. Here are the step by step process on how to apply for drug license:</p>
                 <ol className="list-decimal pl-5 space-y-1">
                     <li>Preparation of Documentation</li>
                     <li>Creation of User ID and Password</li>
                     <li>Filing the Application</li>
                     <li>Premises Inspection</li>
                     <li>Application Scrutiny</li>
                     <li>License Issuance</li>
                 </ol>
            </Section>

            <div className="mt-8 text-center">
              <p className="mb-2">Simplify Your Drug License Process with IndiaFilings</p>
              <Button>Contact our experts today for personalised assistance!</Button>
            </div>
        </CardContent>
    </Card>
  );
};


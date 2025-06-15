
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <div className="text-gray-600 space-y-4 text-sm">{children}</div>
    </section>
);

const DetailsSection = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>About Udyam Registration</CardTitle>
            </CardHeader>
            <CardContent>
                <p>In today's competitive business landscape, it is crucial for small and medium-sized enterprises (SMEs) to leverage government initiatives that streamline operations, offer benefits, and provide formal recognition. One such initiative by the Government of India is Udyog Aadhar registration, now known as Udyam registration. This initiative is designed to support the growth and development of micro, small, and medium enterprises (MSMEs) nationwide. Udyam Registration also referred to as MSME Registration, is the updated process for registering MSMEs introduced by the Ministry of Micro, Small & Medium Enterprises on July 1, 2020. Alongside this new registration process, the Ministry also updated the MSME classification criteria.</p>
                <p className="my-4">IndiaFilings is your trusted partner when it comes to simplifying the Udyam Aadhaar registration process. Our dedicated team of experts is well-versed in the intricacies of the Udyam Aadhar registration online process and can help your business secure its Udyam Certificate and Registration Number swiftly and seamlessly.</p>

                <Section title="What is Udyam Registration?">
                    <p>Udyam Registration is an official process initiated by the Ministry of Micro, Small, and Medium Enterprises (MSMEs), Government of India, for the formal registration of micro, small, and medium enterprises (MSMEs). Introduced on July 1, 2020, it replaced the earlier Udyog Aadhar Memorandum (UAM) system. The Udyog Aadhar/Udyam registration is designed to classify enterprises based on their investment and turnover. As per the new classification metrics, all Micro, Small, and Medium Enterprises (MSMEs) in India are collectively known as MSME. Entrepreneurs can apply for MSME Registration online, and upon successful completion, the enterprise is assigned a permanent Udyam Registration Number and receives an e-certificate known as the Udyam Registration Certificate. This online, self-declaration-based Udyam Aadhar registration process aims to streamline access to government benefits.</p>
                </Section>
                <Section title="MSME Registration Online Benefits">
                    <p>Benefits of having a Udyam Registration Number for your business include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Special Preference in Government Tenders</li>
                        <li>Access to Collateral-Free Bank Loans</li>
                        <li>Interest Rate Exemption</li>
                        <li>Eligibility for Tax Rebates</li>
                        <li>Priority in Licensing and Certification</li>
                        <li>Tariff and Capital Subsidies</li>
                        <li>Electricity Bill Discounts</li>
                        <li>Protection Against Delayed Payments</li>
                        <li>Trademark and Patent Discounts</li>
                        <li>Expedited Dispute Resolution</li>
                    </ul>
                </Section>
                <Section title="Who can Apply for Udyam Registration?">
                     <p>Any individual who intends to establish a micro, small, or medium enterprise can file for Udyog Aadhar/Udyam Registration online through the Udyam Registration portal. Eligible applicants for MSME registration online include:</p>
                     <ul className="list-disc pl-5 space-y-1">
                        <li>Proprietorships</li>
                        <li>Hindu Undivided Family (HUF)</li>
                        <li>Partnership Firm</li>
                        <li>One Person Company (OPC)</li>
                        <li>Private Limited Company</li>
                        <li>Public Limited Company</li>
                        <li>Producer Company</li>
                        <li>Limited Liability Partnership (LLP)</li>
                        <li>Any Association of Persons</li>
                        <li>Co-operative Societies</li>
                     </ul>
                </Section>
                <div className="mt-8 text-center">
                    <p className="mb-4">Streamline your Udyam Registration with IndiaFilings today!</p>
                    <Button>Get Started</Button>
                </div>
            </CardContent>
        </Card>
    )
};

export default DetailsSection;


import { Button } from "@/components/ui/button";

const services = [
    { title: 'OPC REGISTRATION', description: 'Instant Name Application for Company...', image: 'https://img.indiafilings.com/images/opc-registration.jpg' },
    { title: 'LLP REGISTRATION', description: 'Instant Name Application for LLP...', image: 'https://img.indiafilings.com/images/llp-registration.jpg' },
    { title: 'PARTNERSHIP REGISTRATION', description: 'Get Your Partnership Firm in Just 5-7 Days - 100% Online & H...', image: 'https://img.indiafilings.com/images/partnership-firm-registration.jpg' },
    { title: 'INDIA BUSINESS SETUP', description: 'Setup and operate a business in India with bank account from...', image: 'https://img.indiafilings.com/images/dbs-logo-f.jpg' },
    { title: 'PRODUCER COMPANY REGISTRATION', description: 'Easily register a Producer company registration through Indi...', image: 'https://img.indiafilings.com/images/producer-company-registration.jpg' },
    { title: 'SECTION 8 COMPANY REGISTRATION', description: 'Easily register a Section 8 company through indiafilings.alo...', image: 'https://img.indiafilings.com/images/section-8-company-registration.jpg' },
    { title: 'DRUG LICENSE', description: 'IndiaFilings offers comprehensive assistance in obtaining Dr...', image: 'https://img.indiafilings.com/images/drug-license.jpg' },
    { title: 'NAME CHANGE - COMPANY', description: 'Name change for a private limited company, inclusive of name...', image: 'https://img.indiafilings.com/images/change-company-name.jpg' },
];

const ServiceCard = ({ title, description, image }: { title: string, description: string, image: string }) => (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white flex flex-col">
        <div className="bg-blue-800 text-white p-4 text-center font-bold h-24 flex items-center justify-center">
            <h3>{title}</h3>
        </div>
        <img src={image} alt={title} className="w-full h-32 object-cover"/>
        <div className="p-4 flex flex-col flex-grow">
            <p className="text-sm text-gray-600 flex-grow">{description}</p>
            <Button variant="outline" className="w-full mt-2">ADD</Button>
        </div>
    </div>
);

const ServicesGrid = () => {
    return (
        <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {services.map(service => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;

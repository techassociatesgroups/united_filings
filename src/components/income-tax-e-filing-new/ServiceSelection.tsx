
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AddToCartButton from "@/components/ui/AddToCartButton";

const ServiceSelection = () => {
  const services = [
    {
      id: "tax-consultation-1",
      title: "30 Minutes - Tax Consultation",
      price: 999,
      features: [
        "Tax Consultation",
        "Business Consultation", 
        "Legal consultation",
        "Commercial Consultation"
      ]
    },
    {
      id: "tax-consultation-2",
      title: "30 Minutes - Tax Consultation Premium",
      price: 1499,
      features: [
        "Tax Consultation", 
        "Business Consultation",
        "Legal consultation",
        "Commercial Consultation"
      ]
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Income Tax E-Filing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="p-6">
            <h3 className="font-semibold mb-4">{service.title}</h3>
            <ul className="space-y-2 mb-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-600">• {feature}</li>
              ))}
            </ul>
            <div className="text-2xl font-bold text-green-600 mb-4">
              ₹{service.price}
            </div>
            <AddToCartButton
              service={{
                id: service.id,
                name: service.title,
                price: service.price
              }}
              className="bg-green-500 hover:bg-green-600 text-white w-full"
            >
              ADD TO CART
            </AddToCartButton>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServiceSelection;

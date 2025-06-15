
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const IndiaFilingsServicesSection = () => {
    return (
        <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Effortless Income Tax e-Filing with IndiaFilings!</h2>
            <p className="text-center text-gray-600 mb-8">
            ITR filing made easy with IndiaFilings! We simplify the entire process, ensuring that your income tax return is filed accurately and on time. From auto-fetching pre-filled data to expert assistance every step of the way, we eliminate the hassle and complexities often associated with tax filing. With IndiaFilings, you can easily compare tax regimes, select your income sources, and file your return in just a few clicks—saving you both time and effort. Trust us to handle the paperwork, so you can focus on what matters most. Start your ITR filing today with IndiaFilings—your trusted partner in tax compliance!
            </p>

            <h3 className="text-xl font-bold mb-4 text-center">Income Tax Services</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-2">Prepare to File ITR Yourself?</h4>
                        <p className="text-gray-600 mb-4">Filing your Income Tax Return has never been easier with IndiaFilings! Complete your filing in just 4 simple steps, taking only a few minutes. Our platform walks you through the entire process, ensuring everything is filed accurately and on time. Whether you're a salaried individual, freelancer, or business owner, IndiaFilings Income tax e filing services makes it fast and easy to file your ITR on your own.</p>
                        <img src="/lovable-uploads/e352beda-99fb-4efc-910e-77075ea53ef1.png" alt="File ITR on your own" className="rounded-lg mb-4"/>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-2">Looking for Expert-Assisted ITR Filing?</h4>
                        <p className="text-gray-600 mb-4">If you'd prefer expert help, IndiaFilings allows you to hire a personal CA to handle your ITR filing. Our professional service guarantees your tax return is filed quickly and accurately. Our experts will guide you through the process, ensuring all details are correct and helping you maximize your refund. Let us take care of the complexities, so you can focus on what matters most!</p>
                        <img src="/lovable-uploads/f12343dd-1350-4cee-acad-81521357ac68.png" alt="Expert assisted ITR filing" className="rounded-lg mb-4"/>
                    </CardContent>
                </Card>
            </div>
            <div className="text-center mt-8">
                <Button size="lg" className="bg-green-500 hover:bg-green-600">Get Started with Effortless Tax Filing Today! Sign Up Now & File Your Income Tax Return – Fast, Secure, and Accurate!</Button>
            </div>
        </section>
    );
};

export default IndiaFilingsServicesSection;

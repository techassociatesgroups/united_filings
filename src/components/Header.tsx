import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1.5 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm capitalize text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link to="/" className="mr-6 flex items-center space-x-2">
                        <img
                            src="/indiafilings-logo.svg"
                            alt="IndiaFilings Logo"
                            className="h-6"
                        />
                    </Link>
                </div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Registrations</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    <ListItem href="/proprietorship" title="Proprietorship">
                                        For sole owners of a business.
                                    </ListItem>
                                    <ListItem href="/partnership" title="Partnership">
                                        For businesses with two or more partners.
                                    </ListItem>
                                    <ListItem href="/one-person-company" title="One Person Company">
                                        For a single person to operate a corporate entity.
                                    </ListItem>
                                    <ListItem href="/limited-liability-partnership" title="Limited Liability Partnership">
                                        Offers limited liability to its partners.
                                    </ListItem>
                                    <ListItem href="/private-limited-company" title="Private Limited Company">
                                        A privately held business entity.
                                    </ListItem>
                                    <ListItem href="/public-limited-company" title="Public Limited Company">
                                        A company whose shares can be traded publicly.
                                    </ListItem>
                                    <ListItem href="/section-8-company" title="Section 8 Company">
                                        For promoting commerce, art, science, sports, education, etc.
                                    </ListItem>
                                    <ListItem href="/trust-registration" title="Trust Registration">
                                        For charitable and religious purposes.
                                    </ListItem>
                                    <ListItem href="/producer-company" title="Producer Company">
                                        For primary producers to form a company.
                                    </ListItem>
                                    <ListItem href="/indian-subsidiary" title="Indian Subsidiary">
                                        For foreign companies to establish a presence in India.
                                    </ListItem>
                                     <ListItem href="/startup-india" title="Startup India">
                                        Registration for startups to avail government benefits.
                                    </ListItem>
                                    <ListItem href="/trade-license" title="Trade License">
                                        A license required to operate a particular trade or business.
                                    </ListItem>
                                    <ListItem href="/fssai-registration" title="FSSAI Registration">
                                        For food business operators with an annual turnover of up to Rs. 12 lakhs.
                                    </ListItem>
                                    <ListItem href="/fssai-license" title="FSSAI License">
                                        Mandatory for food businesses with turnover above Rs. 12 lakhs.
                                    </ListItem>
                                    <ListItem href="/halal-certification" title="Halal Certification">
                                        Certification for products permissible under Islamic law.
                                    </ListItem>
                                    <ListItem href="/icegate-registration" title="ICEGATE Registration">
                                        For e-filing services for trade and cargo carriers.
                                    </ListItem>
                                    <ListItem href="/import-export-code" title="Import Export Code">
                                        Required for businesses involved in import and export.
                                    </ListItem>
                                    <ListItem href="/legal-entity-identifier-code" title="Legal Entity Identifier Code">
                                        A unique global identifier for legal entities in financial transactions.
                                    </ListItem>
                                    <ListItem href="/iso-registration" title="ISO Registration">
                                        Certification for meeting international standards of quality.
                                    </ListItem>
                                    <ListItem href="/pf-registration" title="PF Registration">
                                        For employers to contribute to the Provident Fund for employees.
                                    </ListItem>
                                    <ListItem href="/esi-registration" title="ESI Registration">
                                        For providing medical and cash benefits to employees.
                                    </ListItem>
                                    <ListItem href="/professional-tax-registration" title="Professional Tax Registration">
                                        A tax levied on professionals and trades by state governments.
                                    </ListItem>
                                    <ListItem href="/rcmc-registration" title="RCMC Registration">
                                        Registration-Cum-Membership Certificate for exporters.
                                    </ListItem>
                                     <ListItem href="/rera-registration-for-agents" title="RERA Registration for Agents">
                                        Registration for real estate agents under RERA.
                                    </ListItem>
                                    <ListItem href="/12a-80g-registration" title="12A and 80G Registration">
                                        For NGOs to get tax exemption and provide tax deductions to donors.
                                    </ListItem>
                                    <ListItem href="/12a-registration" title="12A Registration">
                                        For trusts and NGOs to get exemption from income tax.
                                    </ListItem>
                                    <ListItem href="/bis-registration" title="BIS Registration">
                                        Ensures quality, safety, and reliability of products.
                                    </ListItem>
                                    <ListItem href="/barcode-registration" title="Barcode Registration">
                                        For unique identification of products in the retail supply chain.
                                    </ListItem>
                                    <ListItem href="/apeda-registration" title="APEDA Registration">
                                        For exporters of agricultural and processed food products.
                                    </ListItem>
                                    <ListItem href="/80g-registration" title="80G Registration">
                                        Allows donors to avail tax deduction for donations to certified NGOs.
                                    </ListItem>
                                    <ListItem href="/certificate-of-incumbency" title="Certificate of Incumbency">
                                        A certificate that confirms the identity of the signing authorities of a company.
                                    </ListItem>
                                    <ListItem href="/darpan-registration" title="DARPAN Registration">
                                        For NGOs and VOs to access government grants and schemes.
                                    </ListItem>
                                    <ListItem href="/digital-signature" title="Digital Signature">
                                        An electronic signature for verifying the authenticity of digital documents.
                                    </ListItem>
                                    <ListItem href="/shop-and-establishment-act" title="Shop and Establishment Act">
                                        Registration for shops and commercial establishments.
                                    </ListItem>
                                    <ListItem href="/drug-license" title="Drug License">
                                        License for manufacturing, sale, and distribution of pharmaceuticals.
                                    </ListItem>
                                    <ListItem href="/udyam-registration" title="Udyam Registration">
                                        Registration for Micro, Small, and Medium Enterprises (MSMEs).
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Consultations</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    <ListItem href="/consultation" title="Consultation">
                                        Get expert advice on business and legal matters.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>About</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    <ListItem href="/" title="About Us">
                                        Learn more about our company and services.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="ml-auto flex items-center space-x-4">
                    <Button variant="outline" size="sm">
                        Log In
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="sm" className="md:hidden">
                                <Menu className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-full sm:w-[300px]">
                            <div className="grid gap-4">
                                <Link to="/" className="flex items-center space-x-2">
                                    <img
                                        src="/indiafilings-logo.svg"
                                        alt="IndiaFilings Logo"
                                        className="h-6"
                                    />
                                </Link>
                                <Button variant="outline" size="sm">
                                    Log In
                                </Button>
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>Registrations</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                    <ListItem href="/proprietorship" title="Proprietorship">
                                                        For sole owners of a business.
                                                    </ListItem>
                                                    <ListItem href="/partnership" title="Partnership">
                                                        For businesses with two or more partners.
                                                    </ListItem>
                                                    <ListItem href="/one-person-company" title="One Person Company">
                                                        For a single person to operate a corporate entity.
                                                    </ListItem>
                                                    <ListItem href="/limited-liability-partnership" title="Limited Liability Partnership">
                                                        Offers limited liability to its partners.
                                                    </ListItem>
                                                    <ListItem href="/private-limited-company" title="Private Limited Company">
                                                        A privately held business entity.
                                                    </ListItem>
                                                    <ListItem href="/public-limited-company" title="Public Limited Company">
                                                        A company whose shares can be traded publicly.
                                                    </ListItem>
                                                    <ListItem href="/section-8-company" title="Section 8 Company">
                                                        For promoting commerce, art, science, sports, education, etc.
                                                    </ListItem>
                                                    <ListItem href="/trust-registration" title="Trust Registration">
                                                        For charitable and religious purposes.
                                                    </ListItem>
                                                    <ListItem href="/producer-company" title="Producer Company">
                                                        For primary producers to form a company.
                                                    </ListItem>
                                                    <ListItem href="/indian-subsidiary" title="Indian Subsidiary">
                                                        For foreign companies to establish a presence in India.
                                                    </ListItem>
                                                     <ListItem href="/startup-india" title="Startup India">
                                                        Registration for startups to avail government benefits.
                                                    </ListItem>
                                                    <ListItem href="/trade-license" title="Trade License">
                                                        A license required to operate a particular trade or business.
                                                    </ListItem>
                                                    <ListItem href="/fssai-registration" title="FSSAI Registration">
                                                        For food business operators with an annual turnover of up to Rs. 12 lakhs.
                                                    </ListItem>
                                                    <ListItem href="/fssai-license" title="FSSAI License">
                                                        Mandatory for food businesses with turnover above Rs. 12 lakhs.
                                                    </ListItem>
                                                    <ListItem href="/halal-certification" title="Halal Certification">
                                                        Certification for products permissible under Islamic law.
                                                    </ListItem>
                                                    <ListItem href="/icegate-registration" title="ICEGATE Registration">
                                                        For e-filing services for trade and cargo carriers.
                                                    </ListItem>
                                                    <ListItem href="/import-export-code" title="Import Export Code">
                                                        Required for businesses involved in import and export.
                                                    </ListItem>
                                                    <ListItem href="/legal-entity-identifier-code" title="Legal Entity Identifier Code">
                                                        A unique global identifier for legal entities in financial transactions.
                                                    </ListItem>
                                                    <ListItem href="/iso-registration" title="ISO Registration">
                                                        Certification for meeting international standards of quality.
                                                    </ListItem>
                                                    <ListItem href="/pf-registration" title="PF Registration">
                                                        For employers to contribute to the Provident Fund for employees.
                                                    </ListItem>
                                                    <ListItem href="/esi-registration" title="ESI Registration">
                                                        For providing medical and cash benefits to employees.
                                                    </ListItem>
                                                    <ListItem href="/professional-tax-registration" title="Professional Tax Registration">
                                                        A tax levied on professionals and trades by state governments.
                                                    </ListItem>
                                                    <ListItem href="/rcmc-registration" title="RCMC Registration">
                                                        Registration-Cum-Membership Certificate for exporters.
                                                    </ListItem>
                                                     <ListItem href="/rera-registration-for-agents" title="RERA Registration for Agents">
                                                        Registration for real estate agents under RERA.
                                                    </ListItem>
                                                    <ListItem href="/12a-80g-registration" title="12A and 80G Registration">
                                                        For NGOs to get tax exemption and provide tax deductions to donors.
                                                    </ListItem>
                                                    <ListItem href="/12a-registration" title="12A Registration">
                                                        For trusts and NGOs to get exemption from income tax.
                                                    </ListItem>
                                                    <ListItem href="/bis-registration" title="BIS Registration">
                                                        Ensures quality, safety, and reliability of products.
                                                    </ListItem>
                                                    <ListItem href="/barcode-registration" title="Barcode Registration">
                                                        For unique identification of products in the retail supply chain.
                                                    </ListItem>
                                                    <ListItem href="/apeda-registration" title="APEDA Registration">
                                                        For exporters of agricultural and processed food products.
                                                    </ListItem>
                                                    <ListItem href="/80g-registration" title="80G Registration">
                                                        Allows donors to avail tax deduction for donations to certified NGOs.
                                                    </ListItem>
                                                    <ListItem href="/certificate-of-incumbency" title="Certificate of Incumbency">
                                                        A certificate that confirms the identity of the signing authorities of a company.
                                                    </ListItem>
                                                    <ListItem href="/darpan-registration" title="DARPAN Registration">
                                                        For NGOs and VOs to access government grants and schemes.
                                                    </ListItem>
                                                    <ListItem href="/digital-signature" title="Digital Signature">
                                                        An electronic signature for verifying the authenticity of digital documents.
                                                    </ListItem>
                                                    <ListItem href="/shop-and-establishment-act" title="Shop and Establishment Act">
                                                        Registration for shops and commercial establishments.
                                                    </ListItem>
                                                    <ListItem href="/drug-license" title="Drug License">
                                                        License for manufacturing, sale, and distribution of pharmaceuticals.
                                                    </ListItem>
                                                    <ListItem href="/udyam-registration" title="Udyam Registration">
                                                        Registration for Micro, Small, and Medium Enterprises (MSMEs).
                                                    </ListItem>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>Consultations</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                    <ListItem href="/consultation" title="Consultation">
                                                        Get expert advice on business and legal matters.
                                                    </ListItem>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>About</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                    <ListItem href="/" title="About Us">
                                                        Learn more about our company and services.
                                                    </ListItem>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

export default Header;

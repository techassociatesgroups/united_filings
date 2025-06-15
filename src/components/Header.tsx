import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

const Header = () => {
  const businessRegistrationLinks = [
    {
      title: "Proprietorship",
      href: "/proprietorship",
      description: "Owned and managed by one person.",
    },
    {
      title: "Partnership",
      href: "/partnership",
      description: "Agreement between two or more individuals.",
    },
    {
      title: "One Person Company",
      href: "/one-person-company",
      description: "A single person as a company owner.",
    },
    {
      title: "Limited Liability Partnership",
      href: "/limited-liability-partnership",
      description: "Combines partnership and company benefits.",
    },
    {
      title: "Private Limited Company",
      href: "/private-limited-company",
      description: "A separate legal entity with limited liability.",
    },
    {
      title: "Public Limited Company",
      href: "/public-limited-company",
      description: "Shares offered to the public.",
    },
    {
      title: "Section 8 Company",
      href: "/section-8-company",
      description: "Promotes social welfare, not for profit.",
    },
    {
      title: "Trust Registration",
      href: "/trust-registration",
      description: "Register a trust for charitable purposes.",
    },
    {
      title: "Producer Company",
      href: "/producer-company",
      description: "Farmers or producers form a company.",
    },
    {
      title: "Indian Subsidiary",
      href: "/indian-subsidiary",
      description: "A company controlled by a foreign company.",
    },
  ];

  const registrationsLinks = [
    {
      title: "Proprietorship",
      href: "/proprietorship",
      description: "Owned and managed by one person.",
    },
    {
      title: "Partnership",
      href: "/partnership",
      description: "Agreement between two or more individuals.",
    },
    {
      title: "One Person Company",
      href: "/one-person-company",
      description: "A single person as a company owner.",
    },
    {
      title: "Limited Liability Partnership",
      href: "/limited-liability-partnership",
      description: "Combines partnership and company benefits.",
    },
    {
      title: "Private Limited Company",
      href: "/private-limited-company",
      description: "A separate legal entity with limited liability.",
    },
    {
      title: "Public Limited Company",
      href: "/public-limited-company",
      description: "Shares offered to the public.",
    },
    {
      title: "Section 8 Company",
      href: "/section-8-company",
      description: "Promotes social welfare, not for profit.",
    },
    {
      title: "Trust Registration",
      href: "/trust-registration",
      description: "Register a trust for charitable purposes.",
    },
    {
      title: "Producer Company",
      href: "/producer-company",
      description: "Farmers or producers form a company.",
    },
    {
      title: "Indian Subsidiary",
      href: "/indian-subsidiary",
      description: "A company controlled by a foreign company.",
    },
    {
      title: "Startup India",
      href: "/startup-india",
      description: "Register for Startup India",
    },
    {
      title: "Trade License",
      href: "/trade-license",
      description: "Register for Trade License",
    },
    {
      title: "FSSAI Registration",
      href: "/fssai-registration",
      description: "Register for FSSAI Registration",
    },
    {
      title: "FSSAI License",
      href: "/fssai-license",
      description: "Register for FSSAI License",
    },
    {
      title: "Halal Certification",
      href: "/halal-certification",
      description: "Register for Halal Certification",
    },
    {
      title: "Icegate Registration",
      href: "/icegate-registration",
      description: "Register for Icegate Registration",
    },
    {
      title: "Import Export Code",
      href: "/import-export-code",
      description: "Register for Import Export Code",
    },
    {
      title: "Legal Entity Identifier Code",
      href: "/legal-entity-identifier-code",
      description: "Register for Legal Entity Identifier Code",
    },
    {
      title: "ISO Registration",
      href: "/iso-registration",
      description: "Register for ISO Registration",
    },
    {
      title: "PF Registration",
      href: "/pf-registration",
      description: "Register for PF Registration",
    },
    {
      title: "ESI Registration",
      href: "/esi-registration",
      description: "Register for ESI Registration",
    },
    {
      title: "Professional Tax Registration",
      href: "/professional-tax-registration",
      description: "Register for Professional Tax Registration",
    },
    {
      title: "RCMC Registration",
      href: "/rcmc-registration",
      description: "Register for RCMC Registration",
    },
    {
      title: "RERA Registration for Agents",
      href: "/rera-registration-for-agents",
      description: "Legal process for real estate developers and agents.",
    },
    {
      title: "80G Registration",
      href: "/80g-registration",
      description: "Allow donors to claim tax deductions on donations.",
    },
    {
      title: "12A and 80G Registration",
      href: "/12a-80g-registration",
      description: "Tax exemption for NGOs and benefits for donors.",
    },
    {
      title: "12A Registration",
      href: "/12a-registration",
      description: "One-time registration for tax-exempt status for trusts, NGOs.",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/placeholder.svg" alt="Logo" className="h-8 w-8" />
          <span className="ml-2 font-bold">IndiaFilings</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Business Registration</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {businessRegistrationLinks.map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={component.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{component.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {component.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Registrations</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {registrationsLinks.map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={component.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{component.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {component.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/consultation">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Consultation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link to="/auth">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/auth">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

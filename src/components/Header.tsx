import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import React from "react"
import { Button } from "./ui/button"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img src="/lovable-uploads/8892b4d6-7b9e-4f9c-a358-2a4158a0603d.png" alt="IndiaFilings Logo" className="h-8" />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Private Limited Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          IndiaFilings
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Grow your business with our help.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/private-limited-company" title="Private Limited Company">
                    The most popular type of entity for businesses.
                  </ListItem>
                  <ListItem href="/proprietorship" title="Proprietorship">
                    A business that is owned and managed by one person.
                  </ListItem>
                  <ListItem href="/partnership" title="Partnership">
                    A business that is owned and managed by two or more persons.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Goods & Services Tax</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <ListItem href="/gst-registration" title="GST Registration">
                    Register for GST and comply with the new tax laws.
                  </ListItem>
                  <ListItem href="/gst-return-filing" title="GST Return Filing">
                    File your GST returns and stay compliant.
                  </ListItem>
                  <ListItem href="/gst-annual-return-filing-gstr9" title="GST Annual Return Filing (GSTR-9)">
                    File your GSTR-9 and stay compliant with the new tax laws.
                  </ListItem>
                  <ListItem href="/gst-lut-form" title="GST LUT Form">
                    File your LUT form and export goods without paying IGST.
                  </ListItem>
                  <ListItem href="/gst-notice" title="GST Notice">
                    Respond to GST notices and avoid penalties.
                  </ListItem>
                  <ListItem href="/gst-registration-for-foreigners" title="GST Registration for Foreigners">
                    Register for GST in India as a foreign company.
                  </ListItem>
                  <ListItem href="/gst-registration-amendment" title="GST Registration Amendment">
                    Amend your GST registration details.
                  </ListItem>
                  <ListItem href="/gst-gstr-10" title="GSTR-10 Return Filing">
                    File your final GST return after cancellation of GST registration.
                  </ListItem>
                  <ListItem href="/gst-revocation" title="GST Revocation">
                    Revoke your cancelled GST registration.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>INCOME TAX</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <ListItem href="/income-tax-e-filing" title="Income Tax e Filing">
                    File your income tax returns online.
                  </ListItem>
                  <ListItem href="/business-income-tax" title="Business Income Tax">
                    File tax returns for your business.
                  </ListItem>
                  <ListItem href="/itr-1-filing" title="ITR-1 (Sahaj) Filing">
                    File returns for individuals with salary income up to Rs. 50 lakhs.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/trademark-registration" className={navigationMenuTriggerStyle()}>
                  TRADEMARK
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline">Login</Button>
        <Button>Sign-up</Button>
      </div>
    </header>
  )
}
export default Header

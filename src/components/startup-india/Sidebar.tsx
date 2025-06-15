
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Sidebar = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Get Expert Assistance</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Enter your city" />
                    </div>
                    <div>
                        <Label htmlFor="service">Service</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="startup-india">Startup India Registration</SelectItem>
                                <SelectItem value="gst">GST Registration</SelectItem>
                                <SelectItem value="trademark">Trademark Registration</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message" />
                    </div>
                    <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">Talk to an Expert</Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default Sidebar;

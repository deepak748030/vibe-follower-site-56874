import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShoppingCart, Package, Headphones, Grid3x3, Coins, Link2, GitBranch, Crown, Baby, Bell, User, TrendingUp, Plus } from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [link, setLink] = useState("");
    const [quantity, setQuantity] = useState("");

    const services = {
        "Instagram Followers": [
            {
                id: "4179",
                name: "Instagram Followers [Speed = 20k+/Day] [Refill - 30Days♻️]✅",
                price: "₹243.68 per 1000",
                description: "❤️Start: Instant\n✔️Speed: 200K/Day\n⭐️Quality: worldwide\n♻️Refill Button: 30Days\n🛑Drop Ratio : 10-20%",
                min: 100,
                max: 200000,
                avgTime: "2 hours 11 minutes"
            },
            {
                id: "4180",
                name: "Instagram Followers [High Quality] [Refill - 60Days]",
                price: "₹350.00 per 1000",
                description: "❤️Start: 0-1 hour\n✔️Speed: 50K/Day\n⭐️Quality: High quality\n♻️Refill Button: 60Days\n🛑Drop Ratio : 5-10%",
                min: 50,
                max: 100000,
                avgTime: "3 hours"
            }
        ],
        "Instagram Likes": [
            {
                id: "5001",
                name: "Instagram Likes [Instant] [Real Looking]",
                price: "₹150.00 per 1000",
                description: "❤️Start: Instant\n✔️Speed: 100K/Day\n⭐️Quality: Real looking\n♻️Refill: No refill",
                min: 10,
                max: 50000,
                avgTime: "5 minutes"
            }
        ],
        "Telegram Members": [
            {
                id: "6001",
                name: "Telegram Members [Real Users] [30 Days Refill]",
                price: "₹500.00 per 1000",
                description: "❤️Start: 0-24 hours\n✔️Speed: 1K/Day\n⭐️Quality: Real users\n♻️Refill Button: 30Days",
                min: 100,
                max: 10000,
                avgTime: "12 hours"
            }
        ],
        "YouTube Views": [
            {
                id: "7001",
                name: "YouTube Views [Lifetime Guaranteed] [High Retention]",
                price: "₹450.00 per 1000",
                description: "❤️Start: 0-6 hours\n✔️Speed: 10K/Day\n⭐️Quality: High retention\n♻️Lifetime guarantee",
                min: 1000,
                max: 1000000,
                avgTime: "6 hours"
            }
        ]
    };

    const socialPlatforms = [
        { icon: "☰", name: "All", color: "bg-muted" },
        { icon: "✈️", name: "Telegram", color: "bg-blue-500" },
        { icon: "💬", name: "WhatsApp", color: "bg-green-500" },
        { icon: "📸", name: "Instagram", color: "bg-pink-500" },
        { icon: "❌", name: "Twitter", color: "bg-foreground" },
        { icon: "👤", name: "Facebook", color: "bg-blue-600" },
        { icon: "🎵", name: "TikTok", color: "bg-foreground" },
        { icon: "▶️", name: "YouTube", color: "bg-red-500" },
        { icon: "🌐", name: "Website", color: "bg-muted" },
        { icon: "👻", name: "Snapchat", color: "bg-yellow-400" },
        { icon: "🎮", name: "Twitch", color: "bg-purple-500" },
        { icon: "🐝", name: "Others", color: "bg-orange-500" },
        { icon: "⚫", name: "Threads", color: "bg-foreground" },
        { icon: "☁️", name: "SoundCloud", color: "bg-blue-400" },
        { icon: "▶️", name: "Rumble", color: "bg-green-600" },
        { icon: "🔴", name: "Quora", color: "bg-red-600" },
        { icon: "🎯", name: "Pinterest", color: "bg-red-500" },
        { icon: "👥", name: "OK.ru", color: "bg-orange-600" },
        { icon: "📱", name: "Mobile", color: "bg-muted" },
        { icon: "💬", name: "Discord", color: "bg-purple-600" },
        { icon: "➕", name: "More", color: "bg-muted" }
    ];

    const calculateCharge = () => {
        if (!quantity || !selectedService) return "₹0.00";
        const service = Object.values(services).flat().find(s => s.id === selectedService);
        if (!service) return "₹0.00";
        const pricePerThousand = parseFloat(service.price.match(/[\d.]+/)?.[0] || "0");
        const total = (parseInt(quantity) / 1000) * pricePerThousand;
        return `₹${total.toFixed(2)}`;
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="flex">
                {/* Sidebar */}
                <aside className="w-72 min-h-screen bg-card border-r border-border p-4 fixed left-0 top-0">
                    <div className="mb-8">
                        <img src="/placeholder.svg" alt="Logo" className="h-12" />
                    </div>

                    <nav className="space-y-2">
                        <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/orders")}>
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            New order
                        </Button>
                        <Button variant="secondary" className="w-full justify-start">
                            <Package className="mr-2 h-4 w-4" />
                            Orders
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Headphones className="mr-2 h-4 w-4" />
                            Tickets(SUPPORT)
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Grid3x3 className="mr-2 h-4 w-4" />
                            Services
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Coins className="mr-2 h-4 w-4" />
                            Add funds
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Link2 className="mr-2 h-4 w-4" />
                            API
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <GitBranch className="mr-2 h-4 w-4" />
                            Mass order
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Crown className="mr-2 h-4 w-4" />
                            Refer & Earn
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Baby className="mr-2 h-4 w-4" />
                            Child panel
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Bell className="mr-2 h-4 w-4" />
                            Updates
                        </Button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 ml-72">
                    {/* Top Header */}
                    <header className="bg-card border-b border-border p-4 flex justify-between items-center sticky top-0 z-10">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            🤝 OUR BELIEVE - QUALITY OVER QUANTITY 🤝
                        </h1>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="sm">
                                ₹0 <span className="ml-2">▼</span>
                            </Button>
                            <Button variant="ghost" size="sm">Account</Button>
                            <Button variant="ghost" size="sm">Logout</Button>
                        </div>
                    </header>

                    <div className="p-6 space-y-6">
                        {/* User Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-4">
                                        <User className="h-12 w-12 bg-muted rounded-full p-2" />
                                        <div>
                                            <h3 className="font-bold text-lg">deepakkushwah748930</h3>
                                            <p className="text-muted-foreground">Welcome to panel!</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-4">
                                        <TrendingUp className="h-12 w-12" />
                                        <div>
                                            <h3 className="text-3xl font-bold">₹0</h3>
                                            <p className="text-muted-foreground">Spent balance</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 flex items-center justify-center text-2xl">💳</div>
                                        <div>
                                            <h3 className="text-3xl font-bold">₹0</h3>
                                            <p className="text-muted-foreground">To Add more Fund</p>
                                            <Button variant="link" className="p-0 h-auto text-primary">CLICK HERE</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Important Notice */}
                        <Card>
                            <CardContent className="p-4">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="notice" className="border-none">
                                        <AccordionTrigger className="text-destructive font-semibold hover:no-underline">
                                            THINGS TO BE KNOWN BEFORE PLACING ORDER
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>All orders are processed automatically</li>
                                                <li>Please provide correct links</li>
                                                <li>We do not guarantee 100% delivery on all services</li>
                                                <li>Refunds are processed according to service terms</li>
                                                <li>Contact support for any issues</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>

                        {/* Social Platforms Grid */}
                        <Card>
                            <CardContent className="p-6">
                                <div className="grid grid-cols-7 gap-3">
                                    {socialPlatforms.map((platform, idx) => (
                                        <Button
                                            key={idx}
                                            variant="outline"
                                            className="h-16 flex flex-col items-center justify-center gap-1 hover:bg-accent"
                                        >
                                            <span className="text-2xl">{platform.icon}</span>
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Order Form and Info */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <Card className="lg:col-span-2">
                                <CardHeader>
                                    <CardTitle>Place New Order</CardTitle>
                                    <CardDescription>Select service and enter details</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="search">Search</Label>
                                        <Input id="search" placeholder="Search services..." />
                                    </div>

                                    <div>
                                        <Label htmlFor="category">Category</Label>
                                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.keys(services).map((category) => (
                                                    <SelectItem key={category} value={category}>
                                                        {category}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {selectedCategory && (
                                        <div>
                                            <Label htmlFor="service">Service</Label>
                                            <Select value={selectedService} onValueChange={setSelectedService}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {services[selectedCategory as keyof typeof services]?.map((service) => (
                                                        <SelectItem key={service.id} value={service.id}>
                                                            {service.id} - {service.name} - {service.price}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )}

                                    {selectedService && (
                                        <>
                                            <Card className="bg-muted">
                                                <CardContent className="pt-4">
                                                    <h4 className="font-semibold mb-2">Description</h4>
                                                    <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
                                                        {services[selectedCategory as keyof typeof services]?.find(s => s.id === selectedService)?.description}
                                                    </pre>
                                                </CardContent>
                                            </Card>

                                            <div>
                                                <Label htmlFor="link">Link</Label>
                                                <Input
                                                    id="link"
                                                    placeholder="Enter your link here"
                                                    value={link}
                                                    onChange={(e) => setLink(e.target.value)}
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="quantity">Quantity</Label>
                                                <Input
                                                    id="quantity"
                                                    type="number"
                                                    placeholder={`Min: ${services[selectedCategory as keyof typeof services]?.find(s => s.id === selectedService)?.min} - Max: ${services[selectedCategory as keyof typeof services]?.find(s => s.id === selectedService)?.max.toLocaleString()}`}
                                                    value={quantity}
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                                                <div>
                                                    <p className="text-sm text-muted-foreground">Average time</p>
                                                    <p className="font-semibold">{services[selectedCategory as keyof typeof services]?.find(s => s.id === selectedService)?.avgTime}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">Charge</p>
                                                    <p className="font-semibold text-primary">{calculateCharge()}</p>
                                                </div>
                                            </div>

                                            <Button className="w-full" size="lg">
                                                Submit Order
                                            </Button>
                                        </>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Info Card */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>What is SMM Panel?</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground">
                                        <strong>SMM Panel</strong> is used to access Social Networks, and making use of it for profits. You can use the <strong>SMM Panel</strong> to get your marketing move on to the next stage of developing plans for your product or services. The social media used includes Facebook, twitter, Instagram, YouTube, LinkedIn and more. With this cheapest SMM panel you can grow your business rapidly. Buy Best SMM Panel Services from SMMPanel and grow your business. Cheapestsmmpanels is the best and cheapest smm panel in the market
                                    </p>

                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="conditions">
                                            <AccordionTrigger>IMPORTANT CONDITIONS FOR PLACING ORDERS</AccordionTrigger>
                                            <AccordionContent className="text-sm text-muted-foreground space-y-2">
                                                <p>• Make sure your account is public before placing order</p>
                                                <p>• Never change your username during order processing</p>
                                                <p>• Orders cannot be cancelled once submitted</p>
                                                <p>• Refund/Refill available only for eligible services</p>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="why-smm">
                                            <AccordionTrigger>What makes people look for SMM panels?</AccordionTrigger>
                                            <AccordionContent className="text-sm text-muted-foreground">
                                                SMM panels help businesses and individuals grow their social media presence quickly and affordably, providing various services to boost engagement.
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="services">
                                            <AccordionTrigger>What SMM services does your panel have?</AccordionTrigger>
                                            <AccordionContent className="text-sm text-muted-foreground">
                                                We offer followers, likes, views, comments, subscribers, and more across all major social media platforms including Instagram, Facebook, YouTube, TikTok, Twitter, and more.
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="safe">
                                            <AccordionTrigger>Is it safe to purchase your SMM services?</AccordionTrigger>
                                            <AccordionContent className="text-sm text-muted-foreground">
                                                Yes! We use secure payment methods and deliver services gradually to ensure account safety. All our services comply with platform guidelines.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default Orders;

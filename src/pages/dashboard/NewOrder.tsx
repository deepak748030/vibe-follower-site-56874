import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { servicesAPI, ordersAPI } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";

const NewOrder = () => {
    const { user, refreshUser } = useAuth();
    const [category, setCategory] = useState("");
    const [service, setService] = useState("");
    const [link, setLink] = useState("");
    const [quantity, setQuantity] = useState("");
    const [services, setServices] = useState<any[]>([]);
    const [selectedService, setSelectedService] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [loadingServices, setLoadingServices] = useState(false);

    useEffect(() => {
        fetchServices();
    }, [category]);

    useEffect(() => {
        if (service && services.length > 0) {
            const found = services.find(s => s._id === service);
            setSelectedService(found);
        }
    }, [service, services]);

    const fetchServices = async () => {
        setLoadingServices(true);
        try {
            const response = await servicesAPI.getAll(category ? { category } : undefined);
            setServices(response.data);
        } catch (error: any) {
            toast.error(error.message || "Failed to fetch services");
        } finally {
            setLoadingServices(false);
        }
    };

    const calculateCharge = () => {
        if (!selectedService || !quantity) return 0;
        const qty = parseInt(quantity);
        return ((selectedService.rate / 1000) * qty).toFixed(2);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!service || !link || !quantity) {
            toast.error("Please fill all fields");
            return;
        }

        setLoading(true);
        try {
            await ordersAPI.create({
                service,
                link,
                quantity: parseInt(quantity)
            });
            toast.success("Order placed successfully!");
            setLink("");
            setQuantity("");
            await refreshUser();
        } catch (error: any) {
            toast.error(error.message || "Failed to place order");
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout>
            <div className="p-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">New Order</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Order Form */}
                    <div className="lg:col-span-2">
                        <Card className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select value={category} onValueChange={setCategory}>
                                        <SelectTrigger id="category">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="">All Categories</SelectItem>
                                            <SelectItem value="instagram">Instagram</SelectItem>
                                            <SelectItem value="facebook">Facebook</SelectItem>
                                            <SelectItem value="youtube">YouTube</SelectItem>
                                            <SelectItem value="twitter">Twitter</SelectItem>
                                            <SelectItem value="tiktok">TikTok</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="service">Service</Label>
                                    <Select value={service} onValueChange={setService} disabled={loadingServices}>
                                        <SelectTrigger id="service">
                                            <SelectValue placeholder={loadingServices ? "Loading services..." : "Select service"} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {services && services.map((s) => (
                                                <SelectItem key={s._id} value={s._id}>
                                                    {s.name} - ₹{s.rate}/1k
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="link">Link</Label>
                                    <Input
                                        id="link"
                                        type="url"
                                        placeholder="Enter your profile/post URL"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="quantity">Quantity</Label>
                                    <Input
                                        id="quantity"
                                        type="number"
                                        placeholder="Enter quantity"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        min={selectedService?.min || 0}
                                        max={selectedService?.max || 10000}
                                    />
                                    {selectedService && (
                                        <p className="text-xs text-muted-foreground">
                                            Min: {selectedService.min} - Max: {selectedService.max}
                                        </p>
                                    )}
                                </div>

                                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Charge:</span>
                                        <span className="font-semibold">₹{calculateCharge()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Your Balance:</span>
                                        <span className="font-semibold">₹{user?.balance?.toFixed(2) || '0.00'}</span>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full gradient-primary" disabled={loading}>
                                    {loading ? "Placing Order..." : "Submit Order"}
                                </Button>
                            </form>
                        </Card>
                    </div>

                    {/* Service Info Sidebar */}
                    <div className="space-y-6">
                        {selectedService && (
                            <Card className="p-6">
                                <h3 className="font-semibold mb-4">Service Information</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Rate per 1000:</span>
                                        <span className="font-semibold">₹{selectedService.rate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Min order:</span>
                                        <span className="font-semibold">{selectedService.min}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Max order:</span>
                                        <span className="font-semibold">{selectedService.max}</span>
                                    </div>
                                </div>
                                {selectedService.description && (
                                    <div className="mt-4 pt-4 border-t">
                                        <p className="text-xs text-muted-foreground">{selectedService.description}</p>
                                    </div>
                                )}
                            </Card>
                        )}

                        <Card className="p-6 bg-primary/5 border-primary/20">
                            <h3 className="font-semibold mb-2 text-primary">Quick Tip</h3>
                            <p className="text-sm text-muted-foreground">
                                Make sure your profile is public before placing an order. Private accounts cannot be processed.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default NewOrder;

import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const NewOrder = () => {
    const [category, setCategory] = useState("");
    const [service, setService] = useState("");
    const [link, setLink] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Order placed successfully!");
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
                                            <SelectItem value="instagram">Instagram</SelectItem>
                                            <SelectItem value="facebook">Facebook</SelectItem>
                                            <SelectItem value="youtube">YouTube</SelectItem>
                                            <SelectItem value="twitter">Twitter</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="service">Service</Label>
                                    <Select value={service} onValueChange={setService}>
                                        <SelectTrigger id="service">
                                            <SelectValue placeholder="Select service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="followers">Followers</SelectItem>
                                            <SelectItem value="likes">Likes</SelectItem>
                                            <SelectItem value="views">Views</SelectItem>
                                            <SelectItem value="comments">Comments</SelectItem>
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
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Min: 100 - Max: 10,000
                                    </p>
                                </div>

                                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Charge:</span>
                                        <span className="font-semibold">₹0.00</span>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full gradient-primary">
                                    Submit Order
                                </Button>
                            </form>
                        </Card>
                    </div>

                    {/* Service Info Sidebar */}
                    <div className="space-y-6">
                        <Card className="p-6">
                            <h3 className="font-semibold mb-4">Service Information</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Rate per 1000:</span>
                                    <span className="font-semibold">₹50.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Min order:</span>
                                    <span className="font-semibold">100</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Max order:</span>
                                    <span className="font-semibold">10,000</span>
                                </div>
                            </div>
                        </Card>

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

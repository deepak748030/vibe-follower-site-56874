import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const MassOrder = () => {
    const [orders, setOrders] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!orders.trim()) {
            toast.error("Please enter at least one order");
            return;
        }
        toast.success("Mass orders submitted successfully!");
        setOrders("");
    };

    return (
        <DashboardLayout>
            <div className="p-6 max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold">Mass Order</h1>

                <Card className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="orders">One order per line in format</Label>
                            <div className="bg-muted/50 p-3 rounded-lg mb-3">
                                <code className="text-sm text-muted-foreground">
                                    service_id | link | quantity
                                </code>
                            </div>
                            <Textarea
                                id="orders"
                                placeholder="Example:&#10;1234 | https://instagram.com/username | 1000&#10;5678 | https://facebook.com/page | 500"
                                value={orders}
                                onChange={(e) => setOrders(e.target.value)}
                                rows={15}
                                className="font-mono text-sm"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold h-12"
                        >
                            Submit
                        </Button>
                    </form>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/20">
                    <h3 className="font-semibold mb-3 text-primary">Instructions</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Each line should contain one order in the specified format</li>
                        <li>• Use pipe symbol (|) to separate service ID, link, and quantity</li>
                        <li>• You can submit multiple orders at once</li>
                        <li>• Make sure service IDs are valid</li>
                        <li>• All links must be publicly accessible</li>
                    </ul>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default MassOrder;

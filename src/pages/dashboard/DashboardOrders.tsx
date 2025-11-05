import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { ordersAPI } from "@/lib/api";
import { toast } from "sonner";
import { format } from "date-fns";

const DashboardOrders = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const filters = [
        { id: "all", label: "All" },
        { id: "pending", label: "Pending" },
        { id: "in-progress", label: "In progress" },
        { id: "completed", label: "Completed" },
        { id: "partial", label: "Partial" },
        { id: "processing", label: "Processing" },
        { id: "canceled", label: "Canceled" },
    ];

    useEffect(() => {
        fetchOrders();
    }, [activeFilter]);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const response = await ordersAPI.getAll(
                activeFilter !== "all" ? { status: activeFilter } : undefined
            );
            setOrders(response.data);
        } catch (error: any) {
            toast.error(error.message || "Failed to fetch orders");
        } finally {
            setLoading(false);
        }
    };

    const filteredOrders = orders.filter((order) =>
        order.orderId.toString().includes(searchQuery) ||
        order.link.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        const statusLower = status.toLowerCase();
        if (statusLower === "completed") return "bg-green-500/10 text-green-500";
        if (statusLower === "pending") return "bg-yellow-500/10 text-yellow-500";
        if (statusLower === "in-progress" || statusLower === "processing") return "bg-blue-500/10 text-blue-500";
        if (statusLower === "partial") return "bg-orange-500/10 text-orange-500";
        return "bg-red-500/10 text-red-500";
    };

    return (
        <DashboardLayout>
            <div className="p-6 max-w-7xl mx-auto space-y-6">
                {/* Support Banner */}
                <Card className="p-4 bg-primary/5 border-primary/20">
                    <p className="text-sm">
                        <span className="font-semibold">HAVING ANY ISSUE IN ORDERS? </span>
                        <a href="/dashboard/tickets" className="text-primary hover:underline font-semibold">
                            CLICK HERE TO SEND TICKET
                        </a>
                    </p>
                </Card>

                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                    {filters.map((filter) => (
                        <Button
                            key={filter.id}
                            variant={activeFilter === filter.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveFilter(filter.id)}
                            className={activeFilter === filter.id ? "gradient-primary" : ""}
                        >
                            {filter.label}
                        </Button>
                    ))}
                </div>

                {/* Search */}
                <Card className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search orders..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </Card>

                {/* Orders Table */}
                <Card className="p-6">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Link</TableHead>
                                    <TableHead>Charge</TableHead>
                                    <TableHead>Start count</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Service</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Remains</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={9} className="text-center py-12">
                                            Loading orders...
                                        </TableCell>
                                    </TableRow>
                                ) : filteredOrders.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={9} className="text-center text-muted-foreground py-12">
                                            No orders found
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredOrders.map((order) => (
                                        <TableRow key={order._id}>
                                            <TableCell className="font-medium">{order.orderId}</TableCell>
                                            <TableCell>{format(new Date(order.createdAt), 'MMM dd, yyyy')}</TableCell>
                                            <TableCell className="max-w-[200px] truncate">
                                                {order.link}
                                            </TableCell>
                                            <TableCell>₹{order.charge?.toFixed(2)}</TableCell>
                                            <TableCell>{order.startCount || 0}</TableCell>
                                            <TableCell>{order.quantity}</TableCell>
                                            <TableCell>{order.service?.name || order.serviceId}</TableCell>
                                            <TableCell>
                                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                                    {order.status}
                                                </span>
                                            </TableCell>
                                            <TableCell>{order.remains || 0}</TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default DashboardOrders;

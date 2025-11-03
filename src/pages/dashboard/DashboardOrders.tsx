import { useState } from "react";
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

const DashboardOrders = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");

    const filters = [
        { id: "all", label: "All" },
        { id: "pending", label: "Pending" },
        { id: "in-progress", label: "In progress" },
        { id: "completed", label: "Completed" },
        { id: "partial", label: "Partial" },
        { id: "processing", label: "Processing" },
        { id: "canceled", label: "Canceled" },
    ];

    // Mock orders data
    const orders = [
        // Empty for now - would be populated from backend
    ];

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
                                {orders.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={9} className="text-center text-muted-foreground py-12">
                                            No orders found
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    orders.map((order: any) => (
                                        <TableRow key={order.id}>
                                            <TableCell className="font-medium">{order.id}</TableCell>
                                            <TableCell>{order.date}</TableCell>
                                            <TableCell className="max-w-[200px] truncate">
                                                {order.link}
                                            </TableCell>
                                            <TableCell>₹{order.charge}</TableCell>
                                            <TableCell>{order.startCount}</TableCell>
                                            <TableCell>{order.quantity}</TableCell>
                                            <TableCell>{order.service}</TableCell>
                                            <TableCell>
                                                <span
                                                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${order.status === "Completed"
                                                            ? "bg-green-500/10 text-green-500"
                                                            : order.status === "Pending"
                                                                ? "bg-yellow-500/10 text-yellow-500"
                                                                : order.status === "In progress"
                                                                    ? "bg-blue-500/10 text-blue-500"
                                                                    : "bg-red-500/10 text-red-500"
                                                        }`}
                                                >
                                                    {order.status}
                                                </span>
                                            </TableCell>
                                            <TableCell>{order.remains}</TableCell>
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

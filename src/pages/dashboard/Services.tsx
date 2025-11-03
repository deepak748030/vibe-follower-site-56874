import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";

const Services = () => {
    const [searchQuery, setSearchQuery] = useState("");

    // Mock services data
    const services = [
        {
            id: 1,
            name: "Instagram Followers - High Quality",
            category: "Instagram",
            rate: "₹45.00",
            min: 100,
            max: 100000,
        },
        {
            id: 2,
            name: "Facebook Page Likes - Real",
            category: "Facebook",
            rate: "₹40.00",
            min: 100,
            max: 50000,
        },
        {
            id: 3,
            name: "YouTube Views - Instant",
            category: "YouTube",
            rate: "₹35.00",
            min: 1000,
            max: 1000000,
        },
    ];

    const filteredServices = services.filter(
        (service) =>
            service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <DashboardLayout>
            <div className="p-6 max-w-7xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold">Services</h1>

                {/* Search */}
                <Card className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search services..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </Card>

                {/* Services Table */}
                <Card className="p-6">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Rate/1000</TableHead>
                                    <TableHead>Min Order</TableHead>
                                    <TableHead>Max Order</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredServices.map((service) => (
                                    <TableRow key={service.id}>
                                        <TableCell className="font-medium">{service.id}</TableCell>
                                        <TableCell>{service.name}</TableCell>
                                        <TableCell>
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                {service.category}
                                            </span>
                                        </TableCell>
                                        <TableCell className="font-semibold">{service.rate}</TableCell>
                                        <TableCell>{service.min.toLocaleString()}</TableCell>
                                        <TableCell>{service.max.toLocaleString()}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default Services;

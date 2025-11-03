import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const Tickets = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [subject, setSubject] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");

    // Mock tickets data
    const tickets = [
        // Empty for now - would be populated from backend
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Support ticket created successfully!");
        setIsDialogOpen(false);
        setSubject("");
        setCategory("");
        setMessage("");
    };

    return (
        <DashboardLayout>
            <div className="p-6 max-w-7xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Support Tickets</h1>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button className="gradient-primary">
                                <Plus className="w-4 h-4 mr-2" />
                                New Ticket
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                                <DialogTitle>Create Support Ticket</DialogTitle>
                                <DialogDescription>
                                    Describe your issue and our team will get back to you soon.
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        placeholder="Brief description of your issue"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select value={category} onValueChange={setCategory} required>
                                        <SelectTrigger id="category">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="order-issue">Order Issue</SelectItem>
                                            <SelectItem value="payment">Payment Issue</SelectItem>
                                            <SelectItem value="technical">Technical Problem</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Provide detailed information about your issue..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={6}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full gradient-primary">
                                    Submit Ticket
                                </Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

                <Card className="p-6">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Ticket ID</TableHead>
                                    <TableHead>Subject</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Created</TableHead>
                                    <TableHead>Last Updated</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tickets.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center text-muted-foreground py-12">
                                            No support tickets yet. Create one if you need help!
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    tickets.map((ticket: any) => (
                                        <TableRow key={ticket.id}>
                                            <TableCell className="font-medium">#{ticket.id}</TableCell>
                                            <TableCell>{ticket.subject}</TableCell>
                                            <TableCell>{ticket.category}</TableCell>
                                            <TableCell>
                                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium`}>
                                                    {ticket.status}
                                                </span>
                                            </TableCell>
                                            <TableCell>{ticket.created}</TableCell>
                                            <TableCell>{ticket.updated}</TableCell>
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

export default Tickets;

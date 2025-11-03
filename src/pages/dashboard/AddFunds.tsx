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
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

const AddFunds = () => {
    const [paymentMethod, setPaymentMethod] = useState("upi");
    const [amount, setAmount] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Payment request initiated. Please complete the payment.");
    };

    // Mock transaction history
    const transactions = [
        // Empty for now - would be populated from backend
    ];

    return (
        <DashboardLayout>
            <div className="p-6 max-w-7xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold">Add Funds</h1>

                {/* Payment Form */}
                <Card className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
                        <div className="space-y-2">
                            <Label htmlFor="method">Method</Label>
                            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                                <SelectTrigger id="method">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="upi">UPI/Paytm/Gpay/Phonepe/Whatsapp/Others</SelectItem>
                                    <SelectItem value="card">Credit/Debit Card</SelectItem>
                                    <SelectItem value="netbanking">Net Banking</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Instruction</Label>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <p className="font-semibold text-center mb-3">Steps To Add Funds :-</p>
                                <ol className="space-y-1 text-sm text-muted-foreground">
                                    <li>1. Enter Amount</li>
                                    <li>2. Enter Phone Number</li>
                                    <li>3. Click on Pay</li>
                                </ol>
                                <p className="text-sm text-muted-foreground mt-3 text-center">
                                    After That You Get Qr Code just scan it & Pay
                                </p>
                                <p className="text-sm text-muted-foreground mt-2 text-center">
                                    It Support All Payments App Googlepay, Phonepe, paytm, Bhimupi, Banking Apps, Fampay And all others
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="amount">Amount</Label>
                            <Input
                                id="amount"
                                type="number"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                min="10"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold h-12"
                        >
                            Pay
                        </Button>
                    </form>
                </Card>

                {/* Transaction History */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {transactions.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                                            No transactions yet
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    transactions.map((transaction: any) => (
                                        <TableRow key={transaction.id}>
                                            <TableCell>{transaction.id}</TableCell>
                                            <TableCell>{transaction.date}</TableCell>
                                            <TableCell>{transaction.method}</TableCell>
                                            <TableCell className="text-right">₹{transaction.amount}</TableCell>
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

export default AddFunds;

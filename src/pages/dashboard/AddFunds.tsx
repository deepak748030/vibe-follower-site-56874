import { useState, useEffect } from "react";
import { Wallet } from "lucide-react";
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
import { paymentsAPI } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";

const AddFunds = () => {
    const { refreshUser } = useAuth();
    const [paymentMethod, setPaymentMethod] = useState("upi");
    const [amount, setAmount] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [transactions, setTransactions] = useState<any[]>([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await paymentsAPI.getTransactions();
            setTransactions(response.data);
        } catch (error: any) {
            console.error("Failed to fetch transactions:", error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!amount || parseFloat(amount) < 10) {
            toast.error("Minimum amount is ₹10");
            return;
        }

        setLoading(true);
        try {
            await paymentsAPI.addFunds({
                amount: parseFloat(amount),
                method: paymentMethod,
                phone
            });
            toast.success("Payment request initiated. Please complete the payment.");
            setAmount("");
            setPhone("");
            await refreshUser();
            await fetchTransactions();
        } catch (error: any) {
            toast.error(error.message || "Failed to initiate payment");
        } finally {
            setLoading(false);
        }
    };

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
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Pay"}
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
                                        <TableCell colSpan={4} className="text-center py-12">
                                            <div className="flex flex-col items-center space-y-2">
                                                <Wallet className="w-12 h-12 text-muted-foreground" />
                                                <p className="text-muted-foreground">No transactions yet</p>
                                                <p className="text-xs text-muted-foreground">Your payment history will appear here</p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    transactions.map((transaction: any) => (
                                        <TableRow key={transaction._id}>
                                            <TableCell>{transaction.transactionId || transaction._id}</TableCell>
                                            <TableCell>{format(new Date(transaction.createdAt), 'MMM dd, yyyy')}</TableCell>
                                            <TableCell className="capitalize">{transaction.method}</TableCell>
                                            <TableCell className="text-right">₹{transaction.amount.toFixed(2)}</TableCell>
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

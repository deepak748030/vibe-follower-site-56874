import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

const ReferEarn = () => {
    const referralLink = "https://cheapestsmmpanels.com/ref/oSxje";
    const commissionRate = "3%";
    const minimumPayout = "₹10.00";

    const stats = {
        visits: 0,
        registrations: 0,
        referrals: 0,
        conversionRate: "0.00%",
        totalEarnings: "₹0.00",
        availableEarnings: "₹0.00",
    };

    const payouts = [
        // Empty for now - would be populated from backend
    ];

    const handleCopyLink = () => {
        navigator.clipboard.writeText(referralLink);
        toast.success("Referral link copied to clipboard!");
    };

    return (
        <DashboardLayout>
            <div className="p-6 max-w-7xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold">Refer & Earn</h1>

                {/* Referral Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="p-6">
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Referral link</h3>
                        <div className="flex items-center space-x-2">
                            <code className="flex-1 text-sm bg-muted/50 p-2 rounded truncate">
                                {referralLink}
                            </code>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={handleCopyLink}
                                className="shrink-0"
                            >
                                <Copy className="w-4 h-4" />
                            </Button>
                        </div>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Commission rate</h3>
                        <p className="text-3xl font-bold text-primary">{commissionRate}</p>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Minimum payout</h3>
                        <p className="text-3xl font-bold">{minimumPayout}</p>
                    </Card>
                </div>

                {/* Statistics Table */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Statistics</h2>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Visits</TableHead>
                                    <TableHead>Registrations</TableHead>
                                    <TableHead>Referrals</TableHead>
                                    <TableHead>Conversion rate</TableHead>
                                    <TableHead>Total earnings</TableHead>
                                    <TableHead>Available earnings</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">{stats.visits}</TableCell>
                                    <TableCell>{stats.registrations}</TableCell>
                                    <TableCell>{stats.referrals}</TableCell>
                                    <TableCell>{stats.conversionRate}</TableCell>
                                    <TableCell>{stats.totalEarnings}</TableCell>
                                    <TableCell>{stats.availableEarnings}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </Card>

                {/* Payout History */}
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Payout History</h2>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Payout date</TableHead>
                                    <TableHead>Payout amount</TableHead>
                                    <TableHead>Payout status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {payouts.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                                            No payouts yet
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    payouts.map((payout: any, index: number) => (
                                        <TableRow key={index}>
                                            <TableCell>{payout.date}</TableCell>
                                            <TableCell>{payout.amount}</TableCell>
                                            <TableCell>{payout.status}</TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </Card>

                {/* How it Works */}
                <Card className="p-6 bg-primary/5 border-primary/20">
                    <h3 className="font-semibold mb-3 text-primary text-lg">How Referral Program Works</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Share your unique referral link with friends and followers</li>
                        <li>• Earn {commissionRate} commission on every order placed by your referrals</li>
                        <li>• Minimum payout amount is {minimumPayout}</li>
                        <li>• Payouts are processed automatically when threshold is reached</li>
                        <li>• Track your earnings and statistics in real-time</li>
                    </ul>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default ReferEarn;

import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Wallet, ShoppingCart, Users, TrendingUp } from "lucide-react";

const Home = () => {
    const { user } = useAuth();

    const stats = [
        {
            title: "Balance",
            value: `₹${user?.balance?.toFixed(2) || '0.00'}`,
            icon: Wallet,
            color: "text-green-600",
            bg: "bg-green-100"
        },
        {
            title: "Total Orders",
            value: "0",
            icon: ShoppingCart,
            color: "text-blue-600",
            bg: "bg-blue-100"
        },
        {
            title: "Referrals",
            value: user?.referralStats?.count || 0,
            icon: Users,
            color: "text-purple-600",
            bg: "bg-purple-100"
        },
        {
            title: "Referral Earnings",
            value: `₹${user?.referralEarnings?.toFixed(2) || '0.00'}`,
            icon: TrendingUp,
            color: "text-orange-600",
            bg: "bg-orange-100"
        },
    ];

    return (
        <DashboardLayout>
            <div className="p-6 space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
                    <p className="text-muted-foreground mt-2">Here's what's happening with your account today.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <Card key={stat.title} className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                                    <p className="text-2xl font-bold mt-2">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-full ${stat.bg}`}>
                                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <a
                            href="/dashboard/new-order"
                            className="p-4 border rounded-lg hover:bg-accent transition-colors"
                        >
                            <h3 className="font-semibold mb-2">New Order</h3>
                            <p className="text-sm text-muted-foreground">Place a new order for services</p>
                        </a>
                        <a
                            href="/dashboard/add-funds"
                            className="p-4 border rounded-lg hover:bg-accent transition-colors"
                        >
                            <h3 className="font-semibold mb-2">Add Funds</h3>
                            <p className="text-sm text-muted-foreground">Top up your account balance</p>
                        </a>
                        <a
                            href="/dashboard/refer-earn"
                            className="p-4 border rounded-lg hover:bg-accent transition-colors"
                        >
                            <h3 className="font-semibold mb-2">Refer & Earn</h3>
                            <p className="text-sm text-muted-foreground">Invite friends and earn commissions</p>
                        </a>
                    </div>
                </Card>

                {user?.referralCode && (
                    <Card className="p-6 bg-primary/5 border-primary/20">
                        <h2 className="text-xl font-semibold mb-2">Your Referral Code</h2>
                        <p className="text-sm text-muted-foreground mb-4">
                            Share this code with friends and earn commissions on their orders
                        </p>
                        <div className="flex items-center gap-4">
                            <code className="px-4 py-2 bg-background rounded-lg text-lg font-mono font-semibold">
                                {user.referralCode}
                            </code>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(user.referralCode);
                                }}
                                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Copy Code
                            </button>
                        </div>
                    </Card>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Home;

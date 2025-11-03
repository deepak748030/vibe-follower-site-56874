import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const ChildPanel = () => {
    return (
        <DashboardLayout>
            <div className="p-6 max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold">Child Panel</h1>

                <Card className="p-12">
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                <AlertCircle className="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold">Child Panel Feature</h2>
                        <p className="text-muted-foreground max-w-md mx-auto">
                            Create and manage your own white-label SMM panel. Contact support to enable this feature for your account.
                        </p>
                        <Button className="gradient-primary mt-4">
                            Contact Support
                        </Button>
                    </div>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/20">
                    <h3 className="font-semibold mb-3 text-primary text-lg">What is Child Panel?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Create your own branded SMM panel</li>
                        <li>• Set custom pricing for services</li>
                        <li>• Manage your own customers</li>
                        <li>• Earn profits on price differences</li>
                        <li>• Automated order processing</li>
                    </ul>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default ChildPanel;

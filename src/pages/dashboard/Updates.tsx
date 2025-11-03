import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";

const Updates = () => {
    const updates = [
        {
            id: 1,
            date: "2025-01-15",
            title: "New Instagram Services Added",
            description: "We've added 5 new high-quality Instagram services with instant delivery.",
            type: "feature",
        },
        {
            id: 2,
            date: "2025-01-10",
            title: "System Maintenance Completed",
            description: "Our platform has been upgraded for better performance and reliability.",
            type: "maintenance",
        },
    ];

    return (
        <DashboardLayout>
            <div className="p-6 max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold">Updates & Announcements</h1>

                <div className="space-y-4">
                    {updates.map((update) => (
                        <Card key={update.id} className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Bell className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold text-lg">{update.title}</h3>
                                        <span className="text-xs text-muted-foreground">{update.date}</span>
                                    </div>
                                    <p className="text-muted-foreground">{update.description}</p>
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${update.type === "feature"
                                            ? "bg-green-500/10 text-green-500"
                                            : "bg-blue-500/10 text-blue-500"
                                        }`}>
                                        {update.type === "feature" ? "New Feature" : "Maintenance"}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {updates.length === 0 && (
                    <Card className="p-12">
                        <div className="text-center space-y-2">
                            <Bell className="w-12 h-12 text-muted-foreground mx-auto" />
                            <h3 className="text-lg font-semibold">No updates yet</h3>
                            <p className="text-muted-foreground">Check back later for announcements and updates.</p>
                        </div>
                    </Card>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Updates;

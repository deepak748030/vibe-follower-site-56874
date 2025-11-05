import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";
import { updatesAPI } from "@/lib/api";
import { format } from "date-fns";

const Updates = () => {
    const [updates, setUpdates] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUpdates();
    }, []);

    const fetchUpdates = async () => {
        try {
            const response = await updatesAPI.getAll();
            setUpdates(response.data);
        } catch (error: any) {
            console.error("Failed to fetch updates:", error);
        } finally {
            setLoading(false);
        }
    };

    const getTypeColor = (type: string) => {
        if (type === "feature") return "bg-green-500/10 text-green-500";
        if (type === "maintenance") return "bg-blue-500/10 text-blue-500";
        if (type === "announcement") return "bg-purple-500/10 text-purple-500";
        return "bg-gray-500/10 text-gray-500";
    };

    const getTypeLabel = (type: string) => {
        if (type === "feature") return "New Feature";
        if (type === "maintenance") return "Maintenance";
        if (type === "announcement") return "Announcement";
        return type;
    };

    return (
        <DashboardLayout>
            <div className="p-6 max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold">Updates & Announcements</h1>

                {loading ? (
                    <Card className="p-12">
                        <div className="text-center">
                            <p className="text-muted-foreground">Loading updates...</p>
                        </div>
                    </Card>
                ) : updates.length === 0 ? (
                    <Card className="p-12">
                        <div className="text-center space-y-2">
                            <Bell className="w-12 h-12 text-muted-foreground mx-auto" />
                            <h3 className="text-lg font-semibold">No updates yet</h3>
                            <p className="text-muted-foreground">Check back later for announcements and updates.</p>
                        </div>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {updates.map((update) => (
                            <Card key={update._id} className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Bell className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-semibold text-lg">{update.title}</h3>
                                            <span className="text-xs text-muted-foreground">
                                                {format(new Date(update.createdAt), 'MMM dd, yyyy')}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground">{update.description}</p>
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${getTypeColor(update.type)}`}>
                                            {getTypeLabel(update.type)}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Updates;

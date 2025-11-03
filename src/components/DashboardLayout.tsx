import { ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    ShoppingCart,
    Package,
    Ticket,
    Layers,
    Wallet,
    Code,
    Boxes,
    Gift,
    Users,
    Bell,
    LogOut,
    Menu,
    X
} from "lucide-react";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { toast } from "sonner";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [balance] = useState("0");

    const navItems = [
        { icon: ShoppingCart, label: "New order", path: "/dashboard/new-order" },
        { icon: Package, label: "Orders", path: "/dashboard/orders" },
        { icon: Ticket, label: "Tickets(SUPPORT)", path: "/dashboard/tickets" },
        { icon: Layers, label: "Services", path: "/dashboard/services" },
        { icon: Wallet, label: "Add funds", path: "/dashboard/add-funds" },
        { icon: Code, label: "API", path: "/dashboard/api" },
        { icon: Boxes, label: "Mass order", path: "/dashboard/mass-order" },
        { icon: Gift, label: "Refer & Earn", path: "/dashboard/refer-earn" },
        { icon: Users, label: "Child panel", path: "/dashboard/child-panel" },
        { icon: Bell, label: "Updates", path: "/dashboard/updates" },
    ];

    const handleLogout = () => {
        toast.success("Logged out successfully");
        navigate("/auth");
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col bg-sidebar border-r border-sidebar-border">
                <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
                    {/* Logo */}
                    <div className="flex items-center px-6 mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                                <span className="text-white font-bold text-lg">C</span>
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-sidebar-foreground">CHEAPEST</h1>
                                <p className="text-xs text-muted-foreground">SMM PANELS</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-3 space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`
                    flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all
                    ${isActive
                                            ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                                            : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                                        }
                  `}
                                >
                                    <Icon className="w-5 h-5 mr-3" />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Social Links - Bottom of Sidebar */}
                    <div className="p-4 space-y-2">
                        <a
                            href="https://t.me/cheapestsmmpanel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                            </svg>
                            <span className="text-white font-medium">Telegram</span>
                        </a>
                        <a
                            href="https://wa.me/yourwhatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="text-white font-medium">WhatsApp</span>
                        </a>
                    </div>
                </div>
            </aside>

            {/* Mobile header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar border-b border-sidebar-border">
                <div className="flex items-center justify-between px-4 py-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                            <span className="text-white font-bold text-sm">C</span>
                        </div>
                        <div>
                            <h1 className="text-sm font-bold text-sidebar-foreground">CHEAPEST</h1>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-sidebar border-b border-sidebar-border shadow-xl max-h-[calc(100vh-64px)] overflow-y-auto">
                        <nav className="px-3 py-4 space-y-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`
                      flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all
                      ${isActive
                                                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                                : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50"
                                            }
                    `}
                                    >
                                        <Icon className="w-5 h-5 mr-3" />
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </div>

            {/* Main content */}
            <div className="lg:pl-64 flex flex-col min-h-screen pt-16 lg:pt-0">
                {/* Top bar */}
                <header className="sticky top-0 lg:top-0 z-40 bg-background border-b border-border">
                    <div className="px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-end space-x-4">
                            {/* Balance */}
                            <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg border border-border">
                                <Wallet className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold">₹{balance}</span>
                            </div>

                            {/* User menu */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                        Account
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => navigate("/dashboard/new-order")}>
                                        Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleLogout}>
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 bg-background">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;

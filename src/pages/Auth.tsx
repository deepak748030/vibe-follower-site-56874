import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Mail, Lock, User, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Steps from "@/components/Steps";
import WhyChooseUs from "@/components/WhyChooseUs";
import SMMFAQ from "@/components/SMM-FAQ";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Auth = () => {
    const navigate = useNavigate();
    const { login, register } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            await login(email, password);
            navigate("/dashboard/home");
        } catch (error) {
            // Error handled in context
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const referralCode = formData.get("referralCode") as string;

        try {
            await register(name, email, password, referralCode || undefined);
            navigate("/dashboard/home");
        } catch (error) {
            // Error handled in context
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
            </div>

            {/* Back Button */}
            <Button
                variant="ghost"
                className="absolute top-6 left-6 z-20 hover:bg-card/50"
                onClick={() => navigate("/")}
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
            </Button>

            {/* Auth Section */}
            <div className="flex items-center justify-center min-h-screen p-4 relative z-10">
                {/* Auth Card */}
                <Card className="w-full max-w-md shadow-glow border-border/50 backdrop-blur-sm bg-card/95 animate-scale-in">
                    <CardHeader className="space-y-1 text-center pb-8">
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-glow animate-pulse-glow">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <CardTitle className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                            Welcome Back
                        </CardTitle>
                        <CardDescription className="text-base md:text-lg text-muted-foreground">
                            Join millions growing their social presence
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="px-6 md:px-8">
                        <Tabs defaultValue="login" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-8 h-12 bg-muted/50">
                                <TabsTrigger value="login" className="text-base md:text-lg font-semibold data-[state=active]:bg-card data-[state=active]:shadow-md">Login</TabsTrigger>
                                <TabsTrigger value="signup" className="text-base md:text-lg font-semibold data-[state=active]:bg-card data-[state=active]:shadow-md">Sign Up</TabsTrigger>
                            </TabsList>

                            <TabsContent value="login">
                                <form onSubmit={handleLogin} className="space-y-6">
                                    <div className="space-y-3">
                                        <Label htmlFor="login-email" className="text-base font-medium">Email Address</Label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                            <Input
                                                id="login-email"
                                                name="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                className="pl-12 h-14 text-base border-2 focus:border-primary transition-all"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="login-password" className="text-base font-medium">Password</Label>
                                            <button type="button" className="text-sm text-primary hover:underline">Forgot?</button>
                                        </div>
                                        <div className="relative group">
                                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                            <Input
                                                id="login-password"
                                                name="password"
                                                type="password"
                                                placeholder="••••••••"
                                                className="pl-12 h-14 text-base border-2 focus:border-primary transition-all"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full gradient-primary shadow-glow hover:scale-[1.02] transition-all h-14 text-lg font-semibold"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Logging in..." : "Login to Account"}
                                    </Button>
                                </form>
                            </TabsContent>

                            <TabsContent value="signup">
                                <form onSubmit={handleSignup} className="space-y-6">
                                    <div className="space-y-3">
                                        <Label htmlFor="signup-name" className="text-base font-medium">Full Name</Label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                            <Input
                                                id="signup-name"
                                                name="name"
                                                type="text"
                                                placeholder="John Doe"
                                                className="pl-12 h-14 text-base border-2 focus:border-primary transition-all"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="signup-email" className="text-base font-medium">Email Address</Label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                            <Input
                                                id="signup-email"
                                                name="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                className="pl-12 h-14 text-base border-2 focus:border-primary transition-all"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="signup-password" className="text-base font-medium">Password</Label>
                                        <div className="relative group">
                                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                            <Input
                                                id="signup-password"
                                                name="password"
                                                type="password"
                                                placeholder="Min. 8 characters"
                                                className="pl-12 h-14 text-base border-2 focus:border-primary transition-all"
                                                required
                                                minLength={8}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="referral-code" className="text-base font-medium">Referral Code (Optional)</Label>
                                        <Input
                                            id="referral-code"
                                            name="referralCode"
                                            type="text"
                                            placeholder="Enter referral code"
                                            className="h-14 text-base border-2 focus:border-primary transition-all"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full gradient-primary shadow-glow hover:scale-[1.02] transition-all h-14 text-lg font-semibold"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Creating Account..." : "Create Account"}
                                    </Button>
                                </form>
                            </TabsContent>
                        </Tabs>

                        <div className="mt-8 pt-6 border-t border-border/50 text-center">
                            <p className="text-sm text-muted-foreground">
                                By continuing, you agree to our{" "}
                                <a href="#" className="text-primary hover:underline font-medium">Terms of Service</a>
                                {" "}and{" "}
                                <a href="#" className="text-primary hover:underline font-medium">Privacy Policy</a>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Additional Sections */}
            <div className="relative z-10">
                <Steps />
                <WhyChooseUs />
                <Reviews />
                <SMMFAQ />
                <Footer />
            </div>
        </div>
    );
};

export default Auth;

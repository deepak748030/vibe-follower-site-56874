import { UserPlus, Wallet, Package, TrendingUp } from "lucide-react";

const Steps = () => {
    const steps = [
        {
            number: "1",
            icon: UserPlus,
            title: "Sign up",
            description: "Register into our panel, fill in all the necessary data and get ready to be famous.",
        },
        {
            number: "2",
            icon: Wallet,
            title: "Add funds",
            description: "Add money to your SMM account and be ready to rise like a star and give your business a new height.",
        },
        {
            number: "3",
            icon: Package,
            title: "Choose service",
            description: "Select a service and place an order and get ready to start receiving more publicity on social media.",
        },
        {
            number: "4",
            icon: TrendingUp,
            title: "Enjoy popularity",
            description: "We will create and proceed with an order and inform you once done. Enjoy and stay with us.",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 md:mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                        <span className="text-gradient">Where to begin?</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Want to start placing orders on our panel? Follow these 4 easy steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative group animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                                    {/* Number Badge */}
                                    <div className="absolute -top-4 -left-4 w-12 h-12 md:w-14 md:h-14 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                                        <span className="text-lg md:text-xl font-bold text-white">{step.number}</span>
                                    </div>

                                    {/* Icon */}
                                    <div className="mb-6 md:mb-8 pt-4">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{step.title}</h3>
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector Line (hidden on mobile and last item) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Steps;
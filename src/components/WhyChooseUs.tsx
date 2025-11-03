import { Award, CreditCard, DollarSign, Zap } from "lucide-react";

const WhyChooseUs = () => {
    const features = [
        {
            icon: Award,
            title: "Great quality",
            description: "The quality of our SMM services will pleasantly surprise you.",
        },
        {
            icon: CreditCard,
            title: "Multiple payment systems",
            description: "Great variety of payment methods for you to choose from.",
        },
        {
            icon: DollarSign,
            title: "Really cheap",
            description: "SMM services that we offer on our panel are extremely cheap.",
        },
        {
            icon: Zap,
            title: "Extra quick delivery",
            description: "Customer orders on our panel are processed very fast.",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-card/30">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="text-center animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="mb-4 md:mb-6 flex justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
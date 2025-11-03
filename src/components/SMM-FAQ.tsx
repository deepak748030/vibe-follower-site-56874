import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const SMMFAQ = () => {
    const faqs = [
        {
            question: "An SMM panel — what is it?",
            answer: "An SMM panel is an online platform that provides social media marketing services. It allows users to purchase various SMM services like followers, likes, views, and engagement for different social media platforms.",
        },
        {
            question: "What kinds of SMM services can I buy here?",
            answer: "We offer a wide range of SMM services including Instagram followers, likes, comments, story views, TikTok followers, YouTube views and subscribers, Facebook likes and followers, Twitter followers, and much more across all major social media platforms.",
        },
        {
            question: "Is it safe to buy SMM services on this panel?",
            answer: "Yes, it is completely safe. We use secure payment methods and deliver services gradually to ensure your account remains safe. We prioritize quality and authenticity in all our services to maintain the integrity of your social media presence.",
        },
        {
            question: "What is the mass order feature for?",
            answer: "The mass order feature allows you to place multiple orders at once, making it convenient when you need to order services for multiple posts or accounts. This saves time and streamlines your social media marketing efforts.",
        },
        {
            question: "What does 'Drip-feed' mean?",
            answer: "Drip-feed is a feature that allows you to receive your order gradually over a specified period instead of all at once. This makes the growth look more natural and organic, reducing the risk of triggering social media platform algorithms.",
        },
        {
            question: "How do mass orders work?",
            answer: "With mass orders, you can submit multiple order links at once by separating them with line breaks. The system will automatically create individual orders for each link using the same service and quantity parameters you specify.",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-1/3 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 md:mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                        <span className="text-gradient">Frequently Asked Questions</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about our SMM panel
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card border border-border rounded-xl px-6 shadow-card hover:shadow-glow transition-all"
                            >
                                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm md:text-base text-muted-foreground pb-5 md:pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default SMMFAQ;
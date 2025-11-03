import { Star } from "lucide-react";

const Reviews = () => {
    const reviews = [
        {
            name: "Roberto Santos",
            review: "SMM services I got here did exactly what I expected them to do — they helped my business get more attention and increased my sales. Thank you!",
            rating: 5,
        },
        {
            name: "Brian Delaney",
            review: "This SMM panel is incredible! All services are so cheap and yet their quality doesn't disappoint. I'm now your regular customer.",
            rating: 5,
        },
        {
            name: "Adam Lim",
            review: "No matter how much I tried to promote my business online, I didn't get good results. I was just a beginner small business owner so I didn't have lots of money to spend on professional online promos. Using this panel helped me save a TON on SMM services.",
            rating: 5,
        },
        {
            name: "Devesh Mannan",
            review: "I've been looking for the best SMM solution for my company for some time. It wasn't really cost-effective to spend those sums that SMM agencies ask for so I wanted something much simpler and cheaper. This panel has everything I need and more.",
            rating: 5,
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-card/20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/3 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 md:mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                        <span className="text-gradient">Reviews</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Check out what our customers have to say about our panel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                                "{review.review}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                                    <span className="text-base md:text-lg font-bold text-white">
                                        {review.name.split(" ").map(n => n[0]).join("")}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm md:text-base font-semibold">{review.name}</p>
                                    <p className="text-xs md:text-sm text-muted-foreground">Verified Customer</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
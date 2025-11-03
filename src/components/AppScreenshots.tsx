import { Smartphone } from "lucide-react";

const AppScreenshots = () => {
  const screenshots = [
    {
      title: "Home Dashboard",
      description: "Easy-to-use interface with all features at your fingertips. Navigate through followers, likes, and story views seamlessly.",
      features: ["Daily Bonus", "Task Center", "Quick Actions"]
    },
    {
      title: "Follower Growth",
      description: "Track your follower growth in real-time. See detailed analytics and insights about your Instagram engagement.",
      features: ["Real-time Stats", "Growth Charts", "Engagement Metrics"]
    },
    {
      title: "Coin Collection",
      description: "Automated coin collection system. Set it and forget it - our bot works 24/7 to collect coins for you.",
      features: ["Auto Bot", "Multiple Accounts", "Smart Collection"]
    },
    {
      title: "Order Management",
      description: "Place orders for followers, likes, comments, and story views. Track all your orders in one convenient place.",
      features: ["Order History", "Status Tracking", "Quick Reorder"]
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            App <span className="text-gradient">Screenshots</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of Grow Social Life with our intuitive and beautiful interface
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-8">
                {/* Phone Mockup */}
                <div className="relative w-full max-w-[300px] mx-auto">
                  <div className="relative bg-gradient-to-br from-primary to-accent rounded-[2.5rem] p-2.5 shadow-glow transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(168,85,247,0.6)]">
                    <div className="bg-card rounded-[2rem] overflow-hidden">
                      {/* Notch */}
                      <div className="h-7 gradient-primary flex items-center justify-center">
                        <div className="w-20 h-5 bg-card/20 rounded-full" />
                      </div>

                      {/* Screen Content */}
                      <div className="gradient-primary p-6 min-h-[400px] flex flex-col items-center justify-center">
                        <div className="space-y-4 w-full">
                          {screenshot.features.map((feature, fIdx) => (
                            <div
                              key={fIdx}
                              className="bg-card rounded-xl p-3 shadow-lg transform transition-transform hover:scale-105"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                                  <Smartphone className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-medium">{feature}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom indicator */}
                      <div className="gradient-primary p-3 flex justify-center">
                        <div className="w-16 h-1 rounded-full bg-white/30" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating emoji */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-card shadow-glow flex items-center justify-center animate-bounce-slow">
                  <span className="text-2xl">✨</span>
                </div>
              </div>

              {/* Info */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-gradient">
                  {screenshot.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {screenshot.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  {screenshot.features.map((feature, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-xs font-semibold gradient-primary text-white px-3 py-1 rounded-full shadow-glow"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;

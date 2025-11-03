import { Shield, Zap, Gift, Bot } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Completely safe",
      description: "Grow Social Life is completely safe and your login directly through Instagram and we have no access to your login information.",
      position: "top-left"
    },
    {
      icon: Zap,
      title: "High speed",
      description: "The speed of orders in Grow Social Life is remarkably high and you will receive followers, likes and comments very quickly.",
      position: "top-right"
    },
    {
      icon: Bot,
      title: "Auto bot",
      description: "With the auto bot system, you no longer need to waste time collecting coins. Grow Social Life automatically collects coins for you.",
      position: "bottom-left"
    },
    {
      icon: Gift,
      title: "Daily gifts",
      description: "We apply daily various gifts through gift code or gift percentage to orders.",
      position: "bottom-right"
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" id="features">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-3">
            Why Grow Social Life <span className="text-gradient">is the best?</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            The advantages that Grow Social Life has over other programs
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left Features */}
            <div className="space-y-8 lg:space-y-12">
              {features.filter(f => f.position.includes('left')).map((feature, index) => (
                <div
                  key={index}
                  className="group text-center lg:text-right animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-block lg:float-right w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="clear-both">
                    <h3 className="text-lg font-bold mb-2 text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Phone Mockup */}
            <div className="relative lg:px-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full max-w-[280px] mx-auto">
                <div className="relative bg-gradient-to-br from-primary to-accent rounded-[2.5rem] p-2.5 shadow-glow">
                  <div className="bg-background rounded-[2rem] overflow-hidden">
                    {/* Notch */}
                    <div className="h-7 gradient-primary flex items-center justify-center">
                      <div className="w-20 h-5 bg-background/20 rounded-full" />
                    </div>
                    {/* Screen Content */}
                    <div className="gradient-primary p-6 min-h-[450px] flex flex-col items-center justify-center">
                      <div className="text-white text-center space-y-4">
                        <h3 className="text-2xl font-bold">Grow Social Life</h3>
                        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto">
                          <span className="text-4xl">😍</span>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <p className="text-xs">Get free followers and likes</p>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <p className="text-xs">Fast delivery guaranteed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Bottom indicator */}
                    <div className="gradient-primary p-3 flex justify-center">
                      <div className="w-16 h-1 rounded-full bg-white/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-8 lg:space-y-12">
              {features.filter(f => f.position.includes('right')).map((feature, index) => (
                <div
                  key={index}
                  className="group text-center lg:text-left animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="inline-block lg:float-left w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="clear-both">
                    <h3 className="text-lg font-bold mb-2 text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

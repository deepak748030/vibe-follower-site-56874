import { Download, LogIn, ShoppingCart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Download Grow Social Life",
      description: "First, download the program from our site. Please note that you can download the original version only from our official website.",
      icon: Download,
      bgColor: "bg-amber-50 dark:bg-amber-950/20"
    },
    {
      number: "02",
      title: "Login by your fake instagram account",
      description: "We have no access to your login information and your login is directly through Instagram.",
      icon: LogIn,
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20"
    },
    {
      number: "03",
      title: "Place an order",
      description: "Collect coins and request followers, likes, comments, threads follower or Instagram story views with your coins.",
      icon: ShoppingCart,
      bgColor: "bg-pink-50 dark:bg-pink-950/20"
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-3 text-primary">
            How Grow Social Life work
          </h2>
          <p className="text-sm text-muted-foreground">
            How to use Grow Social Life is quite easy.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}>
                  {/* Text Content */}
                  <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:text-left lg:pl-12'} text-center space-y-3`}>
                    <h3 className="text-lg lg:text-xl font-bold text-primary">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Image/Icon Placeholder */}
                  <div className={`${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'} flex justify-center`}>
                    <div className={`relative w-full max-w-xs aspect-[4/3] rounded-3xl ${step.bgColor} border border-border/50 shadow-lg flex items-center justify-center overflow-hidden group hover:shadow-glow transition-all duration-300`}>
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
                      <div className="absolute bottom-6 left-6 w-6 h-6 rounded-full bg-accent/20 animate-pulse" style={{ animationDelay: '1s' }} />
                      
                      {/* Main icon */}
                      <div className="relative">
                        <div className="w-32 h-32 rounded-2xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                          <step.icon className="w-16 h-16 text-white" />
                        </div>
                      </div>
                      
                      {/* Floating emoji */}
                      <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center border-2 border-primary/20 animate-bounce-slow">
                        <span className="text-xl">
                          {index === 0 ? '📱' : index === 1 ? '🔐' : '🛒'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step number badge - centered */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
                  <div className="w-16 h-16 rounded-full gradient-primary shadow-glow flex items-center justify-center text-white font-bold text-lg border-4 border-background">
                    {step.number}
                  </div>
                </div>

                {/* Step number for mobile */}
                <div className="lg:hidden flex justify-center -mt-4">
                  <div className="w-12 h-12 rounded-full gradient-primary shadow-glow flex items-center justify-center text-white font-bold border-2 border-background">
                    {step.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

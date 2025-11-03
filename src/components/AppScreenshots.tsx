import appHomeScreen from "@/assets/app-home.png";
import appTasksScreen from "@/assets/app-tasks.png";
import appOrdersScreen from "@/assets/app-orders.png";
import appWalletScreen from "@/assets/app-wallet.png";

const AppScreenshots = () => {
  const screenshots = [
    {
      title: "Home Dashboard",
      description: "Easy-to-use interface with all features at your fingertips. Navigate through followers, likes, and story views seamlessly.",
      features: ["Earn Coins", "Create Order", "Transactions", "Referrals"],
      image: appHomeScreen
    },
    {
      title: "Task Center",
      description: "Complete Instagram tasks to earn coins. Like, follow, and view content to build up your coin balance.",
      features: ["Complete Tasks", "Earn Rewards", "Track Progress"],
      image: appTasksScreen
    },
    {
      title: "Create Orders",
      description: "Select from various services like followers, likes, comments, and views. Place orders instantly with your earned coins.",
      features: ["Multiple Services", "Instant Orders", "Flexible Pricing"],
      image: appOrdersScreen
    },
    {
      title: "Wallet & Transactions",
      description: "Track all your orders and transactions in one place. Monitor your coin balance and see your completed tasks.",
      features: ["Transaction History", "Add Coins", "Order Tracking"],
      image: appWalletScreen
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
                <div className="relative w-full max-w-[500px] mx-auto">
                  <div className="relative bg-gradient-to-br from-primary to-accent rounded-[2.5rem] p-2.5 shadow-glow transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(168,85,247,0.6)]">
                    <div className="bg-card rounded-[2rem] overflow-hidden">
                      {/* Notch */}
                      <div className="h-7 gradient-primary flex items-center justify-center">
                        <div className="w-20 h-5 bg-card/20 rounded-full" />
                      </div>

                      {/* Screen Content */}
                      <div className="overflow-hidden">
                        <img
                          src={screenshot.image}
                          alt={screenshot.title}
                          className="w-full h-full object-cover"
                        />
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

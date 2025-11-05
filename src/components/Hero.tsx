import { Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import appHomeScreen from "@/assets/app-home.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-0 flex items-center overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Grow Social Life</span>
              <br />
              <span className="text-foreground">Elevate Your</span>
              <br />
              <span className="text-foreground">Instagram Presence</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Transform your Instagram account with Grow Social Life. Get real followers, likes, and comments instantly. Your journey to social media success starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary shadow-glow hover:scale-105 transition-all rounded-full text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Apk File
              </Button>
              <a
                href="/auth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 hover:bg-primary/10"
                  asChild
                >
                  <span>
                    <Smartphone className="w-5 h-5 mr-2" />
                    Login / Signup
                  </span>
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 md:gap-8 pt-4">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gradient">5M+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="w-px h-10 md:h-12 bg-border" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gradient">4.8★</div>
                <div className="text-xs md:text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="w-px h-10 md:h-12 bg-border" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gradient">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Safe</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in">
            <div className="relative animate-float">
              {/* Phone Frame */}
              <div className="relative w-[200px] sm:w-[240px] lg:w-[280px]">
                <div className="relative bg-gradient-to-br from-primary to-accent rounded-[3rem] p-3 shadow-glow">
                  <div className="bg-card rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="h-6 gradient-primary flex items-center justify-center">
                      <div className="w-20 h-5 bg-card/20 rounded-full" />
                    </div>

                    {/* Screen Content */}
                    <div className="overflow-hidden max-h-[520px]">
                      <img
                        src={appHomeScreen}
                        alt="Grow Social Life App Home Screen"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-card shadow-glow flex items-center justify-center animate-pulse-glow">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-white text-xl">🛡️</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-card shadow-glow flex items-center justify-center animate-pulse-glow" style={{ animationDelay: "0.5s" }}>
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-white text-xl">❤️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

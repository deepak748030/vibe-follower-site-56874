import { Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <div className="inline-block">
              <span className="text-sm font-semibold gradient-primary text-white px-4 py-2 rounded-full shadow-glow">
                🎉 Original Version Available
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">Grow Social Life</span>
              <br />
              <span className="text-foreground">Elevate Your</span>
              <br />
              <span className="text-foreground">Instagram Presence</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              Transform your Instagram account with Grow Social Life. Get real followers, likes, and comments instantly. Your journey to social media success starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary shadow-glow hover:scale-105 transition-all rounded-full text-lg px-8 py-6"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Apk File
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-lg px-8 py-6 border-2 hover:bg-primary/10"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gradient">5M+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-gradient">4.8★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-sm text-muted-foreground">Safe</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in">
            <div className="relative animate-float">
              {/* Phone Frame */}
              <div className="relative w-[280px] sm:w-[320px] lg:w-[380px]">
                <div className="relative bg-gradient-to-br from-primary to-accent rounded-[3rem] p-3 shadow-glow">
                  <div className="bg-card rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="h-8 gradient-primary flex items-center justify-center">
                      <div className="w-24 h-6 bg-card/20 rounded-full" />
                    </div>

                    {/* Screen Content */}
                    <div className="gradient-primary p-6 min-h-[500px] flex flex-col items-center justify-center text-center">
                      <div className="space-y-6 w-full">
                        <div className="bg-card rounded-2xl p-4 shadow-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Request Story Views</span>
                            <div className="w-6 h-6 rounded-full bg-primary/20" />
                          </div>
                        </div>

                        <div className="bg-card rounded-2xl p-4 shadow-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                              <span className="text-white text-lg">🎁</span>
                            </div>
                            <span className="text-sm font-medium">Daily bonus</span>
                          </div>
                        </div>

                        <div className="bg-card rounded-2xl p-4 shadow-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                              <span className="text-white text-lg">🎫</span>
                            </div>
                            <span className="text-sm font-medium">Codes</span>
                          </div>
                        </div>

                        <div className="bg-card rounded-2xl p-4 shadow-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                              <span className="text-white text-lg">🎟️</span>
                            </div>
                            <span className="text-sm font-medium">Coupons</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="gradient-primary p-4">
                      <div className="grid grid-cols-4 gap-2 text-white text-xs">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-6 h-6 rounded-lg bg-white/20" />
                          <span>More</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-6 h-6 rounded-lg bg-white/20" />
                          <span>Followers</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-6 h-6 rounded-lg bg-white/20" />
                          <span>Posts</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-6 h-6 rounded-lg bg-white/20" />
                          <span>Tasks</span>
                        </div>
                      </div>
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

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed successfully! 🎉",
        description: "You'll receive all the latest updates in your inbox.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center shadow-glow mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Subscribe <span className="text-gradient">newsletter</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Be the first to receive all latest post in your inbox
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 rounded-full text-lg bg-card shadow-card border-2 focus:border-primary"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="gradient-primary shadow-glow hover:scale-105 transition-all rounded-full px-8 h-14 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>

          <div className="mt-12 pt-12 border-t border-border">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <img
                src="https://ui-avatars.com/api/?name=Ahmad&background=9333ea&color=fff&size=48"
                alt="Developer"
                className="w-12 h-12 rounded-full shadow-card"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground">Mr. Ahmad</div>
                <div>Android Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const advantages = [
    "Completely free and without ads",
    "Very high speed",
    "Multiple uses",
    "Easy to use",
    "High security",
    "Beautiful user interface",
    "Totally real followers",
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* How does it work */}
          <div className="animate-fade-in">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              How does <span className="text-gradient">Grow Social Life</span> work?
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
              <p>
                In today's world, social networks are expanding rapidly, and Instagram, as one of the most successful social networks, has become a way to become famous and earn money.
              </p>
              <p>
                On Instagram, we see people who have become famous without art and knowledge and earn millions, this success is due to the use and spending of a lot of time by users on Instagram.
              </p>
              <p>
                So you should not miss this opportunity and use the opportunities that Instagram provides.
              </p>
            </div>
          </div>

          {/* What is Grow Social Life */}
          <div className="animate-fade-in-up">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gradient">
              What is Grow Social Life Apk?
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
              <p>
                Although many people have become famous on Instagram for no reason, becoming famous on Instagram is not that easy.
              </p>
              <p>
                To attract followers, likes and comments on Instagram, you have to work for years and follow all Instagram algorithms so that your page and posts can be seen on Instagram.
              </p>
              <p>
                Grow Social Life Apk is a wonderful application in the field of increasing followers, likes, comments, story views and Threads followers.
              </p>
              <p className="font-semibold text-foreground">
                With Grow Social Life you can attract millions of followers without spending money and time.
              </p>
            </div>
          </div>

          {/* Advantages */}
          <div className="animate-fade-in-up">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gradient">
              What are the advantages of Grow Social Life over other programs?
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Undoubtedly, the best program to upgrade your Instagram page is Grow Social Life Apk for the reasons we will tell you below:
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 bg-card rounded-xl p-3 shadow-card hover:shadow-glow transition-all text-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-xs">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How to collect coins */}
          <div className="animate-fade-in-up bg-card rounded-2xl p-6 lg:p-8 shadow-card">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-primary">
              How to collect coins in Grow Social Life Apk?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/30">
                <p className="text-xs font-semibold text-destructive">
                  ⚠️ Be careful to use your fake accounts in the program.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <p>
                  First, download the program from the link below. Be careful, downloading apps from unofficial sources may misuse your Instagram account or damage your device, so just download apk from Official Site.
                </p>

                <p>
                  After opening the program, click on the Sign in with Instagram button and after confirming the privacy policy, the login page will open for you.
                </p>

                <p>
                  On the login page, enter your fake Instagram account username in the upper box and your account password in the lower box.
                </p>

                <p>
                  You may encounter a login error or problems, in this case, first log in to your account through the official Instagram application, then try again.
                </p>

                <p>
                  After logging in to your instagram account, from the <span className="font-semibold text-foreground">Tasks</span> section, you can specify your action type to collect coins and also activate or deactivate the accounts with which you want to collect coins.
                </p>

                <p>
                  After collecting the coins, to place an order click on the <span className="font-semibold text-foreground">Followers</span> section and enter your desired username in the opened box.
                </p>

                <p className="italic">
                  * Be careful that in order to register likes and comments, your desired account must be public.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="animate-fade-in-up p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gradient">
              Conclusion
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
              <p>
                Everyone wants to become famous on Instagram and attract many followers, but attracting followers is not so easy.
              </p>
              <p>
                Grow Social Life Apk is a simple, hassle-free and free way to increase followers and other Instagram services, in addition to requesting followers, you can also request likes, custom comments, visit stories or Threads followers.
              </p>
              <p>
                One of the most important advantages of any program is the security of users and their data. With years of activity in this field, Grow Social Life Apk has proven this security to all users, and you can use this application safely.
              </p>
              <p className="font-semibold text-foreground">
                Another important point is the speed of sending orders, which Grow Social Life is unique in this field, and you will be shocked by the speed of sending orders in Grow Social Life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

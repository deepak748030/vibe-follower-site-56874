import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is Top Follow safe to use?",
      answer: "Yes, Top Follow is completely safe. Your login is done directly through Instagram and we have no access to your login information. We have proven our security to users for years.",
    },
    {
      question: "How do I download Top Follow?",
      answer: "You can download Top Follow from our official website. Be careful not to download from unofficial sources as they may compromise your account security.",
    },
    {
      question: "Is Top Follow free?",
      answer: "Yes! Top Follow is completely free to use without any advertisements. You can order followers, likes, and comments without any cost.",
    },
    {
      question: "How fast are the results?",
      answer: "The speed of orders in Top Follow is remarkably high. You will receive followers, likes and comments very quickly compared to other similar apps.",
    },
    {
      question: "What if I encounter a login error?",
      answer: "Sometimes Instagram suspects the activity of your account. In this case, you must enter the official Instagram application once and confirm your account, then continue your activity in the program.",
    },
    {
      question: "Are the followers real?",
      answer: "Yes, all followers and services you get are completely real, which helps your Instagram account grow significantly and organically.",
    },
    {
      question: "Can I use my main Instagram account?",
      answer: "We recommend using a fake or secondary Instagram account with Top Follow for best practices and to keep your main account secure.",
    },
    {
      question: "What services does Top Follow provide?",
      answer: "Top Follow provides followers, likes, custom comments, story views, and Threads followers. More Instagram services will be added soon.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about Top Follow
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-fade-in-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl px-6 shadow-card hover:shadow-glow transition-all border-0"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppScreenshots from "@/components/AppScreenshots";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import Steps from "@/components/Steps";
import WhyChooseUs from "@/components/WhyChooseUs";
import SMMFAQ from "@/components/SMM-FAQ";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FallingStars from "@/components/FallingStars";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FallingStars />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <AppScreenshots />
        <HowItWorks />
        <AboutSection />
        <Steps />
        <WhyChooseUs />
        <FAQ />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

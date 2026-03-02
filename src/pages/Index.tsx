import Hero from "@/components/Hero";
import BannerSection from "@/components/BannerSection";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import WhyVisage from "@/components/WhyVisage";
import Testimonials from "@/components/Testimonials";
import ProtocolSteps from "@/components/ProtocolSteps";
import IdealClient from "@/components/IdealClient";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Hero />
      <BannerSection />
      <Differentials />
      <About />
      <WhyVisage />
      <ProtocolSteps />
      <Testimonials />
      <IdealClient />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Modalities from "@/components/Modalities";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <About />
      <Modalities />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Specializations from "@/components/Specializations";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#0a0a0a] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <Marquee />
      <Stats />
      <Specializations />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

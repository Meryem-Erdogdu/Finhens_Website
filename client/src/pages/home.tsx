import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import Features from "@/components/Features";
import About from "@/components/About";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Dashboard />
      <Features />
      <About />
      <Integration />
      <CTA />
      <Footer />
    </div>
  );
}

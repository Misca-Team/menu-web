import Image from "next/image";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
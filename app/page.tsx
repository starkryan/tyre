import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Mobile3D } from "@/components/Mobile3D";
import { Footer } from "@/components/Footer";
import { GlareCard } from "@/components/ui/glare-card";
import Image from "next/image";
import Cards from "@/components/Cards";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10" />
      
      {/* Content */}
      <Hero />
      
  
      <Features />
      <Footer />
    </main>
  );
}
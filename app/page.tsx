import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
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
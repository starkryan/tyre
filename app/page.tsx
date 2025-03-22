import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      
      <section className="relative border-t border-purple-500/10">
        <Features />
      </section>

      <Footer />
    </main>
  );
}
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Companies } from "@/components/companies";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
import { Templates } from "@/components/templates";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Companies />
        <Stats />
        <Features />
        <Templates />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

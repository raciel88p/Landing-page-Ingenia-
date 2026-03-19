import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof"; // Problem section
import { Features } from "@/components/features"; // Solution
import { HowItWorks } from "@/components/how-it-works"; // Opportunity
import { Testimonials } from "@/components/testimonials"; // Use cases
import { Pricing } from "@/components/pricing"; // Impact stats
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

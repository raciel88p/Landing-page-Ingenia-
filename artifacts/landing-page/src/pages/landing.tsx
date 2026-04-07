import { lazy, Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhatsAppButton } from "@/components/whatsapp-button";

const StatsBar = lazy(() => import("@/components/stats-bar").then(m => ({ default: m.StatsBar })));
const Gallery = lazy(() => import("@/components/gallery").then(m => ({ default: m.Gallery })));
const SocialProof = lazy(() => import("@/components/social-proof").then(m => ({ default: m.SocialProof })));
const HowItWorks = lazy(() => import("@/components/how-it-works").then(m => ({ default: m.HowItWorks })));
const Features = lazy(() => import("@/components/features").then(m => ({ default: m.Features })));
const Pricing = lazy(() => import("@/components/pricing").then(m => ({ default: m.Pricing })));
const MidCTA = lazy(() => import("@/components/mid-cta").then(m => ({ default: m.MidCTA })));
const Testimonials = lazy(() => import("@/components/testimonials").then(m => ({ default: m.Testimonials })));
const Comparison = lazy(() => import("@/components/comparison").then(m => ({ default: m.Comparison })));
const TestimonialQuotes = lazy(() => import("@/components/testimonial-quotes").then(m => ({ default: m.TestimonialQuotes })));
const FAQ = lazy(() => import("@/components/faq").then(m => ({ default: m.FAQ })));
const FinalCTA = lazy(() => import("@/components/final-cta").then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("@/components/footer").then(m => ({ default: m.Footer })));

function SectionFallback() {
  return <div className="h-32" aria-hidden="true" />;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <StatsBar />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <SocialProof />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <MidCTA />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Comparison />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialQuotes />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
}

import Background from "../components/Background";
import MouseGlow from "../components/MouseGlow";
import Particles from "../components/Particles";

import LandingNavbar from "../components/navbar/LandingNavbar";

import HeroLanding from "../components/landing/HeroLanding";
import FeaturesSection from "../components/landing/FeaturesSection";
import DemoSection from "../components/landing/DemoSection";
import StatsSection from "../components/landing/StatsSection";
import ThemeShowcase from "../components/landing/ThemeShowcase";
import TimelineSection from "../components/landing/TimelineSection";
import Testimonials from "../components/landing/Testimonials";
import FAQSection from "../components/landing/FAQSection";
import CTASection from "../components/landing/CTASection";
import FooterLanding from "../components/landing/FooterLanding";

export default function Landing() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <Background />
      <MouseGlow />
      <Particles />

      <LandingNavbar />

      <main>

        <HeroLanding />

        <FeaturesSection />

        <DemoSection />

        <StatsSection />

        <ThemeShowcase />

        <TimelineSection />

        <Testimonials />

        <FAQSection />

        <CTASection />

      </main>

      <FooterLanding />

    </div>
  );
}
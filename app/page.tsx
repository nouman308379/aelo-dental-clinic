import { AboutSection } from "@/app/components/landing/home/about-section";
import { CdcpSection } from "@/app/components/landing/home/cdcp-section";
import { ContactSection } from "@/app/components/landing/home/contact-section";
import { HeroSection } from "@/app/components/landing/home/hero-section";
import { NewPatientsSection } from "@/app/components/landing/home/new-patients-section";
import { ServicesSection } from "@/app/components/landing/home/services-section";
import { SiteFooter } from "@/app/components/landing/home/site-footer";
import { SiteHeader } from "@/app/components/landing/home/site-header";
import { TrustBar } from "@/app/components/landing/home/trust-bar";

export default function App() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: "#f4f4ef",
        fontFamily: "var(--font-sans)",
        color: "#1a1a1a",
      }}
    >
      <SiteHeader />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <CdcpSection />
      <NewPatientsSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}

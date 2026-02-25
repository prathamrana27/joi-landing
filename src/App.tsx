import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import TrustStripSection from "./sections/TrustStripSection";
import CapabilitiesSection from "./sections/CapabilitiesSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import SecuritySection from "./sections/SecuritySection";
import VoiceDesktopSection from "./sections/VoiceDesktopSection";
import AutomationSection from "./sections/AutomationSection";
import IntegrationsSection from "./sections/IntegrationsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import PricingSection from "./sections/PricingSection";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";

const GlobalBackground3D = lazy(() => import("./three/GlobalBackground3D"));

function App() {
  return (
    <div className="app-shell">
      <Suspense fallback={null}>
        <GlobalBackground3D />
      </Suspense>
      <div className="content-layer">
        <Navbar />
        <main>
          <HeroSection />
          <TrustStripSection />
          <CapabilitiesSection />
          <HowItWorksSection />
          <SecuritySection />
          <VoiceDesktopSection />
          <AutomationSection />
          <IntegrationsSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

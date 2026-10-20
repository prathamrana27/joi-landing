import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Aurora, ScrollProgress } from "./components/Ambient";
import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import FeaturesSection from "./sections/FeaturesSection";
import PrivacySection from "./sections/PrivacySection";
import SafetySection from "./sections/SafetySection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ShortcutSection from "./sections/ShortcutSection";
import PricingSection from "./sections/PricingSection";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";
import AboutDeveloperSection from "./sections/AboutDeveloperSection";

function App() {
  return (
    <div className="app-shell">
      <Aurora />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <FeaturesSection />
        <PrivacySection />
        <SafetySection />
        <ShortcutSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <AboutDeveloperSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

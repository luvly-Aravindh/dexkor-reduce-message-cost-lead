import TopBarMarquee from './components/TopBarMarquee.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/TrustBar.jsx';
import Problem from './components/Problem.jsx';
import ROICalculator from './components/ROICalculator.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CustomerTimeline from './components/CustomerTimeline.jsx';
import PlatformModules from './components/PlatformModules.jsx';
import Testimonials from './components/Testimonials.jsx';
import Comparison from './components/Comparison.jsx';
import Differentiator from './components/Differentiator.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import ProofTicker from './components/ProofTicker.jsx';

export default function App() {
  return (
    <>
    <TopBarMarquee />
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Problem />
        <ROICalculator />
        <HowItWorks />
        <CustomerTimeline />
        <PlatformModules />
        <Testimonials />
        <Comparison />
        <Differentiator />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ProofTicker />
    </>
  );
}

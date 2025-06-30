// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeatureCards from "../components/FeatureCards";
// import TestimonialSlider from "../components/TestimonialSlider_bkp";
import ContactSection from "../components/ContactSection";
import CustomerNeedsSlider from "../components/CustomerNeedsSlider";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeatureCards />
      {/* <TestimonialSlider /> */}
      <CustomerNeedsSlider />
      <ContactSection />
    </div>
  );
};

export default Home;

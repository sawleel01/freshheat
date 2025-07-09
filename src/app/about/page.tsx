import AboutHeroSection from "@/components/AboutUs/heroSection";
import AboutUs from "../../components/HomePage/aboutus";
import LimitedTimeOffers from "../../components/HomePage/limitedtimeoffer";
import Navbar from "@/components/HomePage/navbar";
import Footer from "@/components/HomePage/footer";
import Testimonials from "@/components/HomePage/testimonials";
import ChefSection from "@/components/HomePage/chefsection";
import Special from "@/components/HomePage/special";
import AnimatedCursor from "react-animated-cursor";

export default function AboutUsPage() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0.2}
        innerStyle={{ backgroundColor: "#ff0000" }} // Red inner cursor
        outerStyle={{ border: "2px solid #ff0000" }} // Red outer ring
        clickables={["a", "button", "input", "textarea", "select", "label"]}
      />
      <div className="bg-stone-100">
        <Navbar />
        <AboutHeroSection />
        <LimitedTimeOffers />
        <AboutUs />
        <Special />
        <ChefSection />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

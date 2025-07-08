import PopularFoodItems from "@/components/popularfooditems";
import Navbar from "@/components/navbar";
import LimitedTimeOffers from "@/components/limitedtimeoffer";
import BestSellingDishes from "@/components/bestsellingdishes";
import AboutUs from "@/components/aboutus";
import ChefSection from "@/components/chefsection";
import Testimonials from "@/components/testimonials";
import AnimatedCursor from "react-animated-cursor";
import Footer from "@/components/footer";
import Welcome from "@/components/welcome";
import Special from "@/components/special";
import Timer from "@/components/timer";
import Imageslider from "@/components/imagemarquee";

export default function Home() {
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
      <div className="bg-gray-200">
        <Navbar />
        <Welcome />
        <PopularFoodItems />
        <LimitedTimeOffers />
        <AboutUs />
        <BestSellingDishes />
        <Special />
        <Timer />
        <ChefSection />
        <Imageslider />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

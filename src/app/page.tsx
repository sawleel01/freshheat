import PopularFoodItems from "@/components/HomePage/popularfooditems";
import Navbar from "@/components/HomePage/navbar";
import LimitedTimeOffers from "@/components/HomePage/limitedtimeoffer";
import BestSellingDishes from "@/components/HomePage/bestsellingdishes";
import AboutUs from "@/components/HomePage/aboutus";
import ChefSection from "@/components/HomePage/chefsection";
import Testimonials from "@/components/HomePage/testimonials";
import AnimatedCursor from "react-animated-cursor";
import Footer from "@/components/HomePage/footer";
import Welcome from "@/components/HomePage/welcome";
import Special from "@/components/HomePage/special";
import Timer from "@/components/HomePage/timer";
import Imageslider from "@/components/HomePage/imagemarquee";
import NewsSlider from "@/components/HomePage/latestnews/news slider";
import CustomCursor from "@/components/CustomCursor/customcursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="bg-stone-100">
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
        <NewsSlider />
        <Footer />
      </div>
    </>
  );
}

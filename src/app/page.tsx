import PopularFoodItems from "@/components/popularfooditems";
import Navbar from "@/components/navbar";
import LimitedTimeOffers from "@/components/limitedtimeoffer";
import BestSellingDishes from "@/components/bestsellingdishes";
import AboutUs from "@/components/aboutus";
import ChefSection from "@/components/chefsection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <PopularFoodItems />
      <LimitedTimeOffers />
      <AboutUs />
      <BestSellingDishes />
      <ChefSection />
    </div>
  );
}

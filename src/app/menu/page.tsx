import CustomCursor from "@/components/CustomCursor/customcursor";
import ChefSection from "@/components/HomePage/chefsection";
import Footer from "@/components/HomePage/footer";
import Imageslider from "@/components/HomePage/imagemarquee";
import Navbar from "@/components/HomePage/navbar";
import Timer from "@/components/HomePage/timer";
import MenuHeroSection from "@/components/menu/menuherosection";
import MenuIntro from "@/components/menu/menuintro";

export default function MenuPage() {
  return (
    <>
      <CustomCursor />
      <div className="bg-stone-200">
        <Navbar />
        <MenuIntro />
        <div className="my-24"></div>
        <MenuHeroSection />
        <Timer />
        <ChefSection />
        <Imageslider />
        <Footer />
      </div>
    </>
  );
}

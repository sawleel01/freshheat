import ChefIntro from "@/components/Chef/chefintro";
import CustomCursor from "@/components/CustomCursor/customcursor";
import ChefSection from "@/components/HomePage/chefsection";
import Footer from "@/components/HomePage/footer";
import Navbar from "@/components/HomePage/navbar";

export default function ChefPage() {
  return (
    <>
      <CustomCursor />
      <div>
        <Navbar />
        <ChefIntro />
        <ChefSection />
        <Footer />
      </div>
    </>
  );
}

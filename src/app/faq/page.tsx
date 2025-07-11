import CustomCursor from "@/components/CustomCursor/customcursor";
import FAQHeroSection from "@/components/faq/faqherosection";
import FAQIntro from "@/components/faq/faqintro";
import Footer from "@/components/HomePage/footer";
import Navbar from "@/components/HomePage/navbar";

export default function FAQ() {
  return (
    <>
      <CustomCursor />
      <div className="bg-stone-200">
        <Navbar />
        <FAQIntro />
        <FAQHeroSection />
        <Footer />
      </div>
    </>
  );
}

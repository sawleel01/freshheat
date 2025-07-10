import ContactDetails from "@/components/ContactUs/contactdetails";
import ContactUsHeroSection from "@/components/ContactUs/contactHero";
import GetInTouch from "@/components/ContactUs/getintouch";
import Map from "@/components/ContactUs/map";
import Footer from "@/components/HomePage/footer";
import Navbar from "@/components/HomePage/navbar";
import AnimatedCursor from "react-animated-cursor";

export default function ContactUsPage() {
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
        <ContactUsHeroSection />
        <ContactDetails />
        <GetInTouch />
        <Map />
        <Footer />
      </div>
    </>
  );
}

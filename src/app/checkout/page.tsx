import CheckoutHero from "@/components/Checkout/checkouthero";
import CheckoutIntro from "@/components/Checkout/checkoutintro";
import CustomCursor from "@/components/CustomCursor/customcursor";
import Footer from "@/components/HomePage/footer";
import Navbar from "@/components/HomePage/navbar";

export default function Checkout() {
  return (
    <>
      <CustomCursor />
      <div className="bg-stone-200">
        <Navbar />
        <CheckoutIntro />
        <CheckoutHero />
        <Footer />
      </div>
    </>
  );
}

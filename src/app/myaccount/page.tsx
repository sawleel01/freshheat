import CustomCursor from "@/components/CustomCursor/customcursor";
import Footer from "@/components/HomePage/footer";
import Navbar from "@/components/HomePage/navbar";
import MyAccountHero from "@/components/MyAccount/herosection";
import MyAccountIntro from "@/components/MyAccount/myaccountintro";

export default function MyAccount() {
  return (
    <>
      <CustomCursor />
      <div className=" bg-stone-200">
        <Navbar />
        <MyAccountIntro />
        <MyAccountHero />
        <Footer />
      </div>
    </>
  );
}

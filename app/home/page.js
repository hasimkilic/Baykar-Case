import Header from "@/components/Header";
import HeaderMain from "@/components/HeaderMain";
import Section from "@/components/Section";
import BestOf from "@/components/BestOf";
import WhyUs from "@/components/WhyUs";
import BecauseOfWhy from "@/components/BecauseOfWhy";
import GrowYour from "@/components/GrowYour";
import FooterTop from "@/components/FooterTop";
import Footer from "@/components/Footer";

export default function Dashboard() {
  return (
    <div className="bg-[#fffbed] overflow-x-hidden">
      <Header />
      <div className="isolate pt-14">
        <HeaderMain />
        <Section />
        <BestOf />
        <WhyUs />
        <BecauseOfWhy />
        <GrowYour />
        <FooterTop />
        <Footer />
      </div>
    </div>
  );
}

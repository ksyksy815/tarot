import BasicPage from "@/components/BasicPage";
import OurServices from "@/screens/about/OurServices";
import WhyChoose from "@/screens/about/WhyChoose";
import HeroSection from "@/screens/home/HeroSection";
import Testimonials from "@/screens/home/Testimonials";

export default function Home() {
  return (
    <BasicPage>
      <HeroSection />
      <WhyChoose />
      <OurServices />
      <Testimonials />
    </BasicPage>
  );
}

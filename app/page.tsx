import BasicPage from "@/components/BasicPage";
import OurServices from "@/screens/about/OurServices";
import HeroSection from "@/screens/home/HeroSection";
import Testimonials from "@/screens/home/Testimonials";
import WhyChoose from "@/screens/home/WhyChoose";

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

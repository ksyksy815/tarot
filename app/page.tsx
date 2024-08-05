import OurServices from "@/screens/about/OurServices";
import WhyChoose from "@/screens/about/WhyChoose";
import HeroSection from "@/screens/home/HeroSection";
import Testimonials from "@/screens/home/Testimonials";

export default function Home() {
  return (
    <div className={"w-full flex flex-col gap-y-[100px]"}>
      <HeroSection />
      <WhyChoose />
      <OurServices />
      <Testimonials />
    </div>
  );
}

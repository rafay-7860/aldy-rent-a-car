import { Hero } from "@/components/Hero";
import { FeaturedCars } from "@/components/FeaturedCars";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />
      <About />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </>
  );
}

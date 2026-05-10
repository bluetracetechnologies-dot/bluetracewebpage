import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Vision } from "@/components/sections/Vision";
import { TechStack } from "@/components/sections/TechStack";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProducts />
      <Vision />
      <TechStack />
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}

import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { EngineeringPackages } from "@/components/sections/EngineeringPackages";
import { TechStack } from "@/components/sections/TechStack";
import { IndustriesAndProof } from "@/components/sections/IndustriesAndProof";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <EngineeringPackages />
      <TechStack />
      <IndustriesAndProof />
      <CaseStudies />
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}

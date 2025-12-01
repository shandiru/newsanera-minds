import { useState } from "react";
import HeroSection from "../components/Availablecourses/HeroSection";
import ProgramsSection from "../components/Availablecourses/ProgramsSection";
import CTASection from "../components/Availablecourses/CTASection";

export default function Availablecourses() {
  // Default category is "organisations"
  const [selectedCategory, setSelectedCategory] = useState("organisations");

  return (
    <>
      <HeroSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProgramsSection selectedCategory={selectedCategory} />
      <CTASection />
    </>
  );
}

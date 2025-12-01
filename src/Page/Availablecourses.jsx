import { useState, useEffect } from "react";
import HeroSection from "../components/Availablecourses/HeroSection";
import ProgramsSection from "../components/Availablecourses/ProgramsSection";
import CTASection from "../components/Availablecourses/CTASection";

export default function Availablecourses() {
  const [selectedCategory, setSelectedCategory] = useState("organisations");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat");

    if (cat) {
      setSelectedCategory(cat);
    }
  }, []);

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

import AboutBanner from "../components/AboutPage/AboutBanner"
import AboutIntro from "../components/AboutPage/AboutIntro"
import AboutContent from "../components/AboutPage/AboutContent"
import AboutContentWithImage from "../components/AboutPage/AboutContentWithImage"
import AboutWorkWith from "../components/AboutPage/AboutWorkWith"
import AboutClosing from "../components/AboutPage/AboutClosing"

export default function AboutPage() {
  return (
    <main>
      <AboutBanner />
      <AboutIntro />
      <AboutContent />
      <AboutContentWithImage />
      <AboutWorkWith />
      <AboutClosing />
    </main>
  )
}

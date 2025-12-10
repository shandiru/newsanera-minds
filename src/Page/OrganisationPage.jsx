import OrgBanner from "../components/Organisation/OrgBanner"
import OrgIntro from "../components/Organisation/OrgIntro"
import OrgExpect from "../components/Organisation/OrgExpect"
import OrgWhyItMatters from "../components/Organisation/OrgWhyItMatters"
import OrgClosing from "../components/Organisation/OrgClosing"

export default function OrganisationPage() {
  return (
    <main>
      <OrgBanner />
      <OrgIntro />
      <OrgExpect />
      <OrgWhyItMatters />
      <OrgClosing />
    </main>
  )
}

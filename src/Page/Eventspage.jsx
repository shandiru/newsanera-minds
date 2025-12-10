"use client"
import EventBanner from "../components/Events/EventBanner"
import EventIntro from "../components/Events/EventIntro"
import EventImageBlock from "../components/Events/EventImageBlock"
import EventFormats from "../components/Events/EventFormats"
import EventExpect from "../components/Events/EventExpect"
import EventClosing from "../components/Events/EventClosing"

export default function EventsPage() {
  return (
    <main>
      <EventBanner />
      <EventIntro />
      <EventImageBlock />
      <EventFormats />
      <EventExpect />
      <EventClosing />
    </main>
  )
}

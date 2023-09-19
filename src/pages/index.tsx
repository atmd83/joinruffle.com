import {useState} from "react";

import Hero from "../components/hero/index";
import Tabs from "../components/tabs/index";
import TicketInfo from "../components/tabs/ticket-info";
import EventInfo from "../components/tabs/event-info";
import Gallery from "../components/tabs/gallery";
import Intro from "../components/intro/index";

export default function Home() {
    const [activeTab, setActiveTab] = useState(0);

  return (
    <main className={`flex min-h-screen flex-col items-center p-4`}>
      <Hero />
<Intro />


        <Tabs active={activeTab} changeActiveTab={setActiveTab}>
            <TicketInfo />
            <EventInfo />
            <Gallery />
        </Tabs>
    </main>
  )
}

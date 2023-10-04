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
      <a
          href={
              "https://www.wtm360.co.uk/amir-khan-1695128410-amir-khan-live-podcast-event-with-steve-bunce.html"
          }
          target={"_blank"}
      >
        <img className={'w-full cursor-pointer'} src={'/images/app-image.jpg'} alt={''} />
      </a>
    // <main className={`flex min-h-screen flex-col items-center p-4`}>
    //   {/*<Hero />*/}
    //   {/*  <Intro />*/}
    //
    //
    //     {/*<Tabs active={activeTab} changeActiveTab={setActiveTab}>*/}
    //     {/*    <TicketInfo />*/}
    //     {/*    <EventInfo />*/}
    //     {/*    <Gallery />*/}
    //     {/*</Tabs>*/}
    // </main>
  )
}

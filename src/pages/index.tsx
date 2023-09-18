import Hero from "../components/hero/index";
import Tabs from "../components/tabs/index";
import {useState} from "react";

export default function Home() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <p>ok</p>
    )

  // return (
  //   <main className={`flex min-h-screen flex-col items-center p-4`}>
  //     <Hero />
  //       <div className="flex flex-row w-full">
  //           <div className="basis-1/2">
  //               <h1 className={'text-4xl'}>Amir Khan</h1>
  //           </div>
  //           <div className="basis-1/2">02</div>
  //       </div>
  //
  //
  //       <Tabs active={activeTab} changeActiveTab={setActiveTab}>
  //           <div>1</div>
  //           <div>2</div>
  //           <div>3</div>
  //           <div>4</div>
  //       </Tabs>
  //   </main>
  // )
}

import {useState} from "react";
import Modal from "../modal";

const TicketInfo = () => {
    const [open, setOpen] = useState(false)
    const [hotelOpen, setHotelOpen] = useState(false)

    return (
        <>
            <div className="p-4 pt-8 flex flex-col md:flex-row w-full">
                <div className="basis-full md:basis-1/2 font-normal text-black md:text-white text-left">
                    <p>December 6th 2023</p>
                    <p>Camp and Furnace Liverpool</p>

                    <aside className={'font-bold pt-4 pr-4'}>
                        <p>Standard Tickets available at £70.<br/>Golden Circle ticket at £120 per ticket including drink, meet & greet and more.
                            <a
                                onClick={() => setHotelOpen(true)}
                                type="link"
                                className="ml-3

                            text-black md:text-white font-normal cursor-pointer underline"

                            >View hotel options.
                            </a>
                        </p>
                    </aside>
                        <button
                            onClick={() => setOpen(true)}
                            type="button"
                                className="
                            mt-4
                            mb-4
                            py-4 md:py-0
                            px-0 md:px-4
                            mr-0 md:mr-4
                            w-full
                            md:w-auto
                            text-center
                            bg-black md:bg-white
                            text-white md:text-black
                            font-bold rounded-full p
                            transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                        >
                            MORE INFORMATION
                        </button>

                    <a href={'https://www.wtm360.co.uk/amir-khan-1695128410-amir-khan-live-tour-podcast-with-steve-bunce.html'} target={'_blank'}>
                        <button
                            type="button"
                            className="
                            mt-4
                            mb-4
                            py-4 md:py-0
                            px-0 md:px-4
                            w-full
                            md:w-auto
                            text-center
                            bg-black md:bg-white
                            text-white md:text-black
                            font-bold rounded-full p
                            transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                        >
                            BUY YOUR TICKET NOW
                        </button>
                    </a>
                </div>
                <div className="text-small font-light text-black md:text-white basis-full md:basis-1/2 text-left">
                    <p>Right at the heart of the Baltic Triangle, Camp and Furnace encompasses a range of versatile warehouse and studio spaces. Our eclectic mix of industrial and rustic character, create a unique and unparalleled customer experience, no matter the event.</p>
                    <div className="p-4 mt-4 pl-0 pr-0 flex flex-row w-full">
                        <div className="basis-1/3 text-black font-medium md:text-white text-left">
                            <p>Ticket<br/>Box office</p>
                        </div>
                        <div className="text-small font-light text-black md:text-white basis-2/3 text-left">
                            <p>Our fully intuitive ticketing system
                                guarantees your fans first access to
                                the best seats for their budget for every</p>
                        </div>
                    </div>
                </div>


            </div>

            <Modal open={hotelOpen} setOpen={setHotelOpen} title={'More Information'}>
                <section className={'text-black text-left'}>
                    <p className={'mb-4 text-lg'}>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="p-0 grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg"
                                 src="/images/arthouse-luxury-4-sleeper-001.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg"
                                 src="/images/arthouse-luxury-4-sleeper-002.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg"
                                 src="/images/arthouse-luxury-6-sleeper-001.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg"
                                 src="/images/arthouse-luxury-6-sleeper-002.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg"
                                 src="/images/arthouse-skyline-001.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg"
                                 src="/images/arthouse-skyline-002.jpg" alt="" />
                        </div>
                    </div>
                </section>
            </Modal>

            <Modal open={open} setOpen={setOpen} title={'More Information'}>
                <section className={'text-black text-left'}>
                    <p className={'mb-4 text-lg'}>Who Do You Think I Am? With special guests and the best live music.</p>
                    <ul className={'list-disc mb-4'}>
                        <li> Round One: The Early Years</li>
                        <li> Round Two: The Professional Journey</li>
                        <li>Intermission</li>
                        <li>Round Three: Real Fight Stories</li>
                        <li>Behind-the-Scenes Insights and Fan Q&A</li>
                        <li>Round Four : Legacy and Future Ambitions</li>
                        <li>Grand Finale: A Message of Inspiration</li>
                    </ul>
                    <p className={'mb-4'}>
                        In an electrifying first for boxing, superstar former 2 weight world champion and youngest ever boxing Olympic medallist Amir Khan takes to the stage for his first ever live shows as he launches his new podcast series.
                    </p>

                </section>




            </Modal>
        </>

    )
}

export default TicketInfo;
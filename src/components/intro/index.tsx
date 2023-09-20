import TicketInfo from "../tabs/ticket-info";

const Intro = () => {
    return (
        <div className="-mt-4 p-4 rounded-t-lg flex flex-col md:flex-row w-full bg-[#fff] md:bg-black">
            <div className="basis-full md:basis-1/2">
                <h1 className={'text-black md:text-white font-medium text-5xl tracking-tight mb-4 md:mb-0'}>Amir Khan</h1>

                <TicketInfo />
            </div>
            <div className="text-black md:text-white basis-full md:basis-1/2">
                <h3 className={'text-2xl mb-8'}>Amir Khan &ldquo;Who Do You Think I Am?&rdquo;</h3>
                <p>
                    The Live Tour Podcast With Steve Bunce Plus Very Special Guests From Boxing and Entertainment
                </p>

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
            </div>
        </div>
    );
}

export default Intro;
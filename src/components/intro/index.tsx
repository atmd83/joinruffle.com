import TicketInfo from "../tabs/ticket-info";

const Intro = () => {
    return (
        <div className="mt-0 p-4 flex flex-col md:flex-row w-full bg-[#fff] md:bg-white">
            <div className="text-black basis-full md:basis-1/2">
                <h1 className={'text-black font-medium text-3xl tracking-tight mb-4 md:mb-4'}>Amir Khan &ldquo;Who Do You Think I Am?&rdquo;</h1>

                <h1 className={'text-black font-medium text-2xl tracking-tight mb-4 md:mb-4'}>
                    The Live Tour Podcast With Steve Bunce <br/>Plus Very Special Guests From Boxing and Entertainment Wednesday 6th December 2023
                </h1>

                <p className={'mb-4'}>Camp and Furnace, Liverpool</p>
                <blockquote className={'mb-4'}>
                    &ldquo;I went to see Mike Tyson’s live show in San Francisco and it totally blew me away. It was a brilliant, inspiring night out. Funny, sad, revealing. It had everything. Right then I knew what I wanted to do for my own live show...make it massive!&rdquo;
                    <cite> - Amir Khan</cite>
                </blockquote>

                <p className={'mb-4 mt-4 font-bold text-lg'}>Who Do You Think I Am? With special guests and the best live music.</p>
                <ul className={'mb-4'}>
                    <li className={'mb-2'}> Round One: The Early Years</li>
                    <li className={'mb-2'}> Round Two: The Professional Journey</li>
                    <li className={'mb-2'}>Intermission</li>
                    <li className={'mb-2'}>Round Three: Real Fight Stories</li>
                    <li className={'mb-2'}>Behind-the-Scenes Insights and Fan Q&A</li>
                    <li className={'mb-2'}>Round Four : Legacy and Future Ambitions</li>
                    <li className={'mb-2'}>Grand Finale: A Message of Inspiration</li>
                </ul>

            </div>
            <div className="text-black basis-full md:basis-1/2">
                <h3 className={'text-2xl mb-8'}>In an electrifying first for boxing, superstar former 2 weight world champion and youngest ever boxing Olympic medallist Amir Khan takes to the stage for his first ever live shows as he launches his new podcast series.</h3>

                <p className={'mb-4'}>Ticket buyers and listeners will be able to step into the thrilling world of one of boxing’s most famous, charismatic and accomplished elite champions.</p>

                <p className={'mb-4'}>
                While the podcast captures the essence of what makes Amir such a fascinating character, combining it with embarking on his first-ever live tour sees him realise another long-held ambition, to take the stage before a captivated audience, sharing his remarkable journey from humble beginnings to global superstardom with all the trials and tribulations which have happened – and are still happening –along the way.
                </p>
                    <p className={'mb-4'}>
                With world class production values, a key part of the show and lots of his favourite live music and guests, Amir will walk the audience through some of his most memorable fight nights, while revealing many often-shocking stories from behind the scenes which have never been made public before.
                    </p>
                        <p className={'mb-4'}>
                With a cast of household names joining him onstage during the 2nd half of the show, and a no-holds barred Q&A with the audience, Amir will show how he combined reaching the pinnacle of his sport with his experiences as a reality TV star of his own BBC1 show, and how he handles mixing with global leaders one week and being back in the gym helping some of his most hotly tipped young prospects the next.
                Check availability
                        </p>
            </div>
        </div>
    );
}

export default Intro;
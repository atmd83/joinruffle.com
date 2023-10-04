import TicketInfo from "../tabs/ticket-info";

const Intro = () => {
    return (
        <div className="mt-0 p-4 flex flex-col md:flex-row w-full bg-[#fff] md:bg-white">
            <div className="text-black basis-full md:basis-1/2">
                <h1 className={'text-black font-medium text-3xl tracking-tight mb-4 md:mb-4'}>Amir Khan &ldquo;Who Do You Think I Am?&rdquo;</h1>

                <h1 className={'text-black font-medium text-2xl tracking-tight mb-4 md:mb-4'}>
                    The Live Tour Podcast With Steve Bunce <br/>Plus Very Special Guests From Boxing and Entertainment<br/><br/>Live Music & DJ's<br/><small>Wednesday 6th December 2023</small>
                </h1>

                <p className={'mb-4'}>Camp and Furnace, Liverpool<br/><small>(The home of Eurovision 2023)</small></p>
                <blockquote className={'mb-4'}>
                    &ldquo;I went to see Mike Tyson’s live show in San Francisco and it totally blew me away. It was a brilliant, inspiring night out. Funny, sad, revealing. It had everything. Right then I knew what I wanted to do for my own live show...make it massive!&rdquo;
                    <cite> - Amir Khan</cite>
                </blockquote>

                <p className={'mb-4 mt-4 font-bold text-lg'}>Who Do You Think I Am? With special guests and the best live music.</p>
                <ul className={'mb-4'}>
                    <li className={'mb-2'}><p>Round One: The Early Years</p><p><small>The public and media make their case via Steve Bunce and Amir gives them his full and Frank replies.</small></p></li>
                    <li className={'mb-2'}><p>Round Two: The Professional Journey</p><p><small>With the aid of his video screen and spurred on by Steve Bunce, Amir walks us through those key moments with humour and raw honesty</small></p></li>
                    <li className={'mb-2'}>Intermission</li>
                    <li className={'mb-2'}><p>Round Three: Real Fight Stories</p><p><small>Featuring special guests revealing behind-the-ropes true stories, jaw-dropping facts fight fans knew nothing about…</small></p></li>
                    <li className={'mb-2'}><p>Round Four: Fan Q&A</p><p><small>No holds barred and no quarter given as Amir interacts with the audience, any question is a good question - to submit yours you need to register for the competition below and - time permitting - your question will be included in the Q&A.</small></p></li>
                    <li className={'mb-2'}><p>Round Five: Legacy and Future Ambitions</p></li>
                    <li className={'mb-2'}><p>Grand Finale: A Message of Inspiration</p></li>
                </ul>

            </div>
            <div className="text-black basis-full md:basis-1/2">
                <h3 className={'text-2xl mb-4'}>Limited VIP Experiences available from £120</h3>

                <p className={'mb-4'}>Including priority seats nearer to the front, a meet and greet and photo with Amir, a free drink on arrival and a ticket to the VIP after party with DJ's and Live Entertainment*</p>

                <h3 className={'text-xl mb-0'}>General Access Tickets are £70.</h3>
                <p className={'mb-4'}><small>Add on the Amir Meet & Greet & Photo for £70 below or pay on the night**</small></p>

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
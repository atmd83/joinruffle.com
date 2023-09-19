
const Intro = () => {
    return (
        <div className="-mt-4 p-4 rounded-t-lg flex flex-col md:flex-row w-full bg-[#fff] md:bg-black">
            <div className="basis-full md:basis-1/2">
                <h1 className={'text-black md:text-white font-medium text-5xl tracking-tight mb-4 md:mb-0'}>Amir Khan</h1>
            </div>
            <div className="text-black md:text-white basis-full md:basis-1/2">
                <h3 className={'text-2xl'}>Amir Khan &ldquo;Who Do You Think I Am?&rdquo;</h3>
                <p>
                    The Live Tour Podcast With Steve Bunce Plus Very Special Guests From Boxing and Entertainment
                </p>

                <blockquote className={'text-xl mt-4'}>
                    &ldquo;I went to see Mike Tyson’s live show in San Francisco and it totally blew me away.
                    It was a brilliant, inspiring night out. Funny, sad, revealing.
                    It had everything. Right then I knew what I wanted to do for my own live show … make it massive!&rdquo;
                    <cite className={'ml-4 font-medium'}>Amir Khan</cite>
                </blockquote>
            </div>
        </div>
    );
}

export default Intro;
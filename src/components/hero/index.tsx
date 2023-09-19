import Image from 'next/image';

const Hero = () => {

    return (
        <>
            <Image
                className={'hidden md:block rounded-t-lg'}
                sizes="100vw"
                width={300}
                height={300}
                // className="h-auto max-w-full"
                src={"/images/poster.png" }
                alt="image description"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
            <Image
                className={'block md:hidden rounded-t-lg'}
                sizes="100vw"
                width={300}
                height={300}
                // className="h-auto max-w-full"
                src={"/images/poster-mobile.png" }
                alt="image description"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
        </>
    );
}

export default Hero;
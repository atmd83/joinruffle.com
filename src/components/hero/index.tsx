import Image from 'next/image'

const Hero = () => {
    return (
        <Image
            sizes="100vw"
            width={300}
            height={300}
            // className="h-auto max-w-full"
            src="/images/amir-hero.png"
            alt="image description"
            style={{
                width: '100%',
                height: 'auto',
            }}
        />
    );
}

export default Hero;
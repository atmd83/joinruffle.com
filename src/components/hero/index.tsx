import Image from 'next/image';
import { isMobile } from 'react-device-detect';

const Hero = () => {

    return (
        <Image
            className={'rounded-t-lg'}
            sizes="100vw"
            width={300}
            height={300}
            // className="h-auto max-w-full"
            src={isMobile ? "/images/poster-mobile.png" : "/images/poster.png" }
            alt="image description"
            style={{
                width: '100%',
                height: 'auto',
            }}
        />
    );
}

export default Hero;
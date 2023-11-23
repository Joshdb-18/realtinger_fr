// Import the necessary module from 'next/image'
import Image from 'next/image';

// ...

const HeroIllustration = () => {
  return (
    <Image
      src="/../public/hero-img.png"
      alt="Hero Illustration"
      width={410}
      height={410}
    />

    
  );
};

export default HeroIllustration;

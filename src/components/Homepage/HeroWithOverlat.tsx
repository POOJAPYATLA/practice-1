'use client';

import Image from 'next/image';

export default function HeroWithOverlay() {
  return (
    <section className="relative w-full h-[500px]">
     
      <Image
        src="/images/banner.avif" 
        alt="Paris Street"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

    <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 via-orange-700/40 to-transparent z-10" />

     
      <div className="absolute bottom-0 left-0  z-30">
        <img src="/images/torn-edge-white.png" alt="torn edge" className="w-full" />
      </div>
    </section>
  );
}

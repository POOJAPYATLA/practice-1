'use client';

import Image from 'next/image';
import { StoreButton } from '../StoreButton';



export default function Banner2() {
  return (
    <section className="bg-gray-900 text-white py-10 px-4 flex justify-center items-center">
      <div className="relative max-w-6xl w-full bg-gradient-to-r from-black via-gray-800 to-black rounded-xl p-10 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight">
            Simple way to <br /> explore nightlife <br /> destinations
          </h1>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <StoreButton
              src="/images/google-play.webp"
              alt="Google Play"
              title="GET IT ON"
              store="Google Play"
              className='flex items-center bg-white text-black px-3 py-2 rounded-md shadow-md'
            />
            <StoreButton
              src="/images/apple.jpg"
              alt="App Store"
              title="GET IT ON"
              store="Apple Store"
              className='flex items-center bg-white text-black px-3 py-2 rounded-md shadow-md'
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
          <div className="absolute -left-10 -top-10 hidden md:block">
            <Image
              src="/images/card-1.avif"
              alt="Card shadow"
              width={200}
              height={150}
              className="rotate-[-15deg] rounded-md shadow-lg"
            />
          </div>
          <Image
            src="/images/card-1.avif"
            alt="Card Main"
            width={192}
            height={144}
            className="rounded-lg shadow-lg z-10"
            priority
          />
        </div>
      </div>
    </section>
  );
}

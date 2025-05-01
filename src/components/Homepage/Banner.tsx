import Image from 'next/image';

export default function Banner() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[60vh] md:h-[80vh]  bg-no-repeat bg-cover bg-center">
      <Image src="/images/banner.avif" alt="Nightlife Banner" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute bottom-10 left-10 lg:left-64 lg:top-28 z-10">
      <h1 className="flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
  <span>Discover the</span>
  <span>Best Nightlife</span>
  <span>in PARIS</span>
</h1>
<p className="mt-4 flex flex-col text-white text-sm sm:text-base md:text-lg">
  <span>From student bars to VIP clubs,</span>
  <span className="text-yellow-400">find your perfect spot tonight!</span>
</p>
        <button className="mt-6 px-6 py-2 border border-yellow-400 text-white rounded-full hover:bg-yellow-400 hover:text-black transition">
          EXPLORE NOW
        </button>
      </div>
    </section>
  );
}
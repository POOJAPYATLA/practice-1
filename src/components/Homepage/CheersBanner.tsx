export default function CheersBanner() {
    return (
      <section className="bg-gradient-to-r from-[#fa8128] to-[#3944bc] py-10">
        <div className="flex flex-col md:flex-row justify-between px-10 md:justify-around items-center">
          <p className="text-white text-[25px]">
            Find bars, clubs,<br /> student hotspots, and<br /> VIP venues tailored to your vibe.
            <i className="fa-solid fa-arrow-right-long"></i>
          </p>
          <p className="text-orange-500 font-bold text-[50px]">Cheers</p>
        </div>
      </section>
    );
  }
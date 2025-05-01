'use client';
import Image from 'next/image';

interface BarSectionProps {
  imageSrc: string;
  heading: string;
  description: string;
  totalBars: string;
  totalCategories: string;
  popularBars: string;
}

const BestBarClub: React.FC<BarSectionProps> = ({
  imageSrc,
  heading,
  description,
  totalBars,
  totalCategories,
  popularBars,
}) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-16 bg-white">
      {/* Left Image */}
      <div className="w-full md:w-[40%] lg:w-[35%] max-w-lg">
  <Image
    src={imageSrc}
    alt="Bar Image"
    width={600}
    height={400}
    className="rounded-xl object-cover w-full h-full"
  />
</div>


      {/* Right Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{heading}</h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">{description}</p>

        {/* Stats Section */}
        <div className="grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-300">
          <div className="text-center mt-2">
            <p className="text-sm text-gray-500">Total Bars</p>
            <p className="text-2xl font-bold text-yellow-500">{totalBars}</p>
          </div>
          <div className="text-center mt-2">
            <p className="text-sm text-gray-500">Total Categories</p>
            <p className="text-2xl font-bold text-yellow-500">{totalCategories}</p>
          </div>
          <div className="text-center mt-2">
            <p className="text-sm text-gray-500">Popular Bars</p>
            <p className="text-2xl font-bold text-yellow-500">{popularBars}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestBarClub;

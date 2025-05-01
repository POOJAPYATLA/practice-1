import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Venue } from '@/interfaces/Venue';
import SwiperCarousel from './SwiperCarousel';

interface ReusableBarSectionProps {
  title: string;
  subtitle?: string;
  items: Venue[];
  slug: string;
  basePath: string; // New prop to determine the category (e.g., "Bars" or "Clubs")
  cardClassName?: string;
  addressClass?: string; 
}

const ReusableBarSection: React.FC<ReusableBarSectionProps> = ({
  title,
  subtitle = "Lorem Ipsum is simply",
  items,
  slug,
  basePath, // Destructure the new prop
  cardClassName = "relative bg-gradient-to-br from-[#f892339d] to-[#e7a22ccc] px-5 py-4",
  addressClass = "flex items-center text-sm text-gray-700 mb-1", 
}) => {
  return (
    <div>
      <SwiperCarousel
        subtitle={subtitle}
        title={title}
        items={items}
        cardClassName={cardClassName}
        priceClass="flex items-center ml-auto text-sm font-semibold"
        nameClass="text-lg font-semibold mb-1"
        addressClass={addressClass}
        viewMoreUrl={`/${basePath}/category/${slug}`} // Use basePath dynamically
      />
    </div>
  );
};

export default ReusableBarSection;
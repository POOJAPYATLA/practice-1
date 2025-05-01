'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCarousel from '../SwiperCarousel';
import { bars } from '@/data/bars';

export default function PopularBars() {
  return (
   
      <SwiperCarousel
        subtitle="Lorem Ipsum is simply"
        title="Popular Bars"
        items={bars}
        cardClassName="relative bg-gradient-to-br from-[#f892339d] to-[#e7a22ccc] px-5 py-4"
        priceClass="flex items-center ml-auto text-sm font-semibold"
        nameClass="text-lg font-semibold mb-1"
        addressClass="flex items-center text-sm text-gray-700 mb-1"
      />
    );
  
}





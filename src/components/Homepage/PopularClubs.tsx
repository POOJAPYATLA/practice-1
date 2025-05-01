'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCarousel from '../SwiperCarousel';
import { clubs } from '@/data/clubs';

export default function PopularClubs() {
  return (
    <SwiperCarousel
    subtitle="Lorem Ipsum is simply"
    title="Popular Clubs"
    items={clubs}
    cardClassName="relative bg-gradient-to-br from-[#818380] to-[#012a4a] px-5 py-4"
    priceClass="flex items-center ml-auto text-sm font-semibold text-white"
    nameClass="text-lg font-semibold mb-1 text-white"
    addressClass="flex items-center text-sm text-white mb-1"
  />
  );
}





'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import SectionHeading from './SectionHeading';
import BarCard from './cards/BarsCard';
import Link from 'next/link';

interface SwiperCarouselProps {
  subtitle: string;
  title: string;
  items: Array<{
    name: string;
    image: string;
    logo: string;
    rating: string;
    price: string;
    address: string;
    tags: string[];
  }>;
  cardClassName: string;
  priceClass: string;
  nameClass: string;
  addressClass: string;
  viewMoreUrl?: string; 
}

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  subtitle,
  title,
  items,
  cardClassName,
  priceClass,
  nameClass,
  addressClass,
  viewMoreUrl,
}) => {
  
  const groupedSlides = [];
  for (let i = 0; i < items.length; i += 4) {
    groupedSlides.push(items.slice(i, i + 4));
  }
  return (
    <section className="py-5 bg-white">
      <div className="mx-auto px-4 ">
        <SectionHeading subtitle={subtitle} title={title} />
        <div className="relative mt-3 ">
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
          >
            {groupedSlides.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-16 ">
                  {group.map((item, i) => (
                    <div className='flex items-center justify-center'>
                    <BarCard
                      key={i}
                      name={item.name}
                      image={item.image}
                      logo={item.logo}
                      rating={item.rating}
                      price={item.price}
                      address={item.address}
                      tags={item.tags}
                      className={cardClassName}
                      priceClass={priceClass}
                      nameClass={nameClass}
                      addressClass={addressClass}
                    />
                    </div>
                    
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Arrows */}
          <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-2xl cursor-pointer text-orange-500">
            &#10094;
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-2xl cursor-pointer text-orange-500">
            &#10095;
          </div>
        </div>
        {/* Pagination Dots */}
        <div className="swiper-pagination-custom flex justify-center mt-12"></div>
        {/* View More Button */}
        {viewMoreUrl && (
          <div className="text-center ">
            <Link
  href={viewMoreUrl}
  className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full"
>
  View More
</Link>

          </div>
        )}
        <style jsx global>{`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: #e5e7eb;
            opacity: 1;
            border: 1px solid #f97316;
          }
          .swiper-pagination-bullet-active {
            background-color: #f97316;
          }
        `}</style>
      </div>
    </section>
  );
};

export default SwiperCarousel;

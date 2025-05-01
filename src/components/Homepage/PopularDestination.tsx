'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import DestinationCard from '../cards/DestinationCard';
import SectionHeading from '../SectionHeading';

export default function CardSlider() {
  return (
    <section className=" bg-white my-10">
      <div className=" mx-auto px-4 ">
      <SectionHeading
  subtitle="Lorem Ipsum is simply"
  title="Popular Destinations"
/>

      
      <div className="relative mt-8  ">
     
  <Swiper
    modules={[Navigation, Autoplay]}
   
    slidesPerGroup={1}
    spaceBetween={20}
    loop={true}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    navigation={{
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    }}
    breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
  >
  
    {destinations.map((dest, index) => (
  <SwiperSlide key={index}>
    <div className='mx-5 flex items-center justify-center my-10'>
    <DestinationCard 
    id={dest.id}
      image={dest.image}
      name={dest.name}
      location={dest.location}
      stats={dest.stats}
    />
    </div>
   
  </SwiperSlide>
))}
   
   
  </Swiper>
  

  {/* Custom Arrows */}
  <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-2xl cursor-pointer text-orange-500 mr-5">
    &#10094;
  </div>
  <div className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-2xl cursor-pointer text-orange-500 ml-5">
    &#10095;
  </div>
</div>

      </div>
     </section>
   
  );
}


const destinations = [
    {
        id: 1,
        name: 'Pigalle',
        location: 'Paris',
        image: '/images/card-1.avif', 
        stats: [
          { value: '59+', icon: '🌟' },
          { value: '86+', icon: '🎉' },
        ],
      },
      {
        id: 2,
        name: 'Champs Elysees',
        location: 'Paris',
        image: '/images/card-1.avif',
        stats: [
          { value: '59+', icon: '🌟' },
          { value: '86+', icon: '🎉' },
        ],
      },
      {
        id: 3,
        name: 'Le Marais',
        location: 'Paris',
        image: '/images/card-1.avif',
        stats: [
          { value: '59+', icon: '🌟' },
          { value: '86+', icon: '🎉' },
        ],
      },
      {
        id: 4,
        name: 'Chatelet',
        location: 'Paris',
        image: '/images/card-1.avif',
        stats: [
          { value: '59+', icon: '🌟' },
          { value: '86+', icon: '🎉' },
        ],
      },
      {
        id: 5,
        name: 'Pigalle',
        location: 'Paris',
        image: '/images/card-1.avif', 
        stats: [
          { value: '59+', icon: '🌟' },
          { value: '86+', icon: '🎉' },
        ],
      },
      {
        id: 6,
        name: 'Champs Elysees',
        location: 'Paris',
        image: '/images/card-1.avif',
        stats: [
          { value: '59+', icon: '🌟' },
          { value: '86+', icon: '🎉' },
        ],
      },
      {
        id: 7,
        name: 'Le Marais',
        location: 'Paris',
        image: '/images/card-1.avif',
        stats: [
          { value: '59+', icon: '🌟' },
          { value: '86+', icon: '🎉' },
        ],
      },
      {
        id: 8,
        name: 'Chatelet',
        location: 'Paris',
        image: '/images/card-1.avif',
        stats: [
          { value: '59+', icon: '🌟' },
          { value: '86+', icon: '🎉' },
        ],
      },
   
  ];
import React from 'react'
import GridCardLayout from '../GridCardLayout'
import SectionHeading from '../SectionHeading'

const PopularBarGrid = () => {
  return (
    <div className='bg-[#fff7ef] py-10'>
         <SectionHeading
  subtitle="Lorem Ipsum is simply"
  title="Popular Bars"
/>
<GridCardLayout
  leftCards={[card1, card2, card3]}
  centerCard={centerCardData}
  rightCards={[card4, card5, card6]}
/>
    </div>
  )
}

export default PopularBarGrid


const card1 = {
    image: "/images/card-1.avif",
    title: "La Parisienne",
    price: 4.5,
    rating: 4,
    reviews: 24,
  };
  
  const card2 = {
    image: "/images/card-1.avif",
    title: "Brasserie de Lyon",
    price: 6.0,
    rating: 5,
    reviews: 18,
  };
  
  const card3 = {
    image: "/images/card-1.avif",
    title: "BrewDog Soho",
    price: 5.5,
    rating: 4,
    reviews: 36,
  };
  
  const centerCardData = {
    image: "/images/card-1.avif",
    title: "Bieres Cultes Chatelet",
    price: 7.0,
    rating: 5,
    reviews: 45,
  };
  
  const card4 = {
    image: "/images/card-1.avif",
    title: "Belgian Beer Café",
    price: 5.0,
    rating: 4,
    reviews: 29,
  };
  
  const card5 = {
    image: "/images/card-1.avif",
    title: "Pint Central",
    price: 6.5,
    rating: 3,
    reviews: 22,
  };
  
  const card6 = {
    image: "/images/card-1.avif",
    title: "Hops & Dreams",
    price: 4.0,
    rating: 4,
    reviews: 15,
  };
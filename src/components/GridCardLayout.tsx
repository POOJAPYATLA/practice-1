// components/GridCardLayout.tsx
import React from "react";
import Card from "./cards/Card";


type CardProps = {
    image: string;
    title: string;
    price: number;
    rating: number;
    reviews: number;
  };
  
  type GridCardLayoutProps = {
    leftCards: CardProps[];
    centerCard: CardProps;
    rightCards: CardProps[];
  };

  const GridCardLayout: React.FC<GridCardLayoutProps> = ({
    leftCards,
    centerCard,
    rightCards,
  }) => {
  return (
    <div className="  p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Left Column - 3 Cards */}
        <div className="grid grid-rows-3 gap-4">
        {leftCards.map((card, idx) => (
            <Card key={`left-${idx}`} {...card} />
          ))}
        </div>

        {/* Center Column - Single Tall Card */}
<div className="flex md:flex-col shadow-lg bg-white rounded-xl overflow-hidden">
  <img
    src={centerCard.image}
    alt={centerCard.title}
    className="w-[200px] h-[100px] object-cover rounded-l-xl md:w-full md:h-[240px]"
  />
  <div className="relative p-5 ">
    <div className="flex items-center text-yellow-500 text-sm">
      {"⭐".repeat(centerCard.rating)}{" "}
      <span className="ml-1 text-gray-500 text-xs">
        ({centerCard.reviews})
      </span>
    </div>
    <p className="font-medium">{centerCard.title}</p>
    <p className="text-sm text-gray-600">€ {centerCard.price.toFixed(2)}</p>
  </div>
</div>

        {/* Right Column - 3 Cards */}
        <div className="grid grid-rows-3 gap-4">
        {rightCards.map((card, idx) => (
            <Card key={`right-${idx}`} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridCardLayout;

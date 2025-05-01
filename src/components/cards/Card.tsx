// components/cards/Card.tsx
import React from "react";

type CardProps = {
  image: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  vertical?: boolean;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  price,
  rating,
  reviews,
  vertical = false,
}) => {
  return (
    <div
      className={`flex shadow-lg bg-white rounded-xl overflow-hidden ${
        vertical ? "md:flex-col md:h-[300px]" : ""
      }`}
    >
      <img
        src={image}
        alt={title}
        className={`object-cover ${
          vertical
            ? "w-[150px] h-[100px] md:w-full md:h-1/3 md:rounded-t-xl md:rounded-l-none"
            : "w-[200px] h-[100px] rounded-l-xl"
        }`}
      />
      <div className={`p-3 ${vertical ? "md:h-2/3 md:w-full" : "relative"}`}>
        <div className="flex items-center text-yellow-500 text-sm">
          {"⭐".repeat(rating)}{" "}
          <span className="ml-1 text-gray-500 text-xs">({reviews})</span>
        </div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-600">€ {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;

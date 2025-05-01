"use client";
import BarCard from "@/components/cards/BarsCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CARDS_PER_PAGE = 12;

type BarGridProps = {
  bars: {
    name: string;
    image: string;
    logo: string;
    rating: string;
    price: string;
    address: string;
    tags: string[];
  }[];
};


export default function BarGrid({bars}:BarGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(bars.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const currentCards = bars.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div >
      <div className="p-6 flex items-center justify-center">
     
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentCards.map((bar, index) => (
            <BarCard
              key={index}
              {...bar}
              image={bar.image}
              logo={bar.logo}
              className="relative bg-gradient-to-br from-[#f892339d] to-[#e7a22ccc] px-5 py-4"
              priceClass="flex items-center ml-auto text-sm font-semibold"
              nameClass="text-lg font-semibold mb-1"
              addressClass="flex items-center text-sm text-gray-700 mb-1"
            />
          ))}
        </motion.div>
      </AnimatePresence>

     
    </div>
     {/* Pagination Controls */}
     <div className="flex justify-center items-center gap-2 mt-6">
     <button
       onClick={() => handlePageChange(currentPage - 1)}
       disabled={currentPage === 1}
       className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 disabled:opacity-50"
       aria-label="Previous Page"
     >
       &lt;
     </button>

     {Array.from({ length: totalPages }, (_, i) => (
       <button
         key={i}
         onClick={() => handlePageChange(i + 1)}
         className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
           currentPage === i + 1
             ? "bg-black text-white"
             : "border border-gray-300 text-gray-600"
         }`}
         aria-label={`Page ${i + 1}`}
       >
         {i + 1}
       </button>
     ))}

     <button
       onClick={() => handlePageChange(currentPage + 1)}
       disabled={currentPage === totalPages}
       className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 disabled:opacity-50"
       aria-label="Next Page"
     >
       &gt;
     </button>
   </div>
   </div>
  );
}

import React from 'react';

type ExploreSectionProps = {
  title: string; 
  labels: string[]; 
  buttonClassName?: string; 
  titleClassName?: string; 
  containerClassName?: string;  
};

export default function ExploreSection({
  title,
  labels,
  buttonClassName = "bg-orange-500 px-4 py-2 text-white rounded",
  titleClassName = "text-lg font-bold text-[#123b5d] mb-4", 
  containerClassName = "px-6 py-4", 
}: ExploreSectionProps) {
  return (
    <div className="flex justify-center">
      <div className={containerClassName}>
        <h3 className={titleClassName}>{title}</h3>
        <div className="flex gap-4 flex-wrap">
          {labels.map((label, index) => (
            <button key={index} className={buttonClassName}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from "react";

interface BannerSectionProps {
  breadcrumb: string;
  title: string;
  content: string[];
  background?: string;        
  textColor?: string;        
  alignment?: "left" | "center" | "right";  
}

const BannerSection: React.FC<BannerSectionProps> = ({
  breadcrumb,
  title,
  content,
  background = "bg-gradient-to-r from-yellow-200 to-orange-300",
  textColor = "text-gray-800",
 
  alignment = "center",
}) => {
  const textAlignClass =
    alignment === "left"
      ? "text-left"
      : alignment === "right"
      ? "text-right"
      : "text-center";

  return (
    <div className={`${background} py-16 px-4 ${textAlignClass}`}>
      <p className={`text-sm font-semibold ${textColor}`}>
        {breadcrumb.split(">").map((part, index, arr) => (
          <span key={index}>
            {index !== arr.length - 1 ? (
              <>
                {part.trim()} <span className="text-gray-600">&gt;</span>{" "}
              </>
            ) : (
              <span className="text-white">{part.trim()}</span>
            )}
          </span>
        ))}
      </p>

      <h1 className={`text-3xl md:text-4xl font-bold text-gray-900 mt-2`}>
        {title}
      </h1>

      <div
        className={`mt-6 space-y-4 max-w-3xl mx-auto ${textColor} text-sm md:text-base`}
      >
        {content.map((para, idx) => (
          <p key={idx} className="leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BannerSection;

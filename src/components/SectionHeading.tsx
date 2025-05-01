
import React from "react";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  center?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, center = true }) => {
  return (
    <div className={center ? 'text-center' : ''}>
      <p className="text-sm text-orange-500">{subtitle}</p>
      <h2 className="text-3xl font-bold text-gray-900 mt-2">{title}</h2>
    </div>
  );
};

export default SectionHeading;



import { notFound } from "next/navigation";
import BannerSection from "@/components/BannerSection";
import { barsCategoryData } from "@/data/bars/index";
import BarGrid from "@/app/Bars/BarGrid";
import FaqAccordion from "@/app/Bars/FaqAccordion";
import { faqData } from "@/data/faqData";
import ExploreSection from "@/components/ExploreSection";




export default function BarCategoryPage({ params }: PageProps) {
  const category = barsCategoryData[params.slug];

  if (!category) return notFound();
  const faqs = faqData[params.slug] || [];
  return (
    <div>
      <BannerSection
        breadcrumb={`Seeker > ${category.title}`}
        title={category.subtitle}
        content={category.description}
      />
       <BarGrid bars={category.bars} />
       <ExploreSection
  title="Explore Other Bars"
  labels={["Downtown Bars", "Rooftop Bars", "Dive Bars"]}
/>
       {faqs.length > 0 && <FaqAccordion faqs={faqs} />}
     
    </div>
  );
}

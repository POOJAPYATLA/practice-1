

import { notFound } from "next/navigation";
import BannerSection from "@/components/BannerSection";
import ClubGrid from "@/app/Clubs/ClubGrid";
import FaqAccordion from "@/app/Bars/FaqAccordion";
import { faqData } from "@/data/faqData";
import { clubsCategoryData } from "@/data/clubs/index";
import ExploreSection from "@/components/ExploreSection";




export default function BarCategoryPage({ params }: PageProps) {
  const category = clubsCategoryData[params.slug];

  if (!category) return notFound();
  const faqs = faqData[params.slug] || [];
  return (
    <div>
      <BannerSection
        breadcrumb={`Seeker > ${category.title}`}
        title={category.subtitle}
        content={category.description}
        background="bg-gradient-to-br from-[#818380] to-[#012a4a]"
        textColor="text-white"
      />
       <ClubGrid clubs={category.clubs} />
       <ExploreSection
  title="Explore Other Clubs"
  labels={["Night Clubs", "Dance Clubs", "Lounge Clubs"]}
 
/>
       {faqs.length > 0 && <FaqAccordion faqs={faqs} />}
     
    </div>
  );
}

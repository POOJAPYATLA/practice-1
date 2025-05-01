import BannerSection from '@/components/BannerSection'
import BestBarClub from '@/components/BestBarClub'
import AffordableClub from '@/components/ClubPage/AffordableClub'
import AfterWorkClub from '@/components/ClubPage/AfterWorkClub'
import StudentsClub from '@/components/ClubPage/StudentClub'
import Banner2 from '@/components/Homepage/Banner2'
import PopularClubGrid from '@/components/PopularClubGrid'
import React from 'react'
import FaqAccordion from '../Bars/FaqAccordion'
import { Clubs } from '@/data/faqData'

const page = () => {
  return (
    <div>
         <BannerSection
  breadcrumb="Seeker >  Clubs"
  title="Banner Copy For  Clubs"
  content={[
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ]}
  background='bg-gradient-to-br from-[#818380] to-[#012a4a] '
  textColor='text-white'
  
/>
<BestBarClub
imageSrc="/images/card-1.avif"
heading="The Best Clubs In..."
description="Bangalore's bar culture is vibrant, welcoming, and always evolving.Bangalore's bar culture is vibrant, welcoming, and always evolving.Bangalore's bar culture is vibrant, welcoming, and always evolving."
totalBars="1000+"
totalCategories="25+"
popularBars="15+"
/>

<PopularClubGrid />
<StudentsClub/>
<AffordableClub />
<AfterWorkClub/>
<Banner2/>
<FaqAccordion faqs={Clubs} />
    </div>
  )
}

export default page
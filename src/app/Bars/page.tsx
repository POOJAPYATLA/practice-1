import BannerSection from '@/components/BannerSection'
import React from 'react'
import StudentsBar from '@/components/BarPage/StudentsBar'
import AffordableBar from '@/components/BarPage/AffordableBar'
import AfterWorkBar from '@/components/BarPage/AfterWorkBar'
import Banner2 from '@/components/Homepage/Banner2'
import BestBarClub from '@/components/BestBarClub'

import PopularBarGrid from '@/components/BarPage/PopularBarGrid'
import FaqAccordion from './FaqAccordion'
import { Bars } from '@/data/faqData'



const page = () => {
  return (
    <div>
      <BannerSection
  breadcrumb="Seeker >  Bars"
  title="Banner Copy For  Bars"
  content={[
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ]}
/>
<BestBarClub
imageSrc="/images/card-1.avif"
heading="The Best Bars In..."
description="Bangalore's bar culture is vibrant, welcoming, and always evolving.Bangalore's bar culture is vibrant, welcoming, and always evolving.Bangalore's bar culture is vibrant, welcoming, and always evolving."
totalBars="1000+"
totalCategories="25+"
popularBars="15+"
/>
<PopularBarGrid/>
<StudentsBar />
<AffordableBar/>
<AfterWorkBar />
<Banner2/>
<FaqAccordion faqs={Bars} />



    </div>
  )
}

export default page
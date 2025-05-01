import React from 'react'
import ReusableBarSection from '../ReusableBarSection'
import { afterWorkClubs } from '@/data/clubs/afterWork'

const AfterWorkClub = () => {
  return (
    <div>
        <ReusableBarSection
    basePath='Clubs'
      title="Afterwork Clubs"
      slug="afterwork-clubs"
      items={afterWorkClubs}
       cardClassName='relative bg-gradient-to-br from-[#818380] to-[#012a4a] px-5 py-4 text-white'
      addressClass='flex items-center text-sm text-white mb-1'
    /></div>
  )
}

export default AfterWorkClub
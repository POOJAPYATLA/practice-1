import React from 'react'
import ReusableBarSection from '../ReusableBarSection'
import { affordableClubs } from '@/data/clubs/affordable'

const AffordableClub = () => {
  return (
    <div>
         <ReusableBarSection
         basePath='Clubs'
      title="Affordable Clubs"
      slug="affordable-clubs"
      items={affordableClubs}
       cardClassName='relative bg-gradient-to-br from-[#818380] to-[#012a4a] px-5 py-4 text-white'
      addressClass='flex items-center text-sm text-white mb-1'
      
    />
    </div>
  )
}

export default AffordableClub
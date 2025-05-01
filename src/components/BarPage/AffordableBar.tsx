import React from 'react'
import ReusableBarSection from '../ReusableBarSection'
import { affordableBars } from '@/data/bars/affordable'

const AffordableBar = () => {
  return (
    <div>
         <ReusableBarSection
         basePath='Bars'
      title="Affordable Bars"
      slug="affordable-bars"
      items={affordableBars}
    />
    </div>
  )
}

export default AffordableBar
import React from 'react';
import ReusableBarSection from '../ReusableBarSection';
import { afterWorkBars } from '@/data/bars/afterWork';


const AfterWorkBar = () => {
  return (
    <>
    <ReusableBarSection
    basePath='Bars'
      title="Afterwork Bars"
      slug="afterwork-bars"
      items={afterWorkBars}
    />
   
  </>
    
    
  );
};

export default AfterWorkBar;

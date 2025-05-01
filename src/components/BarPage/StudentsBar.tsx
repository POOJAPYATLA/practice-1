import React from 'react';
import { studentBars } from '@/data/bars/studentBars';
import ReusableBarSection from '../ReusableBarSection';


const StudentsBar = () => {
  return (
    <>
    <ReusableBarSection
    basePath="Bars"
      title="Student Bars"
      slug="student-bars"
      items={studentBars}
    />
   
  </>
    
    
  );
};

export default StudentsBar;

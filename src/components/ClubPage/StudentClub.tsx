import React from 'react';
import ReusableBarSection from '../ReusableBarSection';
import { studentClubs } from '@/data/clubs/studentClubs';




const StudentsClub = () => {
  return (
    <>
    <ReusableBarSection
    basePath='Clubs'
      title="Student Clubs"
      slug="student-clubs"
      items={studentClubs}
      cardClassName='relative bg-gradient-to-br from-[#818380] to-[#012a4a] px-5 py-4 text-white'
      addressClass='flex items-center text-sm text-white mb-1'
    />
   
  </>
    
    
  );
};

export default StudentsClub;

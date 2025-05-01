
import BannerSection from '@/components/BannerSection'
import React from 'react'


type Props = {
  breadcrumb: string;
  title: string;
  content: string[];
};

const BarCategoryPage = ({ breadcrumb, title, content }: Props) => {
  return (
    <div>
      <BannerSection
        breadcrumb={breadcrumb}
        title={title}
        content={content}
      />
      
    </div>
  );
};

export default BarCategoryPage;

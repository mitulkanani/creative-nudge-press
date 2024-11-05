import Articles from '@/components/Blog/Articles';
import EducationalResources from '@/components/Blog/EducationalResources';
import ExploreOurContent from '@/components/Blog/ExploreOurContent';
import HeroSection from '@/components/Common/HeroSection';
import { blogPageData } from '@/utils/content';
import React from 'react';

const Blog = () => {
  const { herosection } = blogPageData;
  return (
    <div>
      <HeroSection data={herosection} isRightImgRotate={true} />
      <Articles />
      <ExploreOurContent />
      <EducationalResources />
    </div>
  );
};

export default Blog;

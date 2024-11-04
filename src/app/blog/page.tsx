import Articles from '@/components/Blog/Articles';
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
    </div>
  );
};

export default Blog;

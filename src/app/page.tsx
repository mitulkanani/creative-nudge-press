import CardSection from '@/components/Common/CardSection';
import HeroSection from '@/components/HeroSection';
import JoinOurCreativeCommunity from '@/components/JoinOurCreativeCommunity';
import OurBooksSection from '@/components/OurBooksSection';
import { HomeHeroData } from '@/utils/content';
import React from 'react';

const page = () => {
  const { WhatWeDoSection } = HomeHeroData;
  return (
    <div>
      <HeroSection />
      <OurBooksSection />
      <CardSection data={WhatWeDoSection} />
      <JoinOurCreativeCommunity />
    </div>
  );
};

export default page;

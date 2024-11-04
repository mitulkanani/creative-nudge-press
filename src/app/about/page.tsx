import OurMissionAndVision from '@/components/About/OurMissionAndVision';
import Profile from '@/components/About/Profile';
import CardSection from '@/components/Common/CardSection';
import HeroSection from '@/components/Common/HeroSection';
import ImageWithText from '@/components/Common/ImageWithText';
import { aboutPageData } from '@/utils/content';
import React from 'react';

const About = () => {
  const { herosection, ourStory, ourFoundation } = aboutPageData;
  return (
    <div>
      <HeroSection data={herosection} />
      <ImageWithText data={ourStory} style="mt-[64px]" />
      <OurMissionAndVision />
      <CardSection data={ourFoundation} />
      <Profile />
    </div>
  );
};

export default About;

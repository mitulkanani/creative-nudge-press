import ChildrenBooks from '@/components/ChildrenBooks';
import CardSection from '@/components/Common/CardSection';
import HeroSection from '@/components/Common/HeroSection';
import ImageWithText from '@/components/Common/ImageWithText';
import { Book } from '@/utils/content';
import React from 'react';

const page = () => {
  const { herosection, TransformativeLiterature, OurMission } = Book;
  return (
    <div>
      <HeroSection data={herosection} />
      <ImageWithText data={TransformativeLiterature} />
      <ChildrenBooks />
      <CardSection data={OurMission} />
    </div>
  );
};

export default page;

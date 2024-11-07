import Articles from '@/components/Blog/Articles';
import EducationalResources from '@/components/Blog/EducationalResources';
import ExploreOurContent from '@/components/Blog/ExploreOurContent';
import HeroSection from '@/components/Common/HeroSection';
import { blogPageData } from '@/utils/content';
import getPostMetaData from '@/utils/helper/getPostMetadata';
const Blog = () => {
  const { herosection } = blogPageData;
  const postMetaData = getPostMetaData('./src/content/blog');
  return (
    <div>
      <HeroSection data={herosection} isRightImgRotate={true} />
      <Articles postMetaData={postMetaData} />
      <ExploreOurContent />
      <EducationalResources />
    </div>
  );
};

export default Blog;

import Articles from '@/components/Blog/Articles';
import EducationalResources from '@/components/Blog/EducationalResources';
import ExploreOurContent from '@/components/Blog/ExploreOurContent';
import HeroSection from '@/components/Common/HeroSection';
import { blogPageData } from '@/utils/content';
import { posts } from '#site/content';
const Blog = () => {
  const { herosection } = blogPageData;
  const displayPosts = { posts };

  return (
    <div>
      <HeroSection data={herosection} isRightImgRotate={true} />
      <Articles postMetaData={displayPosts?.posts} />
      <ExploreOurContent />
      <EducationalResources />
    </div>
  );
};

export default Blog;

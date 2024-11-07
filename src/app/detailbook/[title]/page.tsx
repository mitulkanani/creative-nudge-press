import ArtisticJourney from '@/components/ArtisticJourney';
import BehindTheScenes from '@/components/BehindTheScenes';
import BookDetailHeroSection from '@/components/BookDetailHeroSection';
import ImageWithTextBg from '@/components/Common/ImageWithTextBg';
import CurrentBook from '@/components/CurrentBook';
import MoreInformations from '@/components/MoreInformations';
import SeriesOverview from '@/components/SeriesOverview';
import { detailBooksData } from '@/utils/content';
type Params = Promise<{ title: string }>;
const BookDetailPage = async ({ params }: { params: Params }) => {
  const { title } = await params;

  const decodedTitle = title?.replace(/-/g, ' ');
  const selectedSeries = detailBooksData.find(
    (series) => series.name === decodeURIComponent(decodedTitle || ''),
  );

  if (!selectedSeries) {
    return <div>Series not found</div>;
  }

  return (
    <div>
      {/* Pass herosection data as a prop */}
      {selectedSeries.herosection && (
        <BookDetailHeroSection herosection={selectedSeries.herosection} />
      )}
      {selectedSeries?.seriesOverview && (
        <SeriesOverview seriesOverview={selectedSeries?.seriesOverview} />
      )}
      {selectedSeries?.currentBook && (
        <CurrentBook currentBook={selectedSeries?.currentBook} />
      )}
      <div
        className={`bg-${selectedSeries?.upcomingBooks?.bgColor} py-12 text-center font-lora text-[36px] leading-[46.08px] text-white`}
      >
        {selectedSeries?.upcomingBooks?.title}
      </div>
      {selectedSeries?.upcomingBooks?.cards?.map((item, index) => (
        <div key={index}>
          {' '}
          <ImageWithTextBg data={item} />
        </div>
      ))}
      {selectedSeries?.socialData && (
        <ArtisticJourney socialData={selectedSeries?.socialData} />
      )}
      {selectedSeries?.behindTheScenes && (
        <BehindTheScenes behindTheScenes={selectedSeries?.behindTheScenes} />
      )}
      {selectedSeries?.moreInformations && (
        <MoreInformations moreInformations={selectedSeries?.moreInformations} />
      )}
    </div>
  );
};

export default BookDetailPage;

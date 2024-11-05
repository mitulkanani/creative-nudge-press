import ArtisticJourney from '@/components/ArtisticJourney';
import BookDetailHeroSection from '@/components/BookDetailHeroSection';
import CurrentBook from '@/components/CurrentBook';
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
      {selectedSeries?.socialData && (
        <ArtisticJourney socialData={selectedSeries?.socialData} />
      )}
    </div>
  );
};

export default BookDetailPage;

import React from 'react';
import Heading1 from './Common/Heading1';
import Description2 from './Common/Description2';
import Heading3 from './Common/Heading3';
import { seriesOverviewProps } from '@/utils/types';

const SeriesOverview = ({
  seriesOverview,
}: {
  seriesOverview: seriesOverviewProps;
}) => {
  return (
    <div className="">
      <div className="bg-cyanBlue py-12">
        <Heading1
          title={seriesOverview?.heading}
          style="!text-white !text-center"
        />
      </div>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 px-5 py-[100px] xl:px-[148px]">
        <Description2
          description={seriesOverview?.desc}
          style="!max-w-[904px] !w-full  !text-center !mx-auto "
        />
        <div className="grid w-full grid-cols-1 gap-9 md:grid-cols-2">
          {seriesOverview?.cards?.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-lg bg-snow p-9"
            >
              <Heading3 title={card?.title} />
              <div>
                {card?.points?.map((point, index) => (
                  <div key={index}>
                    <div className="text-base leading-6 text-gray">
                      - {point}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesOverview;

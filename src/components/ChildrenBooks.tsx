import { Book } from '@/utils/content';
import React from 'react';

const ChildrenBooks = () => {
  const { ChildrenBooks } = Book;
  return (
    <div>
      <div className="bg-cyanBlue py-12 text-center font-lora text-[36px] leading-[46.08px] text-white">
        {ChildrenBooks?.heading}
      </div>
    </div>
  );
};

export default ChildrenBooks;

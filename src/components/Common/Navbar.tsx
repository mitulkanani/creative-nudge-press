'use client';
import { navbarData } from '@/utils/content';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';
import MobileSidebar from '../MobileSidebar';

const Navbar = () => {
  const { button, logo, navlinks } = navbarData;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHamBurgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="relative z-[999] bg-frost/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 xl:px-[90px]">
          <Link href="/">
            <Image src={logo} alt="logo" width={112} height={64} />
          </Link>
          <div className="hidden items-center gap-[18px] md:flex">
            {navlinks.map((link, linkIndex) => (
              <Link
                href={link?.link}
                key={linkIndex}
                className="font-lora leading-[20.48px] text-darkBlack"
              >
                {link?.title}
              </Link>
            ))}
          </div>
          <Button
            label={button?.btnText}
            link={button?.btnLink}
            style="hidden md:block cursor-pointer"
          />
          <button
            onClick={handleHamBurgerClick}
            className="relative flex flex-col items-center justify-center md:hidden"
          >
            <Image
              src="/svg/hamburger.svg"
              alt="hamburger"
              width={22.56}
              height={16.11}
            />
          </button>
        </div>
      </div>
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Navbar;

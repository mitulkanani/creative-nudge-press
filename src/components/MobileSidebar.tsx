'use client';
import Link from 'next/link';
import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { navbarData } from '@/utils/content';
import Image from 'next/image';
import Button from './Common/Button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { button, navlinks } = navbarData;
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction="right"
      enableOverlay
      lockBackgroundScroll={true}
      size={'80dvw'}
      className="!z-[9999] flex !h-[100vh] flex-col gap-10 overflow-y-scroll !bg-lightyellow text-lg font-semibold text-darkBlack"
    >
      <div className="flex flex-col justify-between gap-14 p-[32px]">
        <div onClick={onClose} className="flex justify-end">
          <Image
            src="/svg/close.svg"
            alt=""
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center gap-[18px]">
          {navlinks.map((link, linkIndex) => (
            <Link
              href={link?.link}
              key={linkIndex}
              className="p-5 font-lora leading-[20.48px] text-darkBlack"
            >
              {link?.title}
            </Link>
          ))}
          <Button label={button?.btnText} link={button?.btnLink} />
        </div>
      </div>
    </Drawer>
  );
};

export default MobileSidebar;

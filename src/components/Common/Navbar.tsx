import { navbarData } from '@/utils/content';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  const { button, logo, navlinks } = navbarData;
  return (
    <div className="relative z-[999] bg-frost/80">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 backdrop-blur-[12px] xl:px-[90px]">
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
        <Button label={button?.btnText} link={button?.btnLink} />
      </div>
    </div>
  );
};

export default Navbar;

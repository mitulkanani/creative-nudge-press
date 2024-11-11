'use client';
import { footerData } from '@/utils/content';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Description1 from './Description1';
import Description2 from './Description2';
import Heading1 from './Heading1';

const Footer = () => {
  const {
    btnText,
    description,
    content,
    emailPlaceholder,
    image,
    rights,
    title,
    title2,
    description2,
    element,
  } = footerData;
  const router = usePathname();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');
  const isNotBg = router === '/' || router === '/about';
  const isContact = router === '/contact';
  const titleText = isContact ? title2 : title;
  const descriptionText = isContact ? description2 : description;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setStatus(error);
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div className={`pt-[64px] ${!isNotBg && 'bg-snow'}`}>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5 md:gap-[106.81px] lg:flex-row xl:pl-[148px] xl:pr-[77.81px]">
        <div className="relative order-2 flex flex-col gap-10 md:gap-[72px] lg:order-1">
          <div className="flex flex-col gap-2">
            <Heading1 title={titleText} />
            <Description2 description={descriptionText} />
            {!isContact &&
              content?.map((item, index) => (
                <Description2 key={index} description={item} />
              ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-fit flex-col items-stretch"
          >
            <div className="flex items-stretch">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className="w-full max-w-[304px] rounded-l-[4px] border border-silverMist bg-transparent px-3 py-3.5 font-lora text-base text-slateGray outline-none md:px-5 md:text-lg md:leading-[23.04px]"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-fit rounded-r-[4px] bg-cyanBlue px-3 py-3.5 font-lora text-base leading-[23.04px] text-softCloud disabled:bg-opacity-70 md:px-5 md:text-lg"
              >
                {status === 'loading' ? 'Subscribing...' : btnText}
              </button>
            </div>
            {message && (
              <p
                className={`mt-2 text-sm ${
                  status === 'success' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {message}
              </p>
            )}
          </form>

          {element ? (
            <Image
              src={element}
              width={67}
              height={64}
              alt="star"
              className="absolute -top-16 right-5"
            />
          ) : null}
        </div>
        <Image
          src={image}
          alt="footer image"
          width={659.38}
          height={460}
          className="order-1 lg:order-2"
        />
      </div>
      <div className="mt-10 bg-oranges py-4 text-center md:mt-[109px]">
        <Description1
          style="!text-white !leqading-[23.04px]"
          description={rights}
        />
      </div>
    </div>
  );
};

export default Footer;

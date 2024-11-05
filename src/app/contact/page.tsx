import HeroSection from '@/components/Common/HeroSection';
import ContactForm from '@/components/Contact/ContactForm';
import Socials from '@/components/Contact/Socials';
import { contactPageData } from '@/utils/content';
import React from 'react';
const Contact = () => {
  const { herosection } = contactPageData;
  return (
    <div className="">
      <HeroSection data={herosection} />
      <ContactForm />
      <Socials />
    </div>
  );
};

export default Contact;

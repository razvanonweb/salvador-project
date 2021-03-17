import React from 'react';
import Micro from '../../assets/icons/microphone offer.svg';
import Hero from '../../components/Hero/Hero';
import OfferSection from '../../components/OfferSection/OfferSection';
import Slider from '../../components/Slider/Slider';
import InfoSection from '../../components/InfoSection/InfoSection';
import QuoteSection from '../../components/QuoteSection/QuoteSection';

const HomePage = () => {
  return (
    <div className="container-fluid p-0">
      <Hero />
      <OfferSection />
      <div className="container-fluid divider">
        <div className="divider__box">
          <img className="divider__box-img" src={Micro} alt="micro" />
        </div>
      </div>
      <Slider />
      <InfoSection />
      <QuoteSection />
    </div>
  );
};

export default HomePage;

import { useState } from 'react';
import { wrap } from 'popmotion';
import SlideShowControl from '@/component/slideShow/SlideShowControl';
import SlideShowImage from '@/component/slideShow/SlideShowImage';

const dataSlides = [
  {
    id: 1,
    title: 'Your World, Seamlessly Connected',
    descriptionOne:
      'Enjoy robust and reliable connectivity for all your personal and professional needs.',
    descriptionTwo: 'Unlock 20% OFF and a FREE Router on signup!',
    linkName: 'Claim Offer',
    image: {
      thumbnail: '/images/hero.jpg',
      mobileThumbnail: '/images/hero-mobile.jpg',
    },
  },
  {
    id: 2,
    title: 'Where Speed Meets Reliability',
    descriptionOne:
      'Experience high-speed internet tailored to your home or business, anytime, anywhere.',
    descriptionTwo: 'Save 20% today with a FREE router!',
    linkName: 'Discover More',
    image: {
      thumbnail: '/images/career-banner.png',
      mobileThumbnail: '/images/career-banner-mobile.png',
    },
  },
  {
    id: 3,
    title: 'Empowering Your Digital Life',
    descriptionOne:
      'Boost your internet experience with cutting-edge connectivity solutions.',
    descriptionTwo: 'Get 20% OFF and a FREE Router now!',
    linkName: 'Join Us',
    image: {
      thumbnail: '/images/image-slider-promotion.jpg',
      mobileThumbnail: '/images/image-slider-promotion-mobile.jpg',
    },
  },
];

const Home = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentImageIndex = wrap(0, dataSlides.length, page);

  const _handlePaginate = (newDirection = 0) => {
    setPage([page + newDirection, newDirection]);
  };

  const _handleNext = () => _handlePaginate(1);

  const _handlePrev = () => _handlePaginate(-1);

  return (
    <section className="section-head-of-page">
      <SlideShowImage
        images={dataSlides}
        currentImageIndex={currentImageIndex}
        direction={direction}
      />

      <SlideShowControl
        actions={{
          prev: _handlePrev,
          next: _handleNext,
        }}
      />
    </section>
  );
};

export default Home;

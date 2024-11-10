import SlideShowControl from '@/component/slideShow/SlideShowControl';
import SlideShowImage from '@/component/slideShow/SlideShowImage';

const dataSlides = [
  {
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
  const _handleNext = () => {};

  const _handlePrev = () => {};

  return (
    <section className="section-head-of-page">
      <SlideShowImage images={dataSlides} />

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

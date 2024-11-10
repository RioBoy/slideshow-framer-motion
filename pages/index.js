const dataCarousel = [
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
      {dataCarousel.map((vm, idx) => {
        return (
          <div
            className={'carousel-container' + (idx === 0 ? ' current' : '')}
            key={idx}
          >
            <img
              src={vm.image.thumbnail}
              alt={vm.title}
              className="carousel-image"
            />

            <div className="img-linear-background" />

            <div className="container">
              <div className="row">
                <div className="col-md-6 position-static">
                  <div className="carousel-text-wrapper">
                    <h1 className="mb-0">{vm.title}</h1>

                    <div className="carousel-text-desc my-5">
                      <h5 className="mb-4">{vm.descriptionOne}</h5>
                      <h5 className="description-two mb-0">
                        {vm.descriptionTwo}
                      </h5>
                    </div>

                    <button className="btn btn-primary">{vm.linkName}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="container">
        <div className="carousel-control">
          <button
            className="btn btn-transparent text-white px-0"
            onClick={_handlePrev}
          >
            Prev
          </button>

          <button
            className="btn btn-transparent text-white px-0"
            onClick={_handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

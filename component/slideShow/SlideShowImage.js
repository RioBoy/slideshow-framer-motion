import { AnimatePresence, motion } from 'framer-motion';
import { slideImageAnimate, slideRightAnimate } from '@/helper/animate';
import { imageSlide, slideRight } from '@/helper/variant';

const SlideShowImage = ({
  images = [],
  currentImageIndex = -1,
  direction = 0,
}) => {
  const slideDetail = images[currentImageIndex];

  return (
    <div className="slides">
      <div className="slide">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={'slide-image-' + slideDetail.id}
            src={slideDetail.image.thumbnail}
            alt={slideDetail.title}
            className="slide-image"
            {...slideImageAnimate(imageSlide, direction)}
          />
        </AnimatePresence>

        <div className="img-linear-background" />

        <AnimatePresence mode="wait">
          <div className="container">
            <div className="row">
              <div className="col-md-6 position-static">
                <div className="slide-text-wrapper">
                  <motion.h1
                    key={'title-' + slideDetail.id}
                    className="mb-0"
                    {...slideRightAnimate(slideRight(0.6))}
                  >
                    {slideDetail.title}
                  </motion.h1>

                  <div className="slide-text-desc my-5">
                    <motion.h5
                      key={'desc-one-' + slideDetail.id}
                      className="mb-4"
                      {...slideRightAnimate(slideRight(0.7))}
                    >
                      {slideDetail.descriptionOne}
                    </motion.h5>

                    <motion.h5
                      key={'desc-two-' + slideDetail.id}
                      className="description-two mb-0"
                      {...slideRightAnimate(slideRight(0.8))}
                    >
                      {slideDetail.descriptionTwo}
                    </motion.h5>
                  </div>

                  <motion.button
                    key={'button-' + slideDetail.id}
                    className="btn btn-primary"
                    {...slideRightAnimate(slideRight(0.9))}
                  >
                    {slideDetail.linkName}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlideShowImage;

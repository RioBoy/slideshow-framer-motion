import { AnimatePresence, motion } from 'framer-motion';
import { slideImageAnimate } from '@/helper/animate';
import { imageSlide } from '@/helper/variant';
import SlideShowContent from './SlideShowContent';

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

        <SlideShowContent slideDetail={slideDetail} direction={direction} />
      </div>
    </div>
  );
};

export default SlideShowImage;

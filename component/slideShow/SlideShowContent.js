import { AnimatePresence, motion } from 'framer-motion';
import { slideRightAnimate } from '@/helper/animate';
import { slideRight } from '@/helper/variant';

const SlideShowContent = ({ slideDetail = {} }) => {
  return (
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
  );
};

export default SlideShowContent;

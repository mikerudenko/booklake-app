import React, { memo, useCallback } from 'react';
import Slider from 'react-slick';
import { useLakeDetailsStyles } from '../useLakeDetailsStyles';

interface LakeDetailsSliderProps {
  pictures: string[];
}

const lakeDetailsSliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  dotsClass: 'booklake-slider-dots',
  customPaging: () => <button></button>,
  responsive: [
    {
      breakpoint: 768,
      settings: {},
    },
  ],
};

export const LakeDetailsSlider = memo(
  ({ pictures }: LakeDetailsSliderProps) => {
    const classes = useLakeDetailsStyles();
    const renderLakeSlide = useCallback(
      (picture, index) => {
        return (
          <div key={index} className={classes.slide}>
            <img
              src={picture}
              alt='Lake details'
              className={classes.slideImage}
            />
          </div>
        );
      },
      [classes.slide, classes.slideImage],
    );

    return (
      <Slider {...lakeDetailsSliderSettings} className={classes.slider}>
        {pictures.map(renderLakeSlide)}
      </Slider>
    );
  },
);

import React, { memo, useCallback } from 'react';
import Slider from 'react-slick';
import Button from '@material-ui/core/Button';
import { useIntl } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import { Lake } from '@booklake/core';

import { useLakeSliderStylesStyles } from './use-Lakes-slider-styles';
import { useI18nConnect, globalMessages } from '../../store/i18n';

import { ROUTES } from '../../app.constants';
import { NetworkStatus } from '../../store-utils';
import {
  selectLakeTranslations,
  getRegionMessage,
} from '../../services/helper-service';

interface LakesSliderProps {
  lakes: Lake[];
  lakesNetworkStatus: NetworkStatus;
}

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  dotsClass: 'booklake-slider-dots',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: false,
      },
    },
  ],
};

export const LakesSlider = memo(
  ({ lakes, lakesNetworkStatus }: LakesSliderProps) => {
    const classes = useLakeSliderStylesStyles();
    const { locale } = useI18nConnect();
    const { formatMessage } = useIntl();

    const renderLakeSlide = useCallback(
      (
        { translations, mainPicture, contacts: { region, country }, id }: Lake,
        index,
      ) => {
        const currentLakeTranslations = selectLakeTranslations(
          translations,
          locale,
        );

        return (
          <div key={index} className={classes.slide}>
            <img
              src={mainPicture as string}
              className={classes.sliderImage}
              alt={currentLakeTranslations.title}
            />
            <div className={classes.slideInfo}>
              <Typography variant='h3' gutterBottom>
                {currentLakeTranslations.title}
              </Typography>
              <Typography variant='h5' className={classes.location}>
                {currentLakeTranslations.address} {', '}
                {formatMessage(getRegionMessage(country, region))}
              </Typography>
              <Link
                to={`${ROUTES.lakes}/${id}`}
                className={classes.buyButtonLink}
              >
                <Button
                  size='large'
                  color='secondary'
                  variant='contained'
                  className={classes.buyButton}
                >
                  {formatMessage(globalMessages.buy)}
                </Button>
              </Link>
            </div>
          </div>
        );
      },
      [
        classes.buyButton,
        classes.buyButtonLink,
        classes.location,
        classes.slide,
        classes.slideInfo,
        classes.sliderImage,
        formatMessage,
        locale,
      ],
    );

    if (lakesNetworkStatus === NetworkStatus.Request) {
      return (
        <Skeleton
          className={classes.sliderSkeleton}
          variant='rect'
          width='100%'
        />
      );
    }

    return (
      <Slider {...sliderSettings} className={classes.sliderContainer}>
        {lakes.map(renderLakeSlide)}
      </Slider>
    );
  },
);

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useLakeSliderStylesStyles = makeStyles((theme: Theme) =>
  createStyles({
    slide: {
      position: 'relative',
      height: 400,
      '&:focus': {
        outline: 'none',
      },
    },
    sliderImage: {
      position: 'absolute',
      height: '95%',
      width: '95%',
      objectFit: 'cover',
      objectPosition: 'bottom center',
      zIndex: 0,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      filter: 'brightness(70%)',
    },
    slideInfo: {
      position: 'relative',
      zIndex: 1,
      color: 'white',
      textAlign: 'center',
      paddingTop: 150,
    },
    buyButtonLink: {
      textDecoration: 'none',
    },
    buyButton: {
      marginTop: 20,
      color: 'white',
    },
    location: {
      width: '100%',
    },
    sliderSkeleton: {
      marginTop: 30,
      height: 400,
    },
    sliderContainer: {
      marginTop: 20,
      marginBottom: 40,

      '& .slick-arrow': {
        // TODO fix
        display: 'none !important',
      },
    },
  }),
);

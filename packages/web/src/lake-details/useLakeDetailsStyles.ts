import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useLakeDetailsStyles = makeStyles((theme: Theme) =>
  createStyles({
    detailsHeader: {
      height: 350,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingBottom: 30,
      position: 'relative',
    },
    headerContent: {
      position: 'relative',
      zIndex: 1,
    },
    headerImage: {
      objectFit: 'cover',
      objectPosition: 'center center',
      filter: 'brightness(60%)',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    detailsBody: {
      position: 'relative',
    },
    fishSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    fishIcon: {
      width: 60,
      height: 60,
    },
    iconWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 65,
      height: 65,
      padding: 5,
      background: 'white',
      boxShadow:
        '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      borderRadius: '50%',
      '&:not(:last-child)': {
        marginRight: 30,
      },
    },
    mainSection: {},
    lakeTitle: {
      color: 'white',
      fontSize: '40px',
      marginBottom: 15,
    },
    fishingType: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '14px',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
      '&:not(:last-child)': {
        marginRight: 20,
      },
    },
    optionSectionTitle: {
      marginTop: 20,
    },
    optionsSection: {
      marginTop: 5,
      marginBottom: 20,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'flex-start',
    },
    optionsItem: {
      '&:not(:last-child)': {
        marginRight: 100,
      },
    },
    slider: {
      width: '100%',
      height: 400,
      marginBottom: 30,
      [theme.breakpoints.down('md')]: {
        height: 375,
      },
      '& .slick-arrow': {
        display: 'none !important',
      },
    },
    slide: {
      '&:focus': {
        outline: 'none',
      },
    },
    slideImage: {
      width: '100%',
      height: 400,
      [theme.breakpoints.down('md')]: {
        height: 375,
      },
      objectFit: 'cover',
      objectPosition: 'center',
    },
    lakeDescription: {},
    map: {
      height: 400,
      marginLeft: 'auto',
      width: '100%',
    },
    mapPicker: {
      color: theme.palette.primary.main,
    },
    typesAndFish: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    lakeDetailsForm: {
      width: '80%',
      marginLeft: 'auto',

      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginTop: 20,
      },
    },
    sliderAndForm: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    descriptionAndMap: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginTop: 120,
      [theme.breakpoints.down('sm')]: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'stretch',
      },
    },
  }),
);

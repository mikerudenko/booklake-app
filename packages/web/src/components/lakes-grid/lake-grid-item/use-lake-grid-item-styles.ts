import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useLakeGridItemStyles = makeStyles((theme: Theme) => {
  const wideCardStyles = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    '& .MuiCardMedia-root': {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      filter: 'brightness(60%)',
    },
    '& .MuiCardContent-root': {
      position: 'relative',
      zIndex: 2,
      marginTop: 'auto',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',

      '& svg': {
        display: 'none',
      },

      '& .MuiTypography-root': {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
      },
    },

    '& .MuiTypography-colorTextSecondary': {
      color: 'white',
    },
  };

  return createStyles({
    card: {
      position: 'relative',
      height: 350,
      display: 'flex',
      flexDirection: 'column',
      width: 275,
      marginBottom: 20,
      [theme.breakpoints.down('sm')]: wideCardStyles,
      [theme.breakpoints.up('md')]: {
        '&:not(:nth-of-type(3n)):not(:last-child)': {
          marginRight: 20,
        },
      },
      '&:nth-of-type(9n), &:nth-of-type(9n - 5), &:nth-of-type(9n - 7)': {
        width: 620,
        ...wideCardStyles,
      },
    },
    cardContent: {
      padding: 30,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      flexGrow: 1,
    },
    image: {
      height: 150,
    },
    cardTitle: {
      fontSize: '24px',
      letterSpacing: '.1px',
      marginBottom: '10px',
    },
    buyButton: {
      color: 'white',
    },
    buyLink: {
      textDecoration: 'none',
    },
  });
});

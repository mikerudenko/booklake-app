import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useAppFooterStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      paddingTop: 64,
      marginTop: 'auto',
    },
    mainSectionWrapper: {
      paddingTop: '15px',
      backgroundColor: theme.palette.primary.main,
      paddingBottom: '15px',
      [theme.breakpoints.down('sm')]: {
        paddingTop: '20px',
        paddingBottom: '20px',
      },
    },
    mainSection: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    bottomNav: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    bottomNavItem: {
      color: 'white',
      fontSize: '16px',
      textDecoration: 'none',
      marginBottom: '16px',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    bottomNavColumn: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    rightFooterSection: {
      marginLeft: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
      },
    },
    cardSponsors: {
      width: '90px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    copyright: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    copyrightWrapper: {
      backgroundColor: 'rgba(38, 144, 168, 0.2)',
      paddingTop: '10px',
    },
    copyrightText: {
      fontSize: '14px',
      color: '#141414',
    },
    footerLogoWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

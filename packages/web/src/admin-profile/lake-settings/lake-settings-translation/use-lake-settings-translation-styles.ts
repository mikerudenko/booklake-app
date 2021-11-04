import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useLakeSettingsTranslationStyles = makeStyles((theme: Theme) => {
  const mobileStyles = {
    width: '100%',
    marginRight: 0,
  };

  return createStyles({
    wrapper: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: 20,
    },
    translationsBlock: {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginRight: 20,
      [theme.breakpoints.down('sm')]: mobileStyles,
    },
    locale: {
      width: '25%',
      marginRight: 20,
      [theme.breakpoints.down('sm')]: mobileStyles,
    },
    title: {
      width: '85%',
    },
    description: {
      width: '48%',
      [theme.breakpoints.down('sm')]: mobileStyles,
    },
    address: {
      width: '48%',
      [theme.breakpoints.down('sm')]: mobileStyles,
    },
  });
});

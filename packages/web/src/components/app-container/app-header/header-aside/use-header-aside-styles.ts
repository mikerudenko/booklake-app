import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useHeaderAsideStyles = makeStyles((theme: Theme) => {
  const activeSidebarLink = {
    textDecoration: 'underline',
  };

  return createStyles({
    topAside: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 30,
    },
    hyphen: {
      width: '30px',
      height: '2px',
      backgroundColor: 'white',
      borderRadius: '2px',
      '&:not(:first-child)': {
        marginTop: '6px',
      },
    },
    sidebarLogo: {
      marginTop: '10px',
      marginBottom: '10px',
    },
    sidebarLink: {
      color: 'white',
      textDecoration: 'none',
      marginBottom: 10,
      '&:hover': activeSidebarLink,
      '&:not(:last-child)': {
        marginBottom: 10,
      },
    },
    activeLink: activeSidebarLink,
    sidebar: {
      width: 280,
      backgroundColor: theme.palette.primary.main,
    },
    closeAsideButton: {
      color: 'white',
    },
    sidebarLinks: {
      marginTop: 30,
      marginBottom: 30,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
    centralHyphen: {
      width: '24px',
    },
    sidebarContent: {
      paddingLeft: 30,
      paddingRight: 30,
    },
    sidebarMenu: {
      width: '100%',
    },
    asideButton: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginRight: 40,
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
      },
    },
    formDate: {
      marginTop: 20,
      color: 'white',

      '& .MuiInputBase-input, & .MuiIconButton-root, & .MuiInputLabel-formControl': {
        color: 'white',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white !important',
      },
    },
  });
});

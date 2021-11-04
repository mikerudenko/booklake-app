import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useSignInStyles = makeStyles((theme: Theme) =>
  createStyles({
    formWrapper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 340,
    },
    form: {
      paddingTop: '20px',
      width: '100%',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    socialButtons: {
      width: '100%',
      marginTop: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    links: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: theme.spacing(1),
    },
    copy: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: theme.spacing(4),
    },
  }),
);

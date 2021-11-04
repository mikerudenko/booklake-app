import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useResetPasswordStyles = makeStyles((theme: Theme) =>
  createStyles({
    formWrapper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 360,
    },
    form: {
      paddingTop: 20,
      width: '100%',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    resetLink: {
      textAlign: 'right',
      marginTop: theme.spacing(2),
    }
  }),
);

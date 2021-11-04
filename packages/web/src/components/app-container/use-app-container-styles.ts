import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useAppContainerStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingTop: 65,
      [theme.breakpoints.down('sm')]: {
        paddingTop: 55,
      },
      minHeight: '100vh',
    },
  }),
);

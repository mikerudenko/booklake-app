import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useLakeDetailsFormStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      position: 'sticky',
      width: 280,
      [theme.breakpoints.down('sm')]: {
        order: 1,
      },
    },
    formDate: {
      marginBottom: 10,
    },
    cardHeader: {
      backgroundColor: theme.palette.primary.main,
      padding: '10px 20px',
      color: 'white',
      fontSize: 18,
    },
    cardContent: {
      padding: '30px 20px',
    },
    selectPlaceLink: {
      textDecoration: 'none',
    },
    selectPlaceButton: {
      color: 'white',
      width: '100%',
      height: 40,
    },
  }),
);

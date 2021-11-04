import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useLakesGridStyles = makeStyles((theme: Theme) =>
  createStyles({
    lakesGrid: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
  }),
);

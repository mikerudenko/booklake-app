import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useLakesTableStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'relative',
      maxWidth: 1000,
      margin: '0 auto',
    },
  }),
);

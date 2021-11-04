import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useSearchFiltersStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      marginBottom: 20,
    },

    applyButton: {
      height: 56,
      width: 140,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      '& .MuiButtonBase-root': {
        height: 56,
      },
    },
  }),
);

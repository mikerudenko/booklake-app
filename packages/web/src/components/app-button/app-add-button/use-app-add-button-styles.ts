import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useAppAddButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: theme.palette.primary.main,
    },
  }),
);

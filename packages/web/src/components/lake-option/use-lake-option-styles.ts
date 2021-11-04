import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useLakeOptionStyles = makeStyles((theme: Theme) =>
  createStyles({
    option: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    optionIcon: {
      color: theme.palette.primary.main,
      marginRight: 15,
    },
  }),
);

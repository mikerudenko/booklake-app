import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useLakeShortInfoStyles = makeStyles((theme: Theme) =>
  createStyles({
    shortInfo: {},
    shortInfoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: '16px',
      letterSpacing: '.1px',
      marginBottom: '13px',
      color: 'black',
    },
    shortInfoIcon: {
      marginRight: '10px',
      color: theme.palette.primary.main,
    },
    currency: {
      marginLeft: 5,
    },
    from: {
      marginRight: 5,
    },
    placesCount: {
      width: 20,
      textAlign: 'center',
    },
    placesCountLabel: {
      marginLeft: 5,
    },
  }),
);

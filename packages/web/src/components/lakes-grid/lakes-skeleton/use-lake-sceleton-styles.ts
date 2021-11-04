import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useLakeSceletonStyles = makeStyles((theme: Theme) => {
  const wideCardStyles = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  };

  return createStyles({
    sceletonCard: {
      width: 275,
      height: 350,
      [theme.breakpoints.down('sm')]: wideCardStyles,
      [theme.breakpoints.up('md')]: {
        '&:not(:nth-of-type(3n)):not(:last-child)': {
          marginRight: 20,
        },
      },
      '&:nth-of-type(9n), &:nth-of-type(9n - 5), &:nth-of-type(9n - 7)': {
        width: 620,
        ...wideCardStyles,
      },
      marginBottom: 40,
    },
  });
});

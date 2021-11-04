import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useHeaderLeftSectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      [theme.breakpoints.down('sm')]: {
        flexGrow: 1,
        marginLeft: 20,
      },
    },
    leftHeaderPart: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexGrow: 1,
        textAlign: 'center',
      },
    },
  }),
);

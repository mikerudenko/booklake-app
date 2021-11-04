import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useAppTabsStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    link: {
      textDecoration: 'none',
    },
    linkActive: {
      color: theme.palette.primary.main,
    },
    tabsRoot: {
      borderBottom: '1px solid #e8e8e8',
      marginBottom: 20,
    },
    tabRoot: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      '&:hover': {
        opacity: 1,
      },
      '&$selected': {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  }),
);

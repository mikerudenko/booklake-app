import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useAppCollapseSectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    caption: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    collapseSectionWrapper: {},
    icon: {
      marginLeft: 'auto',
    },
  }),
);

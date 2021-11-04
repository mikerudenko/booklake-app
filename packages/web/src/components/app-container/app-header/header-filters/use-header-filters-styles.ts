import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useAppHeaderFiltersStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        flexGrow: 0,
      },
    },
    fishingTypes: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      listStyleType: 'none',
      marginLeft: '10px',
    },
    fishingTypeItem: {
      paddingRight: '10px',
      paddingLeft: '10px',
      color: 'white',
      cursor: 'pointer',
      textDecoration: 'none',
      '&:not(:last-child)': {
        borderRight: '1px solid white',
      },
    },
    locationIcon: {
      cursor: 'pointer',
    },
    dateIcon: {
      cursor: 'pointer',
    },
    datePicker: {
      display: 'none',
    },
    dateFilter: {
      marginLeft: 'auto',
      marginRight: '10px',
    },
    datePickerWrapper: {
      padding: 0,
    },
  }),
);

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const usePlacesSelectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    placesSelectionInfo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: 20,
      backgroundColor: theme.palette.secondary.main,
      color: 'white',
      marginTop: 15,
    },
    placesSelectionInfoTitle: {},
    placesSelectionInfoAddressIcon: {
      marginRight: 5,
    },
    placesSelectionInfoLeftPart: {
      display: 'flex',
      alignItems: 'flex-end',
    },

    placesSelectionInfoAddress: {
      marginLeft: 20,
    },
  }),
);

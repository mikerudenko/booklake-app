import { makeStyles } from '@material-ui/styles';

export const useAppSelectStyles = makeStyles({
  formControl: {
    width: '100%',
    marginBottom: 10,
  },
  errorLabel: {
    marginLeft: 0,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  multiSelect: {
    width: '100%',
  },
});

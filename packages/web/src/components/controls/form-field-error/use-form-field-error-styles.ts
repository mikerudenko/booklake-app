import { makeStyles } from '@material-ui/styles';

export const useFormFieldErrorStyles = makeStyles({
  stub: {
    display: 'block',
    width: '100%',
    height: 25,
    paddingTop: 2,
  },
  error: {
    marginTop: 0,
    height: 25,
    paddingTop: 2,
  },
});

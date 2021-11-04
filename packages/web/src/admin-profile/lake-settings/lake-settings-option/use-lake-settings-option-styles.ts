import { makeStyles } from '@material-ui/core/styles';

export const useLakeSettingsOptionStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  optionType: {
    width: 200,
  },
  optionPrice: {
    width: 100,
    marginLeft: 10,
    marginRight: 10,
  },
});

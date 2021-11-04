import { makeStyles } from '@material-ui/core/styles';

export const useAppInfoBlockStyles = makeStyles({
  block: {
    width: '100%',
    color: 'rgb(1, 87, 155)',
    fontSize: '14px',
    backgroundColor: '#e1f5fe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10px',
    borderRadius: '2px',
    marginBottom: 10,
  },
  description: {
    paddingLeft: 10,
  },
});

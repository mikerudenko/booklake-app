import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useNotFoundStyles = makeStyles((theme: Theme) =>
  createStyles({
    status: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    fishingRod: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    title: {
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '24px',
      textAlign: 'center',
      textTransform: 'capitalize',
      color: theme.palette.primary.main,
    },
    description: {
      fontSize: '14px',
      lineHeight: '20px',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    container: {
      paddingTop: '50px',
      paddingBottom: '50px',
    },
    imageContainer: {
      position: 'relative',
      height: '320px',
      marginBottom: '40px',
    },
  }),
);

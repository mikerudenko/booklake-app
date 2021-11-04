import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useLakeSettingsStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '100%',
      overflowX: 'auto',
      margin: '0 auto',
    },
    submit: {
      marginTop: 20,
      marginBottom: 20,
      [theme.breakpoints.down('sm')]: {
        margin: '20px auto',
        width: '100%',
      },
      width: 300,
    },
    lakePictures: {
      width: 700,
      marginLeft: 25,
    },
    mainImageDropzone: {
      width: 300,
      height: 300,
      lineHeight: '300px',
    },
    dropzoneArrayItem: {
      width: 200,
      height: 200,
      lineHeight: '200px',
    },
    placeDropzone: {
      width: '100%',
      height: 300,
      lineHeight: '300px',
    },
    placeItem: {
      marginBottom: 20,
    },
  }),
);

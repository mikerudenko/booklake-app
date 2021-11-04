import { makeStyles } from '@material-ui/core/styles';

export const useAppImageDropzoneStyles = makeStyles({
  circle: {
    borderRadius: '50%',
  },
  imagesContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    '& div': {
      marginRight: 20,
    },
  },
  removeFile: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  image: {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'cover',
    objectPosition: 'center',
    border: 'none',
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    backgroundColor: '#eee',
    cursor: 'pointer',
    textAlign: 'center',
    position: 'relative',
    marginBottom: 20,
    overflow: 'hidden',
    border: '2px dashed transparent',

    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      border: '2px dashed grey',
    },
  },
});

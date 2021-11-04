import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useSocialSectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    phones: {
      padding: 0,
      margin: 0,
      marginBottom: 30,
      listStyleType: 'none',
    },
    phoneItem: {
      marginBottom: 5,
      color: 'white',
      fontSize: '16px',
    },
    socialSection: {
      display: 'flex',
      alignItems: 'center',
      width: '110px',
      justifyContent: 'space-between',
    },
    socialButton: {
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: 'transparent',
      border: '1px solid white',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: '.5s',
      '& path': {
        fill: 'white',
      },
      '&:hover': {
        backgroundColor: 'white',
        '& path': {
          fill: theme.palette.primary.main,
        },
      },
      '&:focus': {
        outline: 'none',
      },
    },
  }),
);

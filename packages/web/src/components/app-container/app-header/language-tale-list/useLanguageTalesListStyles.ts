import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useLanguageTalesListStyles = makeStyles((theme: Theme) => {
  const activeStyles = {
    backgroundColor: 'white',
    color: theme.palette.primary.main,
  };

  return createStyles({
    languageTale: {
      height: 30,
      width: 30,
      borderRadius: 3.5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textTransform: 'uppercase',
      color: 'white',
      fontSize: 12,
      border: '1px solid white',
      transition: '.5s',
      backgroundColor: theme.palette.primary.main,
      cursor: 'pointer',
      '&:hover': activeStyles,
      '&:not(:last-child)': {
        marginRight: 10,
      },
    },
    tales: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    selected: activeStyles,
  });
});

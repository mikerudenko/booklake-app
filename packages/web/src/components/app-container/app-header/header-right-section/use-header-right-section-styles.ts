import { makeStyles } from '@material-ui/core/styles';

export const useHeaderRightSectionStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  avatar: {
    cursor: 'pointer',
  },
  rightContent: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  authLink: {
    color: 'white',
    display: 'inline-flex',
  },
  languageDropdown: {
    marginRight: 10,
  },
  profileItem: {
    color: 'black',
    textDecoration: 'none',
  },
});

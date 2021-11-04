import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useRootStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      '.booklake-slider-dots': {
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'center',

        '& li.slick-active button': {
          backgroundColor: theme.palette.secondary.main,
        },

        '& li': {
          listStyleType: 'none',
          marginRight: 10,
          '& button': {
            width: 16,
            height: 16,
            borderRadius: '50%',
            border: `1px solid ${theme.palette.secondary.main}`,
            backgroundColor: 'transparent',
            cursor: 'pointer',
            '&:active, &:focus': {
              outline: 'none',
            },
          },
        },
      },
    },
  }),
);

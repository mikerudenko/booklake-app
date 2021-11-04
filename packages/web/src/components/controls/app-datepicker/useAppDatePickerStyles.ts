import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useAppDatePickerStyles = makeStyles((theme: Theme) =>
  createStyles({
    datepickerWrapper: {
      width: '100%',
      paddingBottom: 20,

      '& .MuiFormControl-root': {
        width: '100%',
      },
    },
  }),
);

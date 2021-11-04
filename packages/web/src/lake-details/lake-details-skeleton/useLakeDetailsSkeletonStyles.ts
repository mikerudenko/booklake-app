import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FLEX_CENTER_BETWEEN, FLEX_CENTER_START } from '../../app.constants';


export const useLakeDetailsSkeletonStyles = makeStyles((theme: Theme) =>
  createStyles({
    lakeDetailsSceleton: {},
    skeletonHeader: {
      height: 350,
      width: '100%',
      paddingBottom: 30,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    skeletonInfo: {},
    skeletonHeaderDescription: {
      ...FLEX_CENTER_BETWEEN,
    },
    skeletonTitle: {
      height: 57,
      width: 400,
      marginBottom: 15,
    },
    skeletonFishings: {
      ...FLEX_CENTER_START,
      flexWrap: 'wrap',
    },
    skeletonFishing: {
      height: 19,
      width: 113,
      '&:not(:last-child)': {
        marginRight: 20,
      },
    },
    skeletonFish: {
      ...FLEX_CENTER_START,
    },
    skeletonFishItem: {
      height: 60,
      width: 60,
      '&:not(:last-child)': {
        marginRight: 30,
      },
    },
    skeletonSliderForm: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    skeletonSliderBlock: {},
    skeletonOptions: {
      ...FLEX_CENTER_START,
    },
    skeletonOption: {
      width: 110,
      height: 32,
      marginTop: 20,
      marginBottom: 20,
      '&:not(:last-child)': {
        marginRight: 100,
      },
    },
    skeletonSlider: {
      width: '100%',
      height: 500,
      marginBottom: 70,
    },
    skeletonForm: {
      width: '80%',
      height: '415px',
      marginLeft: 'auto',
      padding: '30px 20px',
    },
    skeletonFormField: {
      width: '100%',
      height: 55,
      '&:not(:last-child)': {
        marginBottom: 20,
      },
    },
    skeletonFormInfo: {
      width: '80%',
      marginBottom: 8,
    },
    formInfoBlock: {
      marginTop: 80,
    },
    skeletonFormButton: {
      width: '100%',
      height: 40,
      marginTop: 55,
    },
    skeletonDescription: {
      width: '100%',
    },
    skeletonDescriptionMap: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    skeletonMap: {
      width: '100%',
      marginLeft: 'auto',
      height: 400,
    },
    skeletonDescriptionRow: {
      marginBottom: 10,
      height: 15,
      '&:nth-child(1)': {
        width: '90%',
      },
      '&:nth-child(2)': {
        width: '85%',
      },
      '&:nth-child(3)': {
        width: '90%',
      },
      '&:nth-child(4)': {
        width: '85%',
      },
      '&:nth-child(5)': {
        width: '70%',
      },
    },
  }),
);

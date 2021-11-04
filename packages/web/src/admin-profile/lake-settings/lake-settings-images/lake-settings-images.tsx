import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';

import { useLakeSettingsStyles } from '../useLakeSettingsStyles';
import { AppField } from '../../../components/controls/app-field';

export const LakeSettingsImages = memo(() => {
  const classes = useLakeSettingsStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <AppField
          name='mainPicture'
          imageDropzoneType='round'
          type='imageDropzoneSingle'
          containerClassName={classes.mainImageDropzone}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <AppField
          name='pictures'
          imageDropzoneType='round'
          type='imageDropzoneArray'
          containerClassName={classes.dropzoneArrayItem}
        />
      </Grid>
    </Grid>
  );
});

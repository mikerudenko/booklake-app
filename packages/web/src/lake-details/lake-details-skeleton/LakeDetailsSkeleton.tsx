import React, { memo } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import { useLakeDetailsSkeletonStyles } from './useLakeDetailsSkeletonStyles';

export const LakeDetailsSkeleton = memo(() => {
  const classes = useLakeDetailsSkeletonStyles();

  return (
    <div className={classes.lakeDetailsSceleton}>
      <Skeleton variant='rect' className={classes.skeletonHeader}>
        <Container maxWidth='lg'>
          <div className={classes.skeletonInfo}>
            <Skeleton variant='rect' className={classes.skeletonTitle} />
            <div className={classes.skeletonHeaderDescription}>
              <div className={classes.skeletonFishings}>
                {[1, 2, 3].map(key => (
                  <Skeleton
                    variant='rect'
                    className={classes.skeletonFishing}
                    key={key}
                  />
                ))}
              </div>
              <Hidden smDown>
                <div className={classes.skeletonFish}>
                  {[1, 2, 3].map(key => (
                    <Skeleton
                      variant='circle'
                      className={classes.skeletonFishItem}
                      key={key}
                    />
                  ))}
                </div>
              </Hidden>
            </div>
          </div>
        </Container>
      </Skeleton>
      <Container maxWidth='lg'>
        <div className={classes.skeletonOptions}>
          {[1, 2, 3].map(key => (
            <Skeleton
              variant='rect'
              className={classes.skeletonOption}
              key={key}
            />
          ))}
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Skeleton className={classes.skeletonSlider} variant='rect' />
          </Grid>
          <Grid item xs={12} md={4}>
            <Skeleton className={classes.skeletonForm} variant='rect'>
              <Skeleton className={classes.skeletonFormField} variant='rect' />
              <Skeleton className={classes.skeletonFormField} variant='rect' />
              <div className={classes.formInfoBlock}>
                <Skeleton className={classes.skeletonFormInfo} variant='rect' />
                <Skeleton className={classes.skeletonFormInfo} variant='rect' />
                <Skeleton className={classes.skeletonFormInfo} variant='rect' />
              </div>
              <Skeleton className={classes.skeletonFormButton} variant='rect' />
            </Skeleton>
          </Grid>
          <Grid item xs={12} md={8} className={classes.skeletonDescription}>
            {[1, 2, 3].map(key => (
              <Skeleton
                variant='rect'
                className={classes.skeletonDescriptionRow}
                key={key}
              />
            ))}
          </Grid>
          <Grid item xs={12}>
            <Skeleton className={classes.skeletonMap} variant='rect' />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
});

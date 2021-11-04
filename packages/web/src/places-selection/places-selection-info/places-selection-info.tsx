import React, { memo } from 'react';
import { usePlacesSelectionStyles } from '../use-places-selection-styles';
import { H6 } from '../../components/typography/h6';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { H5 } from '../../components/typography/h5';

export type PlacesSelectionInfoProps = {
  address: string;
  title: string;
};
// todo add usecountdown

export const PlacesSelectionInfo = memo(
  ({ address, title }: PlacesSelectionInfoProps) => {
    const classes = usePlacesSelectionStyles();
    return (
      <div className={classes.placesSelectionInfo}>
        <div className={classes.placesSelectionInfoLeftPart}>
          <H5 className={classes.placesSelectionInfoTitle}>{title}</H5>
          <H6 className={classes.placesSelectionInfoAddress}>
            <LocationOnIcon
              className={classes.placesSelectionInfoAddressIcon}
            />
            {address}
          </H6>
        </div>
        <div></div>
      </div>
    );
  },
);

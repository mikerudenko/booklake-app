import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import c from 'classnames';
import { LAKE_OPTION_TYPES } from '@booklake/core';

import { LAKE_OPTION_TYPES_SELECT_LIST } from '../../store/lakes';
import { useLakeOptionStyles } from './use-lake-option-styles';

interface LakeOptionProps {
  optionType: LAKE_OPTION_TYPES;
  className?: string;
}

const LAKE_OPTION_ICONS_MAP = {
  [LAKE_OPTION_TYPES.barbecue]: OutdoorGrillIcon,
  [LAKE_OPTION_TYPES.boat]: DirectionsBoatIcon,
  [LAKE_OPTION_TYPES.gazebo]: HomeIcon,
};

export const LakeOption = memo(({ optionType, className }: LakeOptionProps) => {
  const { formatMessage } = useIntl();
  const option = LAKE_OPTION_TYPES_SELECT_LIST.find(
    ({ value }) => value === optionType,
  );
  const classes = useLakeOptionStyles();
  const Icon = LAKE_OPTION_ICONS_MAP[optionType];

  return (
    <div className={c(classes.option, className)}>
      <Icon className={classes.optionIcon} />
      <Typography variant='body1'>
        {option && formatMessage(option.label)}
      </Typography>
    </div>
  );
});

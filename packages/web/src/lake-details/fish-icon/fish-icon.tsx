import { useIntl } from 'react-intl';
import React, { memo } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { FISH_TYPES } from '@booklake/core';

import { FISH_SELECT_LIST } from '../../store/lakes';
import PikeIcon from './assets/pike.svg';
import { useLakeDetailsStyles } from '../useLakeDetailsStyles';

interface FishIconProps {
  fishType: FISH_TYPES;
}

// TODO change on pike icon
const FISH_ICONS_MAP = {
  [FISH_TYPES.pike]: PikeIcon,
  [FISH_TYPES.crucian]: PikeIcon,
  [FISH_TYPES.perch]: PikeIcon,
  [FISH_TYPES.rudd]: PikeIcon,
  [FISH_TYPES.carp]: PikeIcon,
  [FISH_TYPES.catfish]: PikeIcon,
  [FISH_TYPES.lin]: PikeIcon,
  [FISH_TYPES.whiteCupid]: PikeIcon,
  [FISH_TYPES.fathead]: PikeIcon,
  [FISH_TYPES.roach]: PikeIcon,
  [FISH_TYPES.bream]: PikeIcon,
  [FISH_TYPES.zander]: PikeIcon,
  [FISH_TYPES.trout]: PikeIcon,
  [FISH_TYPES.cop]: PikeIcon,
  [FISH_TYPES.redHot]: PikeIcon,
};

export const FishIcon = memo(({ fishType }: FishIconProps) => {
  const { formatMessage } = useIntl();
  const messageDescriptor = FISH_SELECT_LIST.find(
    ({ value }) => value === fishType,
  );
  const classes = useLakeDetailsStyles();

  return (
    <Tooltip
      title={messageDescriptor ? formatMessage(messageDescriptor.label) : ''}
    >
      <div className={classes.iconWrapper}>
        <img
          src={FISH_ICONS_MAP[fishType]}
          alt={fishType}
          className={classes.fishIcon}
        />
      </div>
    </Tooltip>
  );
});

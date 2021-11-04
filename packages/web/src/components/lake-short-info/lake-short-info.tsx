import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import c from 'classnames';
import React, { memo } from 'react';
import { MessageDescriptor, useIntl } from 'react-intl';
import { globalMessages } from '../../store/i18n';
import { useLakeShortInfoStyles } from './use-lake-short-info-styles';

interface LakeShortInfoProps {
  address: string;
  minFishingPrice: number;
  currency: MessageDescriptor;
  freePlaceCount?: number;
  loadingFreePlaces?: boolean;
}

export const LakeShortInfo = memo(
  ({
    address,
    minFishingPrice,
    currency,
    freePlaceCount,
    loadingFreePlaces,
  }: LakeShortInfoProps) => {
    const classes = useLakeShortInfoStyles();
    const { formatMessage } = useIntl();

    return (
      <div className={classes.shortInfo}>
        {(typeof freePlaceCount === 'number' || loadingFreePlaces) && (
          <Typography
            variant='body2'
            color='textSecondary'
            component='div'
            className={c(classes.shortInfoItem)}
          >
            {loadingFreePlaces ? (
              <CircularProgress size={20} />
            ) : (
              <span className={classes.placesCount}>{freePlaceCount}</span>
            )}
            <span className={classes.placesCountLabel}>
              {formatMessage(globalMessages.freePlaces)}
            </span>
          </Typography>
        )}
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          className={classes.shortInfoItem}
        >
          <LocationOnIcon className={classes.shortInfoIcon} />
          {address}
        </Typography>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          className={classes.shortInfoItem}
        >
          <AttachMoneyIcon className={classes.shortInfoIcon} />
          <span className={classes.from}>
            {formatMessage(globalMessages.from)}
          </span>
          {minFishingPrice}
          <span className={classes.currency}>{formatMessage(currency)}</span>
        </Typography>
      </div>
    );
  },
);

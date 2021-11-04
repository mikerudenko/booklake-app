import React, { memo, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import queryString from 'query-string';
import { FISHING_TYPES } from '@booklake/core';

import { FISHING_TYPES_SELECT_LIST, useLakesConnect } from '../../store/lakes';
import { ROUTES } from '../../app.constants';
import { useLakeDetailsStyles } from '../useLakeDetailsStyles';

type FishingTypesProps = {
  fishingTypes: FISHING_TYPES[];
};

export const FishingTypes = memo(({ fishingTypes }: FishingTypesProps) => {
  const classes = useLakeDetailsStyles();
  const { formatMessage } = useIntl();
  const { lakeFilters, SetLakeFilters } = useLakesConnect();
  const dispatch = useDispatch();

  const onFishingTypeClick = useCallback(() => {
    const filters = { ...lakeFilters, fishingTypes };
    const params = queryString.stringify(filters, { arrayFormat: 'index' });
    SetLakeFilters(filters);
    dispatch(push(ROUTES.search + '?' + params));
  }, [SetLakeFilters, dispatch, fishingTypes, lakeFilters]);

  return (
    <div>
      {fishingTypes.map(fishingType => {
        const messageDescriptor = FISHING_TYPES_SELECT_LIST.find(
          ({ value }) => value === fishingType,
        );
        return (
          <p
            key={fishingType}
            onClick={onFishingTypeClick}
            className={classes.fishingType}
          >
            #{messageDescriptor && formatMessage(messageDescriptor.label)}
          </p>
        );
      })}
    </div>
  );
});

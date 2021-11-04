import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import queryString from 'query-string';

import { useLakesConnect } from '../../store/lakes';
import { useParams } from 'react-router';
import { ROUTES } from '../../app.constants';
import { NetworkStatus } from '../../store-utils';

export const useLakeDetailsFormLogic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    SetLakeFilters,
    lakeFilters,
    GetLakeBookedPlacesPerDayRequest,
    bookedPlacesNetworkStatus,
    currentLakeFreePlacesCount,
  } = useLakesConnect(id);
  const { dayTimeType, date } = lakeFilters;

  const getLakeFreePlaces = useCallback(
    (date?: string) => {
      if (date && id) {
        GetLakeBookedPlacesPerDayRequest({ lakeId: id, date });
      }
    },
    [GetLakeBookedPlacesPerDayRequest, id],
  );

  const onDatePickerChange = useCallback(
    date => {
      SetLakeFilters({ ...lakeFilters, date: date.toISOString() });
      getLakeFreePlaces(date);
    },
    [SetLakeFilters, getLakeFreePlaces, lakeFilters],
  );
  const onDayTimeChange = useCallback(
    event => {
      SetLakeFilters({ ...lakeFilters, dayTimeType: event.target.value });
      getLakeFreePlaces(lakeFilters.date);
    },
    [SetLakeFilters, getLakeFreePlaces, lakeFilters],
  );

  const onSelectPlaceButtonClick = useCallback(() => {
    const params = queryString.stringify({
      id,
      date: lakeFilters.date,
      dayTimeType: lakeFilters.dayTimeType,
    });
    dispatch(push(ROUTES.placesSelection + '?' + params));
  }, [dispatch, id, lakeFilters.date, lakeFilters.dayTimeType]);

  const isBookedPlacesLoading =
    bookedPlacesNetworkStatus === NetworkStatus.Request;

  const isSelectPlaceButtonDisabled =
    isBookedPlacesLoading || currentLakeFreePlacesCount === 0;

  return {
    onDatePickerChange,
    onDayTimeChange,
    dayTimeType,
    date,
    isBookedPlacesLoading,
    currentLakeFreePlacesCount,
    isSelectPlaceButtonDisabled,
    onSelectPlaceButtonClick,
  };
};

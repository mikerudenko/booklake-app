import { useEffect } from 'react';
import { useLakesConnect } from '../store/lakes';
import { useLocation } from 'react-router';
import { useI18nConnect } from '../store/i18n';
import { NetworkStatus } from '../store-utils';
import queryString from 'query-string';

export const usePlacesSelectionLogic = () => {
  const { id, date } = queryString.parse(useLocation().search) as {
    id: string;
    date: string;
  };
  const {
    currentLakePlaces,
    currentLakeFishings,
    currentLakeBookedPlaces,
    GetLakeByIdPlaceListRequest,
    GetLakeByIdRequest,
    GetLakeBookedPlacesPerDayRequest,
    GetLakeFishingListRequest,
    currentLake,
    lakesNetworkStatus,
    lakeFishingsNetworkStatus,
    lakePlacesNetworkStatus,
    bookedPlacesNetworkStatus,
  } = useLakesConnect(id);
  const { locale } = useI18nConnect();

  useEffect(() => {
    if (!currentLakePlaces.length && id) {
      GetLakeByIdPlaceListRequest(id);
    }

    if (!currentLakeBookedPlaces && date && id) {
      GetLakeBookedPlacesPerDayRequest({ lakeId: id, date });
    }

    if (!currentLake && id) {
      GetLakeByIdRequest(id);
    }

    if (!currentLakeFishings && id) {
      GetLakeFishingListRequest(id);
    }
  }, [
    GetLakeBookedPlacesPerDayRequest,
    GetLakeByIdPlaceListRequest,
    GetLakeByIdRequest,
    GetLakeFishingListRequest,
    currentLake,
    currentLakeBookedPlaces,
    currentLakeFishings,
    currentLakePlaces.length,
    date,
    id,
  ]);

  const placesSelectionLoading = [
    lakesNetworkStatus,
    lakeFishingsNetworkStatus,
    lakePlacesNetworkStatus,
    bookedPlacesNetworkStatus,
  ].includes(NetworkStatus.Request);

  return {
    locale,
    currentLake,
    currentLakePlaces,
    currentLakeBookedPlaces,
    placesSelectionLoading,
  };
};

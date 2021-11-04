import { useSelector } from 'react-redux';

import { LakesSlice } from './lakes.slice';
import {
  selectLakes,
  constructSelectLakeById,
  constructSelectLakeByIdPlaces,
  constructSelectLakeByIdFishings,
  constructSelectLakeByIdBookedPlaces,
  selectLakesNetworkStatus,
  selectLakePlacesNetworkStatus,
  selectLakeFishingsNetworkStatus,
  selectLakeFilters,
  constructSelectLakeByIdFreePlacesCount,
  selectLakeBookedPlacesNetworkStatus,
} from './lakes.selectors';
import { useActions } from '../../hooks';

export const useLakesConnect = (lakeId: string = '') => {
  const lakes = useSelector(selectLakes);
  const lakesNetworkStatus = useSelector(selectLakesNetworkStatus);
  const lakePlacesNetworkStatus = useSelector(selectLakePlacesNetworkStatus);
  const lakeFishingsNetworkStatus = useSelector(
    selectLakeFishingsNetworkStatus,
  );
  const lakeByIdSelector = constructSelectLakeById(lakeId);
  const lakeByIdPlacesSelector = constructSelectLakeByIdPlaces(lakeId);
  const lakeByIdFishingsSelector = constructSelectLakeByIdFishings(lakeId);
  const lakeByIdBookedPlacesSelector = constructSelectLakeByIdBookedPlaces(
    lakeId,
  );
  const lakeFilters = useSelector(selectLakeFilters);
  const lakeByIdFreePlacesCountSelector = constructSelectLakeByIdFreePlacesCount(
    lakeId,
  );
  const bookedPlacesNetworkStatus = useSelector(
    selectLakeBookedPlacesNetworkStatus,
  );
  const currentLake = useSelector(lakeByIdSelector);
  const currentLakePlaces = useSelector(lakeByIdPlacesSelector);
  const currentLakeFishings = useSelector(lakeByIdFishingsSelector);
  const currentLakeBookedPlaces = useSelector(lakeByIdBookedPlacesSelector);
  const currentLakeFreePlacesCount = useSelector(
    lakeByIdFreePlacesCountSelector,
  );

  return {
    ...useActions(LakesSlice.actions),
    lakeFilters,
    currentLake,
    currentLakePlaces,
    currentLakeFishings,
    currentLakeBookedPlaces,
    currentLakeFreePlacesCount,
    lakePlacesNetworkStatus,
    lakeFishingsNetworkStatus,
    lakes,
    lakesNetworkStatus,
    bookedPlacesNetworkStatus,
  } as const;
};

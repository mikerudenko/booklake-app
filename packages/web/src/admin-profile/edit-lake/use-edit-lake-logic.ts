import { useParams } from 'react-router';
import { useEffect } from 'react';

import { useLakesConnect } from '../../store/lakes';
import { useCreditCardsConnect } from '../../store/credit-cards';
import { META_THUNK } from '../../app.constants';

export const useEditLakeLogic = () => {
  const { id } = useParams();
  const {
    GetLakeByIdRequest,
    currentLake,
    GetLakeByIdPlaceListRequest,
    GetLakeFishingListRequest,
    currentLakePlaces,
    currentLakeFishings,
  } = useLakesConnect(id);

  const {
    creditCard: { creditCard, id: creditCardId },
    GetCreditCardRequest,
  } = useCreditCardsConnect();

  // todo add auto hooks

  useEffect(() => {
    if (!currentLake && id) {
      GetLakeByIdRequest(id);
      GetLakeByIdPlaceListRequest(id);
      GetLakeFishingListRequest(id);
    }
    if (currentLake) {
      GetCreditCardRequest(currentLake.managerId, META_THUNK);
    }
  }, [
    GetCreditCardRequest,
    GetLakeByIdPlaceListRequest,
    GetLakeByIdRequest,
    GetLakeFishingListRequest,
    currentLake,
    id,
  ]);

  const lake =
    currentLake &&
    ({
      ...currentLake,
      creditCard,
      creditCardId,
      places: currentLakePlaces,
      fishings: currentLakeFishings,
    } as any);

  return {
    lake,
  };
};

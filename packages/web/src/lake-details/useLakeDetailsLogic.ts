import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useLakesConnect } from '../store/lakes';
import { META_THUNK } from '../app.constants';

export const useLakeDetailsLogic = () => {
  const { id } = useParams();
  const {
    currentLake,
    GetLakeByIdRequest,
    lakesNetworkStatus,
    lakeFilters,
  } = useLakesConnect(id);

  useEffect(() => {
    if (!currentLake && id) {
      GetLakeByIdRequest(id, META_THUNK);
    }
  }, [GetLakeByIdRequest, currentLake, id]);

  return { currentLake, lakesNetworkStatus, lakeFilters, id };
};

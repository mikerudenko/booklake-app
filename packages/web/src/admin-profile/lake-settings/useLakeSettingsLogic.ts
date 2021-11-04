import { useEffect, useCallback } from 'react';

import { useManagersConnect } from '../../store/managers';
import { useLakesConnect, LakeSettingsValues } from '../../store/lakes';
import { META_THUNK } from '../../app.constants';
import { NetworkStatus } from '../../store-utils';

export const useLakeSettingsLogic = () => {
  const {
    GetManagersListRequest,
    managers,
    networkStatus,
  } = useManagersConnect();
  const { UpdateLakeRequest } = useLakesConnect();

  useEffect(() => {
    GetManagersListRequest();
  }, [GetManagersListRequest]);

  const onSubmit = useCallback(
    async (lakeSettingsValues: LakeSettingsValues) => {
      return UpdateLakeRequest(lakeSettingsValues, META_THUNK);
    },
    [UpdateLakeRequest],
  );

  const managersSelectList = managers.map(({ id, email }: any) => ({
    label: email,
    value: id,
  }));

  return {
    onSubmit,
    managersLoading: networkStatus === NetworkStatus.Request,
    managersSelectList,
  };
};

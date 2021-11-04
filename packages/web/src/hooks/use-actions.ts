import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
export const useActions = <T extends Record<string, any> = {}>(
  actions: T,
): T => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return Object.keys(actions).reduce(
      (bindedActions, actionKey) => ({
        ...bindedActions,
        [actionKey]: bindActionCreators(actions[actionKey], dispatch),
      }),
      {} as T,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...Object.keys(actions).map(key => actions[key]), dispatch]);
};

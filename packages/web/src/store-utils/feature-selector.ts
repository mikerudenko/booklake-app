import { createSelector, OutputSelector } from 'reselect';

export function createFeatureSelector<R>(
  featureName: string,
): OutputSelector<object, R, (res: R) => R> {
  return createSelector<object, R, R>(
    (state: any) => state[featureName] as R,
    (result: R) => result,
  );
}

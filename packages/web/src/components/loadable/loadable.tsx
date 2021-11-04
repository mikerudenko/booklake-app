import React, { lazy, Suspense } from 'react';
import { AppLoader } from '../app-loader';

export const Loadable = (importFunc: any) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={<AppLoader />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

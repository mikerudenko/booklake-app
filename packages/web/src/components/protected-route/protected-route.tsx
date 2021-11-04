import React, { memo } from 'react';
import { Route } from 'react-router-dom';

type ComponentType = import('react').ComponentType;

type ProtectedRouteProps = {
  hasAccess: boolean;
  component: ComponentType;
  redirectComponent: ComponentType;
  path: string;
  exact?: boolean;
};

export const ProtectedRoute = memo(
  ({
    hasAccess,
    component,
    path,
    exact,
    redirectComponent: Redirect,
  }: ProtectedRouteProps) =>
    hasAccess ? <Route {...{ exact, path, component }} /> : <Redirect />,
);

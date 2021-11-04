import React, { memo } from 'react';

type AppTabsProps = import('./app-tabs').AppTabsProps;

interface AppTabContentProps extends AppTabsProps {
  activeTab: number;
}

export const AppTabContent = memo(
  ({ contentClassName, tabs, isRouter, activeTab }: AppTabContentProps) =>
    !isRouter ? (
      <div className={contentClassName}>
        {tabs.map(({ component, componentProps }, key) => {
          const Component = component as any;
          return activeTab === key ? (
            <Component {...componentProps} key={key} />
          ) : (
            false
          );
        })}
      </div>
    ) : null,
);

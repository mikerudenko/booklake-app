import React, { useState, useCallback } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MessageDescriptor, useIntl } from 'react-intl';
import c from 'classnames';

import { AppTabContent } from './app-tab-content';
import { useAppTabsStyles } from './use-app-tabs-styles';
import { Link } from 'react-router-dom';

export interface AppTabItem {
  label: MessageDescriptor;
  component?: any;
  to?: string;
  labelValues?: Record<string, any>;
  componentProps?: Record<string, any>;
}

export interface AppTabsProps {
  contentClassName?: string;
  wrapperClassName?: string;
  isRouter?: boolean;
  tabs: AppTabItem[];
  children?: any;
}

export const AppTabs = ({
  tabs,
  contentClassName,
  wrapperClassName,
  children,
  isRouter = false,
}: AppTabsProps) => {
  const classes = useAppTabsStyles();
  const [activeTab, setActiveTab] = useState(0);
  const { formatMessage } = useIntl();

  const AppTabNavLink = React.forwardRef((props: any, ref: any) => (
    <Link ref={ref} {...props} />
  ));

  const handleChange = useCallback((event: any, newValue: number) => {
    setActiveTab(newValue);
  }, []);

  return (
    <div className={c(classes.root, wrapperClassName)}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons='auto'
        textColor='primary'
        indicatorColor='primary'
        classes={{
          root: classes.tabsRoot,
        }}
      >
        {tabs.map(({ label, labelValues, to }, index) => {
          const extraProps = to ? { to, component: AppTabNavLink } : {};

          return (
            <Tab
              {...extraProps}
              disableRipple
              key={index}
              {...{ label: formatMessage(label, labelValues) }}
              classes={{
                root: classes.tabRoot,
              }}
            />
          );
        })}
      </Tabs>
      <AppTabContent {...{ tabs, contentClassName, isRouter, activeTab }} />
      {children}
    </div>
  );
};

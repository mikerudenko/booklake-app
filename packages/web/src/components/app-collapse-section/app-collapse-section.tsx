import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Collapse from '@material-ui/core/Collapse';

import { useAppCollapseSectionStyles } from './use-app-collapse-section-styles';
import { useBooleanState } from '../../hooks';

interface AppCollapseSectionProps {
  caption?: string | import('react-intl').MessageDescriptor;
  children: any;
}

export const AppCollapseSection = memo(
  ({ caption, children }: AppCollapseSectionProps) => {
    const { formatMessage } = useIntl();
    const classes = useAppCollapseSectionStyles();
    const [expanded, setExpanded, setCollapsed] = useBooleanState(true);

    return (
      <div className={classes.collapseSectionWrapper}>
        <div className={classes.caption}>
          {caption &&
            (typeof caption === 'string' ? caption : formatMessage(caption))}
          <IconButton
            className={classes.icon}
            aria-label='expanded'
            onClick={expanded ? setCollapsed : setExpanded}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </div>
        <Collapse in={expanded}>{children}</Collapse>
      </div>
    );
  },
);

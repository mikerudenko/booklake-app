import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import { copyrightMessages } from './app-copyright.messages';

type AppCopyrightProps = {
  className?: string;
};

export const AppCopyright = memo(({ className }: AppCopyrightProps) => (
  <Typography
    variant='body2'
    color='textSecondary'
    align='center'
    className={className}
  >
    Copyright©
    <Link color='inherit' href='#'>
      BookLake
    </Link>
    {new Date().getFullYear()}.{' '}
    <FormattedMessage {...copyrightMessages.allRightsReserved} />
  </Typography>
));

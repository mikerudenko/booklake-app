import React, { memo } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Lake } from '@booklake/core';

import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { useLakeGridItemStyles } from './use-lake-grid-item-styles';
import { useI18nConnect, globalMessages } from '../../../store/i18n';
import { ROUTES } from '../../../app.constants';
import { LakeShortInfo } from '../../lake-short-info';
import {
  selectLakeTranslations,
  selectCurrencyTranslation,
} from '../../../services/helper-service';

interface LakeGridItemProps {
  lake: Lake;
}

export const LakeGridItem = memo(
  ({
    lake: { mainPicture, translations, currency, minFishingPrice, id },
  }: LakeGridItemProps) => {
    const classes = useLakeGridItemStyles();
    const { locale } = useI18nConnect();
    const { formatMessage } = useIntl();
    const currencyItem = selectCurrencyTranslation(currency);
    const { title, address } = selectLakeTranslations(translations, locale);

    return (
      <Card className={classes.card}>
        <CardMedia className={classes.image} image={mainPicture as string} />
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className={classes.cardTitle}
          >
            {title}
          </Typography>
          <LakeShortInfo
            {...{ minFishingPrice, address }}
            currency={currencyItem ? currencyItem.label : ('' as any)}
          />
          <Link to={`${ROUTES.lakes}/${id}`} className={classes.buyLink}>
            <Button
              size='small'
              color='secondary'
              variant='contained'
              className={classes.buyButton}
            >
              {formatMessage(globalMessages.buy)}
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  },
);

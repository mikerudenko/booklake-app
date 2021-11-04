import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';
import DocumentTitle from 'react-document-title';
import { useIntl } from 'react-intl';
import { AppContainer } from '../components/app-container';
import { LakeOption } from '../components/lake-option';
import {
  selectCurrencyTranslation,
  selectLakeTranslations,
} from '../services/helper-service';
import { NetworkStatus } from '../store-utils';
import { globalMessages, useI18nConnect } from '../store/i18n';
import { FishIcon } from './fish-icon';
import { FishingTypes } from './fishing-types';
import { LakeDetailsForm } from './lake-details-form';
import { LakeDetailsMap } from './lake-details-map';
import { LakeDetailsSkeleton } from './lake-details-skeleton';
import { LakeDetailsSlider } from './lake-details-slider';
import { lakeDetailsMessages } from './LakeDetails.messages';
import { useLakeDetailsLogic } from './useLakeDetailsLogic';
import { useLakeDetailsStyles } from './useLakeDetailsStyles';

export const LakeDetails = memo(() => {
  const { formatMessage } = useIntl();
  const { locale } = useI18nConnect();
  const { currentLake, lakesNetworkStatus, id } = useLakeDetailsLogic();
  const classes = useLakeDetailsStyles();

  if (lakesNetworkStatus === NetworkStatus.Request || currentLake === null) {
    return (
      <DocumentTitle title={formatMessage(lakeDetailsMessages.pageTitle)}>
        <AppContainer hasCustomContainer>
          <LakeDetailsSkeleton />
        </AppContainer>
      </DocumentTitle>
    );
  }

  const {
    translations,
    fishingTypes,
    fishTypes,
    options,
    mainPicture,
    minFishingPrice,
    pictures,
    currency,
    contacts: { lng, lat },
  } = currentLake;
  const { address, description, title } = selectLakeTranslations(
    translations,
    locale,
  );
  const currencyItem = selectCurrencyTranslation(currency);

  return (
    <DocumentTitle title={formatMessage(lakeDetailsMessages.pageTitle)}>
      <AppContainer hasCustomContainer>
        <div className={classes.detailsHeader}>
          <img
            className={classes.headerImage}
            alt='Lake details'
            src={mainPicture as string}
          />
          <Container maxWidth='lg' className={classes.headerContent}>
            <h3 className={classes.lakeTitle}>{title}</h3>
            <div className={classes.typesAndFish}>
              <FishingTypes {...{ fishingTypes }} />
              <Hidden smDown>
                <section className={classes.fishSection}>
                  {fishTypes.map((fishType: any) => (
                    <FishIcon {...{ fishType }} key={fishType} />
                  ))}
                </section>
              </Hidden>
            </div>
          </Container>
        </div>
        <Container maxWidth='lg' className={classes.detailsBody}>
          <Typography variant='h6' className={classes.optionSectionTitle}>
            {formatMessage(globalMessages.option, { quantity: 2 })}
          </Typography>
          <section className={classes.optionsSection}>
            {options.map(({ type }: any) => (
              <LakeOption
                key={type}
                {...{ optionType: type as any, className: classes.optionsItem }}
              />
            ))}
          </section>
          <Grid container spacing={2} className={classes.mainSection}>
            <Grid item xs={12} md={8}>
              <LakeDetailsSlider pictures={pictures as string[]} />
            </Grid>
            <Grid item xs={12} md={4}>
              <LakeDetailsForm
                {...{ id: id as string, address, minFishingPrice }}
                className={classes.lakeDetailsForm}
                currency={currencyItem ? currencyItem.label : ('' as any)}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant='body1' className={classes.lakeDescription}>
                {description}
              </Typography>
            </Grid>
            <Grid item md={12}>
              <LakeDetailsMap zoom={15} center={{ lng, lat }} />
            </Grid>
          </Grid>
        </Container>
      </AppContainer>
    </DocumentTitle>
  );
});

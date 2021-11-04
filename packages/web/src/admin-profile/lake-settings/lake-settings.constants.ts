import { v4 as uuid } from 'uuid';
import {
  LakePlace,
  Fishing,
  LakeTranslation,
  COUNTRIES,
  REGIONS,
} from '@booklake/core';
import { LakeSettingsValues } from '../../store/lakes';
import { LOCALE } from '@booklake/core/dist/i18n';

export const getInitialLakeValues = (): Partial<LakeSettingsValues> => ({
  id: uuid(),
  translations: [],
  contacts: {
    email: '',
    phone: '',
    country: COUNTRIES.Ukraine,
    region: REGIONS.KievRegion,
    lng: 0,
    lat: 0,
  },
  placesCount: 0,
  minFishingPrice: 0,
  active: true,
  creditCardId: uuid(),
  fishTypes: [],
  fishingTypes: [],
  dayTimeTypes: [],
  options: [],
  showInSlider: true,
  pictures: [],
  places: [],
  fishings: [],
});

export const getEmptyPlace = (): Partial<LakePlace> => ({
  id: uuid(),
  requiredOptions: [],
  options: [],
});

export const getEmptyFishing = (): Partial<Fishing> => ({
  id: uuid(),
  active: true,
});

export const getEmptyTranslation = (): Partial<LakeTranslation> => ({
  locale: LOCALE.En,
});

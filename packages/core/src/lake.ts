import { LOCALE } from './i18n';
import { COUNTRIES, REGIONS, CURRENCY } from './app';

export enum FISHING_DAY_TIME_TYPES {
  allDay = 'all-day',
  morning = 'morning',
  evening = 'evening',
  night = 'night',
}

export enum FISHING_DAY_TYPES {
  weekdays = 'weekdays',
  weekends = 'weekends',
}

export enum FISHING_TYPES {
  spinningFishing = 'spinning-fishing',
  floatFishing = 'float-fishing',
  feederFishing = 'bottom-fishing',
}

export enum LAKE_PLACE_TYPE {
  riverside = 'riverside',
  pier = 'pier',
}

export enum LAKE_OPTION_TYPES {
  gazebo = 'gazebo',
  barbecue = 'barbecue',
  boat = 'boat',
}

export enum FISH_TYPES {
  pike = 'pike',
  crucian = 'crucian',
  perch = 'perch',
  rudd = 'rudd',
  carp = 'carp',
  catfish = 'catfish',
  lin = 'lin',
  whiteCupid = 'whiteCupid',
  fathead = 'fathead',
  roach = 'roach',
  bream = 'bream',
  zander = 'zander',
  trout = 'trout',
  cop = 'cop',
  redHot = 'redHot',
}

export interface LakeOption {
  type: LAKE_OPTION_TYPES;
  price: number;
}

export interface Fishing {
  id: string;
  dayTimeType: FISHING_DAY_TIME_TYPES;
  dayType: FISHING_DAY_TYPES;
  placeType: LAKE_PLACE_TYPE;
  fishingType: FISHING_TYPES;
  price: number;
  active: boolean;
}

export interface LakePlace {
  id: string;
  type: LAKE_PLACE_TYPE;
  requiredOptions: LAKE_OPTION_TYPES[];
  options: LAKE_OPTION_TYPES[];
  picture: File | string;
  priceForOnePerson: boolean;
  show: boolean;
  x: number;
  y: number;
}

export interface LakeTranslation {
  title: string;
  locale: LOCALE;
  description: string;
  address: string;
}

export interface LakeContacts {
  email: string;
  phone: string;
  country: COUNTRIES;
  region: REGIONS;
  lng: number;
  lat: number;
}

export interface Lake {
  id: string;
  translations: LakeTranslation[];
  options: LakeOption[];
  contacts: LakeContacts;
  placesCount: number;
  active: boolean;
  svgPath: string;
  mainPicture: string | File;
  pictures: Array<string | File>;
  dayTimeTypes: FISHING_DAY_TIME_TYPES[];
  fishTypes: FISH_TYPES[];
  fishingTypes: FISHING_TYPES[];
  managerId: string;
  minFishingPrice: number;
  showInSlider: boolean;
  currency: CURRENCY;
}

export interface GetLakeListPayload {
  date: string;
  options: string[];
  fishing: string;
  dayTimeType: string;
  fish: string[];
}

export interface BookedPlacesPerDay {
  date: string;
  [FISHING_DAY_TIME_TYPES.allDay]: string[];
  [FISHING_DAY_TIME_TYPES.morning]: string[];
  [FISHING_DAY_TIME_TYPES.evening]: string[];
  [FISHING_DAY_TIME_TYPES.night]: string[];
}

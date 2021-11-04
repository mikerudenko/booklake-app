import {
  LAKE_PLACE_TYPE,
  FISHING_DAY_TYPES,
  FISHING_DAY_TIME_TYPES,
  FISHING_TYPES,
  LAKE_OPTION_TYPES,
  FISH_TYPES,
} from '@booklake/core';
import { lakesMessages } from './lakes.messages';

export const LAKE_PLACE_TYPE_SELECT_LIST = [
  {
    value: LAKE_PLACE_TYPE.riverside,
    label: lakesMessages.riverside,
  },
  {
    value: LAKE_PLACE_TYPE.pier,
    label: lakesMessages.pier,
  },
];

export const FISHING_DAY_TYPES_SELECT_LIST = [
  {
    value: FISHING_DAY_TYPES.weekdays,
    label: lakesMessages.dayTypeWeekdays,
  },
  {
    value: FISHING_DAY_TYPES.weekends,
    label: lakesMessages.dayTypeWeekends,
  },
];

export const FISHING_DAY_TIME_SELECT_LIST = [
  {
    value: FISHING_DAY_TIME_TYPES.allDay,
    label: lakesMessages.timeAllDay,
  },
  {
    value: FISHING_DAY_TIME_TYPES.morning,
    label: lakesMessages.timeMorning,
  },
  {
    value: FISHING_DAY_TIME_TYPES.evening,
    label: lakesMessages.timeEvening,
  },
  {
    value: FISHING_DAY_TIME_TYPES.night,
    label: lakesMessages.timeNight,
  },
];

export const FISHING_TYPES_SELECT_LIST = [
  {
    value: FISHING_TYPES.spinningFishing,
    label: lakesMessages.spinningFishing,
  },
  {
    value: FISHING_TYPES.floatFishing,
    label: lakesMessages.floatFishing,
  },
  {
    value: FISHING_TYPES.feederFishing,
    label: lakesMessages.feederFishing,
  },
];

export const LAKE_OPTION_TYPES_SELECT_LIST = [
  {
    label: lakesMessages.gazebo,
    value: LAKE_OPTION_TYPES.gazebo,
  },
  {
    label: lakesMessages.barbecue,
    value: LAKE_OPTION_TYPES.barbecue,
  },
  {
    label: lakesMessages.boat,
    value: LAKE_OPTION_TYPES.boat,
  },
];

export const FISH_SELECT_LIST = [
  {
    value: FISH_TYPES.pike,
    label: lakesMessages.pike,
  },
  {
    value: FISH_TYPES.crucian,
    label: lakesMessages.crucian,
  },
  {
    value: FISH_TYPES.perch,
    label: lakesMessages.perch,
  },
  {
    value: FISH_TYPES.rudd,
    label: lakesMessages.rudd,
  },
  {
    value: FISH_TYPES.carp,
    label: lakesMessages.carp,
  },
  {
    value: FISH_TYPES.catfish,
    label: lakesMessages.catfish,
  },
  {
    value: FISH_TYPES.lin,
    label: lakesMessages.lin,
  },
  {
    value: FISH_TYPES.whiteCupid,
    label: lakesMessages.whiteCupid,
  },
  {
    value: FISH_TYPES.fathead,
    label: lakesMessages.fathead,
  },
  {
    value: FISH_TYPES.roach,
    label: lakesMessages.roach,
  },
  {
    value: FISH_TYPES.bream,
    label: lakesMessages.bream,
  },
  {
    value: FISH_TYPES.zander,
    label: lakesMessages.zander,
  },
  {
    value: FISH_TYPES.trout,
    label: lakesMessages.trout,
  },
  {
    value: FISH_TYPES.cop,
    label: lakesMessages.cop,
  },
  {
    value: FISH_TYPES.redHot,
    label: lakesMessages.redHot,
  },
];

export const DEFAULT_LAKE_FILTERS = {
  fishingType: [],
  optionTypes: [],
  fish: [],
  dayTimeType: FISHING_DAY_TIME_TYPES.morning,
};

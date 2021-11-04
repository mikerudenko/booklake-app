import * as admin from 'firebase-admin';
import get from 'lodash/get';
import { OrderPayType, Order, FISHING_DAY_TIME_TYPES } from '@booklake/core';

import { delay } from './functions.helpers';

export const createOrder = (payload: Order, lakeid: string) => {
  const {
    date,
    places,
    dayTimeType,
    payType,
    id,
    buyer: { userId, email, fullName, phone },
  } = payload;

  if (payType !== OrderPayType.card) {
    return;
  }

  // if (payType === 'cash') {
  //   return;
  // }

  // await delay(15000);
};

interface CreateManagerPayload {
  managerId: string;
  lakeId: string;
  order: Order;
}

export const createManagerOrder = async ({
  order,
  lakeId,
  managerId,
}: CreateManagerPayload) => {
  const lake = await admin
    .firestore()
    .collection('lakes')
    .doc(lakeId)
    .get();

    // check id and role from auth obj

  if (lake.data()?.managerId !== managerId) {
    console.log('Can not create manager order! Invalid manager id');
    return;
  }

  const { date, places, dayTimeType } = order;

  if (
    isOrderExist({
      lakeId,
      date,
      places: places.map(({ id }) => id),
      dayTimeType,
    })
  ) {
    console.log('Can not create order, places are already selected');
    //TODO throw error from BE
    return;
  }

  await admin
    .firestore()
    .collection('lakes')
    .doc(lakeId)
    .collection('orders')
    .doc(lakeId)
    .set(order, { merge: true });
};

const isPlaceListInDateTimeTypeList = (placeList: string[], list: string[]) =>
  placeList.some(place => list.includes(place));

type OrderExistDTO = {
  lakeId: string;
  date: string;
  places: string[];
  dayTimeType: FISHING_DAY_TIME_TYPES;
};

const isOrderExist = async ({
  lakeId,
  date,
  places,
  dayTimeType,
}: OrderExistDTO) => {
  const bookedPlacesSnapshot = await admin
    .firestore()
    .collection('lakes')
    .doc(lakeId)
    .collection('bookedPlaces')
    .where('date', '==', date)
    .get();

  const bookedPlaces = bookedPlacesSnapshot.docs[0].data();

  if (!bookedPlaces) {
    return false;
  }

  if (isPlaceListInDateTimeTypeList(places, bookedPlaces[dayTimeType])) {
    return true;
  }

  const isPlacesListInNonAllDayTypes =
    isPlaceListInDateTimeTypeList(
      places,
      bookedPlaces[FISHING_DAY_TIME_TYPES.evening],
    ) &&
    isPlaceListInDateTimeTypeList(
      places,
      bookedPlaces[FISHING_DAY_TIME_TYPES.morning],
    ) &&
    isPlaceListInDateTimeTypeList(
      places,
      bookedPlaces[FISHING_DAY_TIME_TYPES.night],
    );

  if (
    dayTimeType === FISHING_DAY_TIME_TYPES.allDay &&
    isPlacesListInNonAllDayTypes
  ) {
    return true;
  }

  return false;
};

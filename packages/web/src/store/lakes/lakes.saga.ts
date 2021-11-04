import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import difference from 'lodash/difference';
import map from 'lodash/map';
import get from 'lodash/get';
import {
  Lake,
  LakePlace,
  Fishing,
  CreditCard,
  BookedPlacesPerDay,
} from '@booklake/core';

import { LakesSlice } from './lakes.slice';
import { CreditCardsSlice } from '../credit-cards';

import {
  LakeListFilters,
  LakeSettingsValues,
  GetBookedPlacesRequestPayload,
} from './lakes.types';
import {
  showErrorNotification,
  showSuccessNotification,
} from '../notifications';
import { lakesMessages } from './lakes.messages';
import {
  uploadLakePictures,
  uploadMainLakePicture,
  updateLake,
  updateLakePlaces,
  updateLakeFishings,
  getLakeById,
  getLakeList,
  getLakePlaceList,
  getLakeFishingList,
  transformServerListPayload,
  deleteLakePictures,
  deleteLakePLaces,
  deleteLakeFishings,
  FirebaseServerCollection,
  getLakeBookedPlaces,
  // FirebaseServerCollectionItem,
} from '../../api';
import {
  constructSelectLakeById,
  constructSelectLakeByIdPlaces,
  constructSelectLakeByIdFishings,
} from './lakes.selectors';
import { PayloadAction } from '@reduxjs/toolkit';
import { getEmptyBookedLakePlaces } from './lakes.helpers';
import { MetaThunk } from '../../app.types';

const {
  UpdateLakeRequest,
  UpdateLakeSuccess,
  UpdateLakeError,
  GetLakeListRequest,
  GetLakeListSuccess,
  GetLakeListError,
  GetLakeByIdPlaceListRequest,
  GetLakeByIdPlaceListSuccess,
  GetLakeByIdPlaceListError,
  GetLakeFishingListRequest,
  GetLakeFishingListSuccess,
  GetLakeFishingListError,
  GetLakeByIdRequest,
  GetLakeByIdSuccess,
  GetLakeByIdError,
  GetLakeBookedPlacesPerDayRequest,
  GetLakeBookedPlacesPerDaySuccess,
  GetLakeBookedPlacesPerDayError,
} = LakesSlice.actions;

const { UpdateCreditCardRequest } = CreditCardsSlice.actions;

export function* updateLakeSaga(
  action: PayloadAction<LakeSettingsValues, string, MetaThunk>,
) {
  const { meta, payload } = action;
  let {
    id,
    pictures,
    mainPicture,
    managerId,
    currency,
    creditCard,
    creditCardId,
    places,
    fishings,
    ...rest
  } = payload;

  try {
    ({ pictures, mainPicture } = yield call(
      updateLakeImages,
      id,
      mainPicture,
      pictures,
    ));

    const creditCardPayload: CreditCard = {
      id: creditCardId,
      managerId,
      currency,
      creditCard,
    };

    let lakePayload: Lake = {
      ...(rest as Lake),
      pictures,
      mainPicture,
      id,
      managerId,
      currency,
    };

    yield call(updateLakePlaceListSaga, id, places);
    yield call(updateLakeFishingList, id, fishings);
    yield call(updateLake, lakePayload);
    yield put(UpdateLakeSuccess(lakePayload, meta));
    yield put(UpdateCreditCardRequest(creditCardPayload));
    yield put(showSuccessNotification(lakesMessages.updateLakeSuccess));
  } catch (error) {
    yield put(UpdateLakeError(error, meta, true));
    yield put(showErrorNotification(lakesMessages.lakeCreateError));
  }
}

export function* updateLakeImages(
  lakeId: string,
  mainPicture: File | string,
  pictures: Array<File | string>,
) {
  const currentLake = yield select(constructSelectLakeById(lakeId));
  const currentLakePictures = get(currentLake, 'pictures', []);
  const imageLinksToDelete = difference(
    currentLakePictures,
    pictures,
  ) as string[];
  const oldPictureLinks = difference(currentLakePictures, imageLinksToDelete);
  const newPictureFiles = pictures.filter(
    picture => picture instanceof File,
  ) as File[];
  yield call(deleteLakePictures, imageLinksToDelete);
  const newImageLinks = yield call(uploadLakePictures, lakeId, newPictureFiles);

  pictures = oldPictureLinks.concat(newImageLinks);

  if (mainPicture instanceof File) {
    mainPicture = yield call(uploadMainLakePicture, lakeId, mainPicture);
  }

  return {
    pictures,
    mainPicture,
  };
}

export function* updateLakePlaceListSaga(lakeId: string, places: LakePlace[]) {
  const currentLakePlaces = yield select(constructSelectLakeByIdPlaces(lakeId));

  const placeIdsToDelete = difference(
    map(currentLakePlaces, 'id'),
    map(places, 'id'),
  );
  yield call(deleteLakePLaces, lakeId, placeIdsToDelete);
  yield call(updateLakePlaces, lakeId, places);
}

export function* updateLakeFishingList(lakeId: string, fishings: Fishing[]) {
  const currentLakeFishings = yield select(
    constructSelectLakeByIdFishings(lakeId),
  );

  const fishingIdsToDelete = difference(
    map(currentLakeFishings, 'id'),
    map(fishings, 'id'),
  );
  yield call(deleteLakeFishings, lakeId, fishingIdsToDelete);
  yield call(updateLakeFishings, lakeId, fishings);
}

export function* getLakeListSaga({ payload }: PayloadAction<LakeListFilters>) {
  try {
    const lakes = yield call(getLakeList, payload);
    yield put(GetLakeListSuccess(lakes));
  } catch {
    yield put(GetLakeListError());
  }
}

export function* getLakeByIdSaga({ payload }: PayloadAction<string>) {
  try {
    const lake = yield call(getLakeById, payload);
    yield put(GetLakeByIdSuccess(lake));
  } catch {
    yield put(GetLakeByIdError());
  }
}

export function* getLakeByIdPlaceListSaga({ payload }: PayloadAction<string>) {
  try {
    const lakePlaces: FirebaseServerCollection = yield call(
      getLakePlaceList,
      payload,
    );
    yield put(
      GetLakeByIdPlaceListSuccess({
        places: transformServerListPayload<LakePlace>(lakePlaces),
        lakeId: payload,
      }),
    );
  } catch {
    yield put(GetLakeByIdPlaceListError());
  }
}

export function* getLakeByIdFishingListSaga({
  payload,
}: PayloadAction<string>) {
  try {
    const lakeFishings: FirebaseServerCollection = yield call(
      getLakeFishingList,
      payload,
    );
    yield put(
      GetLakeFishingListSuccess({
        fishings: transformServerListPayload<Fishing>(lakeFishings),
        lakeId: payload,
      }),
    );
  } catch {
    yield put(GetLakeFishingListError());
  }
}

export function* getLakeByIdBookedPlacesSaga({
  payload,
}: PayloadAction<GetBookedPlacesRequestPayload>) {
  try {
    const bookedPlaces: FirebaseServerCollection = yield call(
      getLakeBookedPlaces,
      payload as Required<GetBookedPlacesRequestPayload>,
    );

    yield put(
      GetLakeBookedPlacesPerDaySuccess({
        bookedPlaces:
          transformServerListPayload<BookedPlacesPerDay>(bookedPlaces)[0] ||
          getEmptyBookedLakePlaces(payload.date),
        lakeId: payload.lakeId,
      }),
    );
  } catch (e) {
    yield put(GetLakeBookedPlacesPerDayError());
  }
}

export const LakesSagas = [
  takeEvery(UpdateLakeRequest.type, updateLakeSaga),
  takeLatest(GetLakeListRequest.type, getLakeListSaga),
  takeLatest(GetLakeByIdPlaceListRequest.type, getLakeByIdPlaceListSaga),
  takeLatest(GetLakeFishingListRequest.type, getLakeByIdFishingListSaga),
  takeLatest(
    GetLakeBookedPlacesPerDayRequest.type,
    getLakeByIdBookedPlacesSaga,
  ),
  takeLatest(GetLakeByIdRequest.type, getLakeByIdSaga),
];

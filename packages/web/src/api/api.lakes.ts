import { Lake, Fishing, LakePlace } from '@booklake/core';
import {
  firebaseStorage,
  firebaseFirestore,
} from '../services/firebase-service';

export const uploadLakePicture = async (
  lakeId: string,
  image: File,
  path: string,
): Promise<string> => {
  const lakeImageRef = firebaseStorage.ref().child(`lakes/${lakeId}/${path}`);
  await lakeImageRef.put(image);
  return await lakeImageRef.getDownloadURL();
};

export const uploadLakePictures = (lakeId: string, images: File[]) => {
  const imagePromises: Promise<string>[] = [];

  images.forEach(image => {
    const namesArray = image.name.split('.');
    const path = `${namesArray[0]}-picture.${namesArray.pop()}`;
    imagePromises.push(uploadLakePicture(lakeId, image, path));
  });
  return Promise.all(imagePromises);
};

export const uploadLakePlacePicture = (
  lakeId: string,
  placeId: string,
  image: File,
) =>
  uploadLakePicture(
    lakeId,
    image,
    `/places/place-${placeId}-picture.${image.name.split('.').pop()}`,
  );

export const uploadMainLakePicture = (uid: string, image: File) =>
  uploadLakePicture(uid, image, `main-picture.${image.name.split('.').pop()}`);

export const deleteLakePicture = (url: string) => {
  const ref = firebaseStorage.refFromURL(url);

  return ref.delete();
};

export const deleteLakePictures = (urls: string[]) =>
  urls.map(url => deleteLakePicture(url));

export const updateLake = ({ id, ...rest }: Lake) =>
  firebaseFirestore
    .collection('lakes')
    .doc(id)
    .set(rest, { merge: true });

const updateLakePlace = async (
  lakeId: string,
  { id, picture, ...rest }: LakePlace,
) => {
  if (picture instanceof File) {
    picture = await uploadLakePlacePicture(lakeId, id, picture);
  }

  return firebaseFirestore
    .collection('lakes')
    .doc(lakeId)
    .collection('places')
    .doc(id)
    .set({ picture, ...rest }, { merge: true });
};

const updateLakeFishing = (uid: string, { id, ...rest }: Fishing) =>
  firebaseFirestore
    .collection('lakes')
    .doc(uid)
    .collection('fishings')
    .doc(id)
    .set(rest, { merge: true });

export const updateLakePlaces = (uid: string, lakePlace: LakePlace[]) =>
  lakePlace.map(lakePlace => updateLakePlace(uid, lakePlace));

export const updateLakeFishings = (uid: string, fishings: Fishing[]) =>
  fishings.map(fishing => updateLakeFishing(uid, fishing));

export const getLakeById = async (id: string): Promise<Lake> => {
  const doc = await firebaseFirestore
    .collection('lakes')
    .doc(id)
    .get();

  return { ...doc.data(), id } as Lake;
};

export const getLakeBookedPlaces = ({
  lakeId,
  date,
}: {
  lakeId: string;
  date: string;
}) =>
  firebaseFirestore
    .collection('lakes')
    .doc(lakeId)
    .collection('dates')
    .where('date', '==', date)
    .get();

const getLakeSubCollection = (lakeId: string, name: string) =>
  firebaseFirestore
    .collection('lakes')
    .doc(lakeId)
    .collection(name)
    .get();

export const getLakePlaceList = (lakeId: string) =>
  getLakeSubCollection(lakeId, 'places');

export const getLakeFishingList = (lakeId: string) =>
  getLakeSubCollection(lakeId, 'fishings');

export const getLakeOptionList = (lakeId: string) =>
  getLakeSubCollection(lakeId, 'options');

const deleteLakeSubCollection = (
  collection: string,
  lakeId: string,
  id: string,
) =>
  firebaseFirestore
    .collection('lakes')
    .doc(lakeId)
    .collection(collection)
    .doc(id)
    .delete();

export const deleteLakeOptions = (lakeId: string, ids: string[]) =>
  ids.map(id => deleteLakeSubCollection('options', lakeId, id));

export const deleteLakePLaces = (lakeId: string, ids: string[]) =>
  ids.map(id => deleteLakeSubCollection('places', lakeId, id));

export const deleteLakeFishings = (lakeId: string, ids: string[]) =>
  ids.map(id => deleteLakeSubCollection('fishings', lakeId, id));

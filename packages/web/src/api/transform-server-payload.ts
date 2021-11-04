import { FirebaseServerCollection } from './api.types';

export const transformServerListItemPayload = <T>(
  doc: firebase.firestore.QueryDocumentSnapshot,
) => ({
  id: doc.id,
  ...(doc.data() as T),
});

export const transformServerListPayload = <T>(
  serverPayload: FirebaseServerCollection,
) => {
  const transformedPayload: T[] = [];
  serverPayload.forEach(doc => {
    transformedPayload.push(transformServerListItemPayload<T>(doc));
  });

  return transformedPayload;
};

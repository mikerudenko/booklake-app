import { firebaseFirestore } from '../services/firebase-service';

export const getFeaturesRequest = () =>
  firebaseFirestore.collection('features').get();

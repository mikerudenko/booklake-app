import firebase from 'firebase';

export interface ApiThunk {
  thunk: boolean;
}

export type FirebaseServerCollectionItem = firebase.firestore.QueryDocumentSnapshot;
export type FirebaseServerCollection = FirebaseServerCollectionItem[];

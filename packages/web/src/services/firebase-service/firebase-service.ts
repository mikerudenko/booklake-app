import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/performance';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(config);

export const firebaseFunctions = firebase.functions(firebaseApp);
export const firebaseStorage = firebase.storage(firebaseApp);
export const firebaseFirestore = firebase.firestore(firebaseApp);
export const firebaseAuth = firebase.auth(firebaseApp);
export const firebaseAnalytics = firebase.analytics(firebaseApp);
export const firebasePerformance = firebase.performance();

export const getCallableFunction = (name: string) =>
  firebaseFunctions.httpsCallable(name);

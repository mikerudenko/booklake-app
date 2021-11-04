import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { pick } from 'lodash';

import { resolveUserRole, filterObjectOnValidValues } from './functions.utils';

const updateUserInFirestore = (uid: string, payload: any) =>
  admin
    .firestore()
    .collection('users')
    .doc(uid)
    .set(payload, { merge: true });

export const onUserCreate = functions.auth.user().onCreate(async user => {
  if (!user.email) {
    return;
  }

  try {
    const role = await resolveUserRole(user.email);
    const { email, photoURL } = user;

    await admin.auth().setCustomUserClaims(user.uid, {
      role,
    });

    await updateUserInFirestore(user.uid, { role, email, photoURL });
  } catch (error) {
    console.log('BookLake: error on user create:', error);
  }
});

export const updateUser = functions.https.onCall(async (data: any, context) => {
  const currentUid = context.auth.uid;

  if (currentUid !== data.uid) {
    console.error('BookLake: UID is not the same then in auth');
    return;
  }

  const uid = data.uid;
  const payload = filterObjectOnValidValues(
    pick(data, ['email', 'password', 'displayName', 'photoURL']),
  );

  try {
    return Promise.all([
      updateUserInFirestore(uid, payload),
      admin.auth().updateUser(uid, payload),
    ]);
  } catch (error) {
    console.log('BookLake: error on user update :', error);
  }
});

import * as admin from 'firebase-admin';
import { USER_ROLES } from '@booklake/core';

export const resolveUserRole = async (email: string) => {
  const querySnapshot = await admin
    .firestore()
    .collection('rbac')
    .where('email', '==', email)
    .get();

  return (
    (querySnapshot.docs[0] && querySnapshot.docs[0].data().role) ||
    USER_ROLES.user
  );
};

export const getUserRole = async (uid: string) => {
  const res: any = await admin.auth().getUser(uid);
  return res.customClaims.role;
};

export const filterObjectOnValidValues = (object: Record<string, any>) =>
  Object.keys(object).reduce((validObject, key) => {
    if (!['', undefined].includes(object[key])) {
      validObject[key] = object[key];
    }
    return validObject;
  }, {} as Record<string, any>);

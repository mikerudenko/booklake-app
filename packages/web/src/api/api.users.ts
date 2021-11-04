import { getCurrentUser } from './api.auth';
import {
  getCallableFunction,
  firebaseStorage,
  firebaseFirestore,
} from '../services/firebase-service';

export const updateUserRequest = getCallableFunction('updateUser');
export const getManagersRequest = () =>
  firebaseFirestore
    .collection('users')
    .where('role', '==', 'manager')
    .get();

export const updateUserAvatar = async (avatar: File) => {
  const uid = getCurrentUser()!.uid;
  const avatarRef = firebaseStorage
    .ref()
    .child(`users/${uid}/avatar.${avatar.name.split('.').pop()}`);
  await avatarRef.put(avatar);
  return avatarRef.getDownloadURL();
};

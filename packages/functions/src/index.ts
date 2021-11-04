import * as admin from 'firebase-admin';

export { onUserCreate, updateUser } from './functions.users';

admin.initializeApp();

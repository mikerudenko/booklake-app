"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const lodash_1 = require("lodash");
const functions_utils_1 = require("./functions.utils");
const updateUserInFirestore = (uid, payload) => admin
    .firestore()
    .collection('users')
    .doc(uid)
    .set(payload, { merge: true });
exports.onUserCreate = functions.auth.user().onCreate(async (user) => {
    if (!user.email) {
        return;
    }
    try {
        const role = await functions_utils_1.resolveUserRole(user.email);
        const { email, photoURL } = user;
        await admin.auth().setCustomUserClaims(user.uid, {
            role,
        });
        await updateUserInFirestore(user.uid, { role, email, photoURL });
    }
    catch (error) {
        console.log('BookLake: error on user create:', error);
    }
});
exports.updateUser = functions.https.onCall(async (data, context) => {
    const currentUid = context.auth.uid;
    if (currentUid !== data.uid) {
        console.error('BookLake: UID is not the same then in auth');
        return;
    }
    const uid = data.uid;
    const payload = functions_utils_1.filterObjectOnValidValues(lodash_1.pick(data, ['email', 'password', 'displayName', 'photoURL']));
    try {
        return Promise.all([
            updateUserInFirestore(uid, payload),
            admin.auth().updateUser(uid, payload),
        ]);
    }
    catch (error) {
        console.log('BookLake: error on user update :', error);
    }
});
//# sourceMappingURL=functions.users.js.map
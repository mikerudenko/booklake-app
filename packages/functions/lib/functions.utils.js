"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const core_1 = require("@booklake/core");
exports.resolveUserRole = async (email) => {
    const querySnapshot = await admin
        .firestore()
        .collection('rbac')
        .where('email', '==', email)
        .get();
    return ((querySnapshot.docs[0] && querySnapshot.docs[0].data().role) ||
        core_1.USER_ROLES.user);
};
exports.getUserRole = async (uid) => {
    const res = await admin.auth().getUser(uid);
    return res.customClaims.role;
};
exports.filterObjectOnValidValues = (object) => Object.keys(object).reduce((validObject, key) => {
    if (!['', undefined].includes(object[key])) {
        validObject[key] = object[key];
    }
    return validObject;
}, {});
//# sourceMappingURL=functions.utils.js.map
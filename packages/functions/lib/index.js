"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
var functions_users_1 = require("./functions.users");
exports.onUserCreate = functions_users_1.onUserCreate;
exports.updateUser = functions_users_1.updateUser;
admin.initializeApp();
//# sourceMappingURL=index.js.map
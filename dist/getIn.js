"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parsePath_1 = require("./internal/parsePath");
const lang_1 = require("./lang");
exports.getIn = (src, path) => {
    try {
        const r = parsePath_1.parsePath(path).reduce((acc, k) => acc[k], src);
        if (Array.isArray(r)) {
            return [...r];
        }
        if (lang_1.isPlainObject(r)) {
            return Object.assign({}, r);
        }
        return r;
    }
    catch (_a) {
        return undefined;
    }
};
//# sourceMappingURL=getIn.js.map
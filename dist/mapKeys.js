"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const has_1 = require("./has");
function mapKeys(src, fn) {
    const result = {};
    for (const key in src) {
        if (has_1.has.own(src, key)) {
            const val = src[key];
            const newKey = fn(val, key, src);
            result[newKey] = val;
        }
    }
    return result;
}
exports.mapKeys = mapKeys;
//# sourceMappingURL=mapKeys.js.map
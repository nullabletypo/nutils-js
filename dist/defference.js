"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const has_1 = require("./has");
const contains_1 = require("./contains");
const idx_1 = require("./idx");
function difference(a, b, getKey) {
    if (getKey == undefined) {
        return a.filter(el => !contains_1.contains(b, el));
    }
    const bHash = idx_1.idx(b, { key: getKey });
    return a.filter(el => !has_1.has(bHash, getKey(el)));
}
exports.difference = difference;
//# sourceMappingURL=defference.js.map
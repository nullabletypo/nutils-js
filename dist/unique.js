"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const idx_1 = require("./idx");
const values_1 = require("./values");
function unique(src, getKey) {
    if (getKey == undefined) {
        return Array.from(new Set(src));
    }
    return values_1.values(idx_1.idx(src, { key: getKey }));
}
exports.unique = unique;
//# sourceMappingURL=unique.js.map
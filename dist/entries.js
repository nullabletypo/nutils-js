"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const has_1 = require("./has");
function entries(obj) {
    const origin = Object.entries;
    return (origin || ((src) => {
        const result = [];
        for (const k in src) {
            if (has_1.has.own(obj, k)) {
                result.push([k, obj[k]]);
            }
        }
        return result;
    }))(obj);
}
exports.entries = entries;
//# sourceMappingURL=entries.js.map
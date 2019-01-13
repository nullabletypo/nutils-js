"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const has_1 = require("./has");
function keys(obj) {
    const origin = Object.keys;
    return (origin ||
        ((src) => {
            const result = [];
            for (const key in src) {
                if (has_1.has.own(src, key)) {
                    result.push(key);
                }
            }
            return result;
        }))(obj);
}
exports.keys = keys;
//# sourceMappingURL=keys.js.map
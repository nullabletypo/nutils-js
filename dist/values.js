"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const has_1 = require("./has");
function values(obj) {
    const origin = Object.values;
    return (origin || ((src) => {
        const result = [];
        for (const key in src) {
            if (has_1.has.own(src, key)) {
                result.push(src[key]);
            }
        }
        return result;
    }))(obj);
}
exports.values = values;
//# sourceMappingURL=values.js.map
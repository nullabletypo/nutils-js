"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = require("./identity");
function flatten(src, mapper = identity_1.identity) {
    return src.reduce(transform, []);
    function transform(acc, el) {
        if (Array.isArray(el)) {
            return el.reduce(transform, acc);
        }
        acc.push(mapper(el));
        return acc;
    }
}
exports.flatten = flatten;
//# sourceMappingURL=flatten.js.map
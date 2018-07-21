"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = require("./identity");
const defaults = {
    key: (_, i) => i,
    val: identity_1.identity,
};
const transformer = (m) => {
    return (acc, el, i) => {
        acc[m.key(el, i)] = m.val(el, i);
        return acc;
    };
};
function _idx(src, mappers) {
    const m = Object.assign({}, defaults, mappers);
    return Array.from(src).reduce(transformer(m), {});
}
function by(src, key, mapper) {
    const m = { key: (el) => el[key], val: mapper };
    return _idx(src, m);
}
exports.idx = Object.assign(_idx, { by });
//# sourceMappingURL=idx.js.map
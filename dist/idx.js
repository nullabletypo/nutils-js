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
function _idx(src, mappers = {}) {
    const key = mappers['key'] || defaults['key'];
    const val = mappers['val'] || defaults['val'];
    return Array.from(src).reduce(transformer({ key, val }), {});
}
function by(src, key, mapper) {
    const m = Object.assign({}, defaults, { key: (el) => el[key], val: mapper });
    return _idx(src, m);
}
exports.idx = Object.assign(_idx, { by });
//# sourceMappingURL=idx.js.map
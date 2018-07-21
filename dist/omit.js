"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _omit(src, keys) {
    keys = Array.isArray(keys) ? keys : [keys];
    const clone = Object.assign({}, src);
    let i = -1;
    const len = keys.length;
    while (++i < len) {
        delete clone[keys[i]];
    }
    return clone;
}
function by(src, pred) {
    const copy = Object.assign({}, src);
    Object.keys(src).forEach(k => {
        const v = copy[k];
        if (pred(v, k, src)) {
            delete copy[k];
        }
    });
    return copy;
}
exports.omit = Object.assign(_omit, { by });
//# sourceMappingURL=omit.js.map
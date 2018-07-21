"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function contains(src, target, cmp = Object.is) {
    for (const el of src) {
        if (cmp(el, target)) {
            return true;
        }
    }
    return false;
}
exports.contains = contains;
exports.incluedes = contains;
//# sourceMappingURL=contains.js.map
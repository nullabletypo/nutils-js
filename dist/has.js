"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if tagret in obj
 *
 * @export
 * @param {*} obj
 * @param {string} target
 * @returns
 */
function _has(obj, key) {
    try {
        return key in obj;
    }
    catch (error) {
        return false;
    }
}
function own(obj, key) {
    try {
        return obj.hasOwnProperty(key);
    }
    catch (error) {
        return false;
    }
}
exports.has = Object.assign(_has, { own });
//# sourceMappingURL=has.js.map
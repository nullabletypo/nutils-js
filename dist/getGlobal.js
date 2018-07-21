"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * get global variables
 *
 * @export
 * @returns
 */
function getGlobal() {
    return Function('return this')();
}
exports.getGlobal = getGlobal;
//# sourceMappingURL=getGlobal.js.map
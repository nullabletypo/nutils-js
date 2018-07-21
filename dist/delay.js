"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * sleep N ms
 */
function delay(ms = 0) {
    return new Promise(resolve => {
        const tid = setTimeout(() => {
            clearTimeout(tid);
            resolve();
        }, ms);
    });
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map
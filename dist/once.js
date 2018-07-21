"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Invoke callback at once
 */
function once(f) {
    let invoked = false;
    return (...val) => {
        if (!invoked) {
            invoked = true;
            return f(...val);
        }
        return undefined;
    };
}
exports.once = once;
//# sourceMappingURL=once.js.map
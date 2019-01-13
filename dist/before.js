"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function before(n, cb) {
    return (...val) => {
        return --n >= 0 ? cb(...val) : undefined;
    };
}
exports.before = before;
//# sourceMappingURL=before.js.map
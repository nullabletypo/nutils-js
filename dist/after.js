"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const once_1 = require("./once");
function after(n, cb) {
    cb = once_1.once(cb);
    return (...val) => {
        return (--n > 0) ? undefined : cb(...val);
    };
}
exports.after = after;
//# sourceMappingURL=after.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const set_1 = require("./set");
function pick(src, keys) {
    keys = Array.isArray(keys) ? keys : [keys];
    return keys.reduce((acc, key) => set_1.set(acc, key, src[key]), {});
}
exports.pick = pick;
//# sourceMappingURL=pick.js.map
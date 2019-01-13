"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parsePath_1 = require("./internal/parsePath");
const rec_1 = require("./internal/rec");
exports.setIn = (src, path, value) => {
    return rec_1.rec(src, parsePath_1.parsePath(path), value, 0);
};
//# sourceMappingURL=setIn.js.map
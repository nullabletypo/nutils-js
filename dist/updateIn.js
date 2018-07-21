"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parsePath_1 = require("./internal/parsePath");
const rec_1 = require("./internal/rec");
exports.updateIn = (src, path, patch) => {
    const target = typeof src === 'function' ? src() : src;
    return rec_1.rec(target, parsePath_1.parsePath(path), patch, 0);
};
//# sourceMappingURL=updateIn.js.map
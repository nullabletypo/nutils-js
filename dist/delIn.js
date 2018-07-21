"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parsePath_1 = require("./internal/parsePath");
const omit_1 = require("./omit");
const updateIn_1 = require("./updateIn");
exports.delIn = (src, path) => {
    const _path = parsePath_1.parsePath(path);
    return updateIn_1.updateIn(src, _path.slice(0, -1), (o) => {
        const target = _path[_path.length - 1];
        return Array.isArray(o) ? o.filter((_x, i) => i !== Number(target)) : omit_1.omit(o, `${target}`);
    });
};
//# sourceMappingURL=delIn.js.map
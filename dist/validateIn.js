"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parsePath_1 = require("./internal/parsePath");
const getIn_1 = require("./getIn");
exports.validateIn = (src, path, pred) => {
    const r = getIn_1.getIn(src, parsePath_1.parsePath(path));
    return pred(r);
};
//# sourceMappingURL=validateIn.js.map
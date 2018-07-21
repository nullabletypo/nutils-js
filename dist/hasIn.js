"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parsePath_1 = require("./internal/parsePath");
const getIn_1 = require("./getIn");
exports.hasIn = (src, path) => {
    const target = typeof src === 'function' ? src() : src;
    const paths = parsePath_1.parsePath(path);
    try {
        if (paths.length <= 1) {
            const [key] = paths;
            return target.hasOwnProperty(key);
        }
        else {
            const rest = paths.slice(0, -1);
            const last = paths[paths.length - 1];
            return getIn_1.getIn(src, rest).hasOwnProperty(last);
        }
    }
    catch (_a) {
        return false;
    }
};
//# sourceMappingURL=hasIn.js.map
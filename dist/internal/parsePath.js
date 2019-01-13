"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parsePath(path) {
    return typeof path === 'string' ? path.split('.') : [...path].map(String);
}
exports.parsePath = parsePath;
//# sourceMappingURL=parsePath.js.map
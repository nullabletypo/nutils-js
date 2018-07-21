"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combine = ((...funcs) => {
    return (...val) => funcs.map(f => f(...val));
});
//# sourceMappingURL=combine.js.map
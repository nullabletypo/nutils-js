"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = ((...funcs) => {
    return (val) => {
        for (const pred of funcs) {
            if (!pred(val)) {
                return false;
            }
        }
        return true;
    };
});
//# sourceMappingURL=and.js.map
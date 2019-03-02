"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.univ = (onServer, onClient) => (...src) => {
    if (typeof window === 'undefined') {
        return onServer(...src);
    }
    else {
        return onClient(...src);
    }
};
//# sourceMappingURL=univ.js.map
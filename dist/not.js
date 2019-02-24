"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a pred function reversed it result
 */
function not(f) {
    return (...val) => !Boolean(f(...val)); // eslint-disable-line
}
exports.not = not;
//# sourceMappingURL=not.js.map
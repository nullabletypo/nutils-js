"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composer = (direction) => ((...funcs) => {
    if (funcs.length === 0) {
        return (arg) => arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    const targets = direction === 'LEFT' ? [...funcs].reverse() : funcs;
    return targets.reduce((a, b) => (...args) => a(b(...args)));
});
const right = composer('RIGHT');
const left = composer('LEFT');
exports.compose = Object.assign(left, { right });
//# sourceMappingURL=compose.js.map